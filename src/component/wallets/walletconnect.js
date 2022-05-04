// import WalletConnect from "@walletconnect/client";
// import QRCodeModal from "@walletconnect/qrcode-modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import React, { useState, useEffect } from 'react';
import config from 'react-global-configuration';
import { shortAddress } from '../helpers/addressUtils';
import Web3 from 'web3';
import { disconnect } from "process";

function WalletConnectComponent({ onConnection, onAccountChange, onError, onDisconnect }) {
    
    const [isConnected, setIsConnected] = useState(false);
    const [accounts, setAccounts] = useState([]);
    const [provider, setProvider] = useState(null);

    // useEffect(() => {
    //     if (isMetaMaskInstalled()) {
    //         setIsInstalled(true);
    //         window.ethereum.on('accountsChanged', handleNewAccounts);
    //         window.ethereum.on('chainChanged', handleNewChain);
    //         window.ethereum.on('connect', handleOnConnection);
    //     }

    //     return function cleanup() {
    //         if (isMetaMaskInstalled()) {
    //             window.ethereum.removeListener('accountsChanged', handleNewAccounts);
    //             window.ethereum.removeListener('chainChanged', handleNewAccounts);
    //             window.ethereum.removeListener('connect', handleOnConnection);
    //         }
    //     }
    // }, []);

    const showErrorModal = ( type, error) => {
        onError( type, error);
    };

    const connectUsingWalletConnect = async () => {
        try {
            const provider = new WalletConnectProvider({
                rpc: {
                    56: "https://bsc-dataseed1.binance.org",
                    97: "https://data-seed-prebsc-1-s1.binance.org:8545",
                },
            });

            console.log(provider);
            
            setProvider(provider);
            
            //  Enable session (triggers QR Code modal)
            const accounts = await provider.enable();
            handleNewChain(provider.chainId);
            console.log(accounts[0]);
            handleNewAccounts(accounts);
            
            // Subscribe to accounts change
            provider.on("accountsChanged", handleNewAccounts);

              // Subscribe to chainId change
            provider.on("chainChanged", handleNewChain);

              // Subscribe to session disconnection
            provider.on("disconnect", handleDisconnect);
            
            const web3 = new Web3(provider);
            console.log(web3);
            return web3

        } catch (err) {
            if (err.code && err.code === 4001) {
                //Ignore User Tx Reject
            }
            setProvider(null);
            setIsConnected(false);
            console.log(`Error during WalletConnect connection: ${err.message}`);
            showErrorModal('other error', err);
        }
    }

    const getConnectButtonString = () => {
        let connectButtonString = 'Wallet Connect';
        if (isConnected) {
            connectButtonString = shortAddress(accounts[0]);
        }
        return connectButtonString;
    }

    const handleNewAccounts = (newAccounts) => {
        setAccounts(newAccounts);
        onAccountChange(newAccounts);
        setIsConnected(true);
    }

    const handleOnConnection = (connectionInfo) => {
        console.log(`ConnectionInfo: ${connectionInfo.chainId}`);
    }

    const handleDisconnect = () => {
        setIsConnected(false);
        if(provider && provider.connected){

            provider.disconnect();
        }
        disconnect();
    }

    const setLinkConfiguration = (chainId) => {
        if (chainId === '0x38') {
            config.set({ link: 'https://bscscan.com', pToken: '0xe9e7cea3dedca5984780bafc599bd69add087d56' }, { freeze: false });
        } else if (chainId === '0x61') {
            config.set({ link: 'https://testnet.bscscan.com', pToken: '0x83fa07FF99bF0556A9e50498b695c6efB69bB212' }, { freeze: false });
        } else {
            config.set({ link: '', pToken: '' }, { freeze: false });
        }
    }

    function handleNewChain(chainId) {
        console.log(`Connected to Chain : ${chainId}`);
        setLinkConfiguration(chainId);
        onConnection(chainId, 'WalletConnect');

        if (!(chainId == '56' || chainId == '97')) {
            console.log('Switch to BSC');
            showErrorModal('switch', new Error(`Connect to the Binance Smart Chain`));
        }
    }

    return (
        <div>
            <button className="wallet_button" onClick={connectUsingWalletConnect}> {getConnectButtonString()}</button>
            <button className="icon-button " onClick={handleDisconnect}><i className="fa fa-close"/></button>
        </div>
    );
}

export default WalletConnectComponent;




