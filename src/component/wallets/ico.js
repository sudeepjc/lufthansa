import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import mainLogo from '../../assets/main_logo.png';
import MetaMaskWallet from './metamask';
import WalletConnectComponent from './walletconnect';
import getWeb3 from '../helpers/getWeb3';
import {getTokenContract} from '../helpers/getTokenContract';
import {getOfferingContract} from '../helpers/getOfferingContract';
import { formatValue } from '../helpers/wrappers';
import useRecursiveTimeout from '../helpers/useRecursiveTimeout';
import { getBNBValue, getUSDValue, getPriceInBNB, getPriceInUSD } from '../helpers/bigNumCal';
import ErrorModal from '../modals/errorModal';
import TransactionSubmitModal from '../modals/transactionSubmitModal';
import TransactionModal from '../modals/transactionModal';
import config from 'react-global-configuration';
import facebook from '../../assets/socials/facebook.png';
import instagram from '../../assets/socials/instagram.png';
import telegram from '../../assets/socials/telegram.png';
import twitter from '../../assets/socials/twitter.png';
import youtube from '../../assets/socials/youtube.png';

export const ICO = (props) => {
    const [eShow, seteShow] = useState(false);
    const [tShow, settShow] = useState(false);
    const [sShow, setsShow] = useState(false);
    const [connected, setConnected] = useState(false);
    const [web3Stuff, setweb3Stuff] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [error, setError] = useState(null);
    // const [errorType, setErrorType] = useState("");
    const [status, setStatus] = useState("");
    const [balance, setBalance] = useState("--");
    const [tokenBalance, setTokenBalance] = useState("--");
    const [price, setPrice] = useState(null);
    const [tokenCount, setTokenCount] = useState("");
    const [tokenRate, setTokenRate] = useState("");

    useEffect(() => {
        async function getTokenBalance() {
            if (isValidConnection()) {
                try {
                    let tokenBalance = await web3Stuff.tokenContract.methods.balanceOf(accounts[0]).call({ from: accounts[0] });
                    tokenBalance = web3Stuff.web3.utils.fromWei(tokenBalance, 'ether');
                    setTokenBalance(tokenBalance);
                    // setError(null);
                    console.log(`LFA balance for ${accounts[0]} : ${tokenBalance}`);
                } catch (err) {
                    console.log(`Fetching LFA balance for ${accounts[0]} failed. ${err.message}`);
                    // setError({error: err, type: "unexpected"});
                }
            } else {
                setTokenBalance('--');
            }
        }
        getTokenBalance();
    },[accounts, connected, status, tokenBalance]);

    useEffect(() => {
        async function getTokenPhaseRate() {
            if (isValidConnection()) {
                try {
                    let rate = await web3Stuff.offeringContract.methods.rate().call({ from: accounts[0] });
                    setTokenRate(rate);
                    // setError(null);
                    console.log(`LFA Rate ${accounts[0]} : ${rate}`);
                } catch (err) {
                    console.log(`Fetching LFA Rate for ${accounts[0]} failed. ${err.message}`);
                    // setError({error: err, type: "unexpected"});
                }
            } else {
                setTokenRate('');
            }
        }
        getTokenPhaseRate();
    },[accounts, connected, status]);

    useEffect(() => {
        async function getBNBBalance() {
            if (isValidConnection()) {
                try {
                    let balance = await web3Stuff.web3.eth.getBalance(accounts[0]);
                    balance = web3Stuff.web3.utils.fromWei(balance, 'ether');
                    setBalance(balance);
                    // setError(null);
                    console.log(`BNB balance for ${accounts[0]} : ${balance}`);
                } catch (err) {
                    console.log(`Fetching BNB balance for ${accounts[0]} failed. ${err.message}`);
                    // setError({error: err, type: "unexpected"});
                }
            } else {
                setBalance('--');
            }
        }
        getBNBBalance();
    },[connected, accounts, status, balance]);

    const fetchBNBPrice = () => {
        fetch("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd")
            .then(res => res.json())
            .then((result) => {
                setPrice({price: result.binancecoin.usd});
                // setError(null);
            },
                (err) => {
                    console.log(`Fetch BNB price failed. ${err.message}`);
                    // setError({error: err, type: "unexpected"});
                }
            );
    }

    useEffect(() => {
        fetchBNBPrice();
    },[error]);

    useRecursiveTimeout(() => {
        fetchBNBPrice();
    }, 10000);

    const showErrorModal = () => {
        seteShow(!eShow);
    };
    
    const handleErrorFromChildComponent = (type, error) => {
        setError({error:error, type: type});
        showErrorModal();
    }
    
    const showTransactionSubmitModal = () => {
        settShow(!tShow);
    };

    const showTransactionStatusModal = () => {
        setsShow( !sShow);
    };

    const onConnect = async (chainId, wallet) => {
        try {
            console.log(`Connected to chain : ${config.get('link')}`);
            const web3 = await getWeb3(wallet);
            const tokenContract = await getTokenContract(web3);
            const offeringContract = await getOfferingContract(web3);
            setweb3Stuff({ chainId: chainId, web3: web3, tokenContract: tokenContract, offeringContract: offeringContract });
            setConnected(true);
            console.log("On Connection:");
            console.log(web3);
            console.log(tokenContract);
            console.log(offeringContract);
            console.log(chainId);

        } catch (err) {
            console.log(`Connection failed. ${err.message}`);
            setError({error: err, type: 'Connect Error'});
            showErrorModal();
        }
    }

    const onAccountChange = (newAccounts) => {
        setAccounts(newAccounts);
    }

    const onDisconnect = () => {
        setConnected(false);
    }
    const handleBuyInTokenCount = (event) => {
        setTokenCount(event.target.value);
    }

    const isValidConnection = () => {
        if ((web3Stuff !== null && web3Stuff.tokenContract && (web3Stuff.tokenContract._address !== null))
            && (web3Stuff !== null && web3Stuff.offeringContract && (web3Stuff.offeringContract._address !== null))
            && (accounts && accounts.length > 0)) {
            return true;
        }
        return false;
    }

    const formatBNBBalance = () => {
        return formatValue(null, balance, 4);
    }

    const formatLAFBalance = () => {
        return formatValue(null, tokenBalance, 4);
    }

    const formatBNBValue = () => {
        if( tokenRate !== "" && tokenCount !== "") {
            return getBNBValue(tokenRate, tokenCount);
        } else {
            return "";
        }
    }

    const formatUSDValue = () => {
        if( tokenRate !== "" && tokenCount !== "" && price !== null ) {
            return getUSDValue(tokenRate, price.price, tokenCount);
        } else {
            return "--";
        }
    }

    const formatPriceInBNB = () => {
        if( tokenRate !== "") {
            return getPriceInBNB(tokenRate);
        } else {
            return "";
        }
    }

    const formatPriceInUSD = () => {
        if( tokenRate !== "" && price !== null) {
            return getPriceInUSD(tokenRate, price.price );
        } else {
            return "--";
        }
    }

    const handleError = (err, receipt, eventName) => {
        console.log('Handling Error:');
        console.log(err);
        console.log(receipt);
        console.log(eventName);
        if (receipt) {
            setStatus({state: 'Failure', hash: receipt.transactionHash, message: `${eventName} Failed`});
            showTransactionStatusModal();
        } else {
            if (err.code && (err.code !== 0)) {
                let message = `${err.code} : ${err.message}`;
                setError({error: new Error(message), type: 'other error'});
                showErrorModal();
            }
        }
    }

    const handleBuyRequest = async () => {
        try {
            if (isValidConnection()) {
                if (tokenCount <= 0) {
                    console.log('Input Validation failed: Value should be greater than ZERO');
                    setError({error : new Error('Value should be greater than ZERO'), type: "other error"});
                    showErrorModal();
                } else {
                    // let amount = web3Stuff.web3.utils.toWei(tokenCount, 'ether');
                    let bnb = web3Stuff.web3.utils.toWei(formatBNBValue(),'ether');
                    let tx = await web3Stuff.offeringContract.methods.buyTokens().send({ from: accounts[0], value: bnb })
                        .on('transactionHash', function (hash) {
                            setStatus({status: 'Submit', hash: hash});
                            showTransactionSubmitModal();
                        })
                        .on('receipt', function (receipt) {
                            let amt = web3Stuff.web3.utils.fromWei(receipt.events.BoughtTokens.returnValues.value, 'ether');
                            setStatus({state: 'Success', hash: receipt.transactionHash, message: `${amt} LFA bought successfully`});
                            showTransactionStatusModal();
                        })
                        .on('error', function (err, receipt) {
                            handleError(err, receipt, 'Buy');
                        });
                    console.log(tx);
                }
            } else {
                // console.log('Validation failed: Connect to Binance Smart Chain');
                setError({error : new Error('Connect to Binance Smart Chain'), type: "connect wallet"});
                showErrorModal();
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    const navigationBar = () => {
        return (
            <div >
                <nav className="navbar navbar-expand-lg navbar-expand-sm nav-pad bg_06121e">
                    <a className="navbar-brand ">
                        <Link className="nav-ele dis_flex " to="/">
                            <img src={mainLogo} alt="main Logo" className="lf_logo mr_10"></img>
                        Lufthansa Finance</Link>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
        )
    }
    
    return (
        <div className="bg_1c2636 mb-exp">{navigationBar()}
            { eShow ? <ErrorModal error={error} show={eShow} onClose={showErrorModal} /> : <div/>}
            { tShow ? <TransactionSubmitModal status={status} show={tShow} onClose={showTransactionSubmitModal}/> : <div/>}
            { sShow ? <TransactionModal status={status} show={sShow} onClose={showTransactionStatusModal}/> : <div/>}

            <div className="col_white head-why-2 pad_25"> ICO</div>
            <div className=" center_container ">
                <div className='card-ico'>
                    <div className="flex-center justify-content-around">
                        <div className="row col-md-4">
                            <label className="field-cls color-cf font-14" >BNB : {formatBNBBalance()}</label>
                            <label className="field-cls color-cf font-14" >LFA : {formatLAFBalance()}</label>
                        </div>
                        <div className=" row col-md-6">
                            <MetaMaskWallet onConnection={onConnect} onAccountChange={onAccountChange} onError={handleErrorFromChildComponent} onDisconnect={onDisconnect} />
                            <WalletConnectComponent onConnection={onConnect} onAccountChange={onAccountChange} onError={handleErrorFromChildComponent} onDisconnect={onDisconnect}/>
                        </div>
                    </div>
                </div>
                <div className="card-ico">
                    <div className="flex-center">
                        <div className="col_white r_text">
                            LFA
                        </div>
                        <input className="input-cls-add color-cf font-14 mr_30 mt_20" type="number" placeholder="Token amount" onChange={handleBuyInTokenCount} />
                        <div className="flex-right">
                        <button className= "buy-btns" disabled={!connected} onClick={handleBuyRequest}>Buy</button>
                    </div>
                    </div>
                    <div className=" flex-center">
                        <div className="col_white r_text spread">
                            {`${formatUSDValue()}` + " USD" + " @ Price " +  `${formatPriceInUSD()}` + " $USD" }
                        </div>
                    </div>
                    {/* <div className="flex-right">
                        <button className={connected ? "card-btns" : "card-btns "} disabled={!connected} onClick={handleBuyRequest}>Buy</button>
                    </div> */}
                </div>

            </div>
            <div className='hero-pads col_white z_index_2 bg-fullopacity'>
                <div className="row mt-85 mb_30">
                    <div className="col-md-3 "></div>
                    <div className="col-md-1 "> 
                        <a rel="noreferrer" href={"https://t.me/lufthansafinance"} target="_blank" >
                            <img src={telegram} alt="GPU Logo" className='socials'/>
                        </a>
                    </div>
                    <div className="col-md-1 ">
                        <a rel="noreferrer" href={"https://twitter.com/lufthansa_f?t=uiWh1GavG4RFFXTLZXQ25w&s=08"} target="_blank" >
                            <img src={twitter} alt="GPU Logo" className='socials'/>
                        </a>
                    </div>
                    <div className="col-md-1 ">
                        <a rel="noreferrer" href={"https://www.instagram.com/lufthansa_finance/"} target="_blank" >
                            <img src={instagram} alt="GPU Logo" className='socials'/>
                        </a>
                    </div>
                    <div className="col-md-1 ">
                        <a rel="noreferrer" href={"https://www.facebook.com/Lufthansa-Finance-100766252633476/"} target="_blank" >
                            <img src={facebook} alt="GPU Logo" className='socials'/>
                        </a>
                    </div>
                    <div className="col-md-1 ">
                        <a rel="noreferrer" href={"https://www.youtube.com/channel/UCFULuzRZHoJkxgAkNaxPkFg"} target="_blank" >
                            <img src={youtube} alt="GPU Logo" className='socials'/>
                        </a>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className="row mb_exp flex-center">
                    ©2022 Lufthansa Finance. All Rights Reserved.
                </div>
            </div>
        </div>
    )
}