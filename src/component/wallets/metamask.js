import React, { useState, useEffect } from 'react';
import config from 'react-global-configuration';
import MetaMaskOnboarding from '@metamask/onboarding';
import { shortAddress } from '../helpers/addressUtils';
// import { useDispatch } from 'react-redux';
// import { setErrorModal } from '../../redux/actions/errorModalActions';

function MetaMaskWallet({ onConnection, onAccountChange, onError, onDisconnect }) {
    // const dispatch = useDispatch();
    const [isInstalled, setIsInstalled] = useState(false);
    const [isInstalling, setIsInstalling] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [accounts, setAccounts] = useState([]);

    let onboarding;

    useEffect(() => {
        if (isMetaMaskInstalled()) {
            setIsInstalled(true);
            window.ethereum.on('accountsChanged', handleNewAccounts);
            window.ethereum.on('chainChanged', handleNewChain);
            window.ethereum.on('connect', handleOnConnection);
            window.ethereum.on('disconnect', handleDisconnect);
        }

        return function cleanup() {
            if (isMetaMaskInstalled()) {
                window.ethereum.removeListener('accountsChanged', handleNewAccounts);
                window.ethereum.removeListener('chainChanged', handleNewAccounts);
                window.ethereum.removeListener('connect', handleOnConnection);
                window.ethereum.removeListener('disconnect', handleDisconnect);
            }
        }
    }, []);

    const showErrorModal = ( type, error) => {
        onError( type, error);
    };

    const isMetaMaskInstalled = () => {
        const { ethereum } = window
        return Boolean(ethereum && ethereum.isMetaMask)
    }

    const installMetamask = () => {
        const currentUrl = new URL(window.location.href);
        // console.log(currentUrl);
        const forwarderOrigin = currentUrl.hostname === 'localhost' ? 'http://localhost:3000' : undefined;
        // console.log(forwarderOrigin);

        try {
            onboarding = new MetaMaskOnboarding({ forwarderOrigin });
            setIsInstalling(true);
            onboarding.startOnboarding();
        } catch (err) {
            if (err.code && err.code === 4001) {
                //Ignore User Tx Reject
            }
            console.log(`Error during Metamask installation: ${err.message}`);
            showErrorModal('other error', err);
        }
    }

    const connectToMetamask = async () => {
        try {
            const { ethereum } = window;

            const newAccounts = await ethereum.request({
                method: 'eth_requestAccounts',
            });
            handleNewAccounts(newAccounts);

            const chainId = await ethereum.request({
                method: 'eth_chainId',
            });
            handleNewChain(chainId);
            setIsConnected(true);

        } catch (err) {
            if (err.code && err.code === 4001) {
                //Ignore User Tx Reject
            }
            console.log(`Error during Metamask connection: ${err.message}`);
            showErrorModal('other error', err);
        } finally {
            if (onboarding) {
                console.log('onboarding stopped');
                onboarding.stopOnboarding();
            }
        }
    }

    const connectWallet = async () => {
        if (!isInstalled) {
            installMetamask();
        } else {
            connectToMetamask();
        }
    }

    const getConnectButtonString = () => {
        let connectButtonString = 'Connect Metamask';
        if (!isInstalled) {
            if (isInstalling) {
                connectButtonString = 'Installing Metamask';
            } else {
                connectButtonString = 'Install Metamask';
            }
        } else if (isConnected) {
            connectButtonString = shortAddress(accounts[0]);
        }
        return connectButtonString;
    }

    const handleNewAccounts = (newAccounts) => {
        setAccounts(newAccounts);
        onAccountChange(newAccounts);
    }

    const handleOnConnection = (connectionInfo) => {
        console.log(`ConnectionInfo: ${connectionInfo.chainId}`);
        if (onboarding) {
            console.log('onboarding stopped');
            onboarding.stopOnboarding();
        }
    }

    const handleDisconnect = () => {
        setIsConnected(false);
        handleNewAccounts([]);
        onDisconnect();
    }


    const setLinkConfiguration = (chainId) => {
        if (chainId === '0x38') {
            config.set({ link: 'https://bscscan.com', pToken: '0xe9e7cea3dedca5984780bafc599bd69add087d56' }, { freeze: false });
            // config.set({ link: 'https://bscscan.com', pToken: '0xa1e1B2b468220E2dd82c84977FE464834f088f8c' }, { freeze: false });
        } else if (chainId === '0x61') {
            config.set({ link: 'https://testnet.bscscan.com', pToken: '0x83fa07FF99bF0556A9e50498b695c6efB69bB212' }, { freeze: false });
        } else {
            config.set({ link: '', pToken: '' }, { freeze: false });
        }
    }

    function handleNewChain(chainId) {
        console.log(`Connected to Chain : ${chainId}`);
        setLinkConfiguration(chainId);
        onConnection(chainId,'Metamask');

        if (!(chainId === '0x38' || chainId === '0x61')) {
            console.log('Switch to BSC');
            showErrorModal('switch', new Error(`Connect to the Binance Smart Chain`));
        }
    }

    return (
        <div>
            <button className="wallet_button" onClick={connectWallet}> {getConnectButtonString()}</button>
            <button className="icon-button " onClick={handleDisconnect}><i className="fa fa-close"/></button>
        </div>
    );
}

export default MetaMaskWallet;