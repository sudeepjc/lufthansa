import React from "react";
import bscImg from '../../assets/bsc_logo_2x.png';

const ErrorModal = (props) => {

    const onClose = () => {
        props.onClose();
    };

    console.log(props);

    return (
        <div className="modal2" id="modal">
            <div className="content">
                { props.error.type === 'connect wallet' ?
                    <div>
                        <div className="mg-t-107 col_white">
                            <i className="fa fa-wallet fa-2x"></i>
                        </div>
                        <div className="mt-30 f-20 col_white">
                            Wallet not connected. Please connect your wallet.
                        </div>
                        <div className="mt-50">
                            <button className="bscScan-btn" onClick={() => { onClose() }}>
                                Okay
                            </button>
                        </div>
                    </div>
                    : props.error.type === 'switch' ? <div>
                        <div className="align-c">
                            <div className="mg-t-107 ">
                                <img src={bscImg} className="bsc-img" alt='bsc-img'>
                                </img>
                            </div>
                            <div className="mt-30 f-20 col_white">
                                Please switch to Binance Smart Chain (BSC)
                            </div>
                            <div className="mt-50">
                                <button className="bscScan-btn"
                                    onClick={() => { onClose() }}>
                                    Okay
                                </button>
                            </div>
                        </div>
                    </div> : props.error.type === 'other error' ?
                        <div className="align-c">
                            <div className="mg-t-107 col_white">
                                <i className="fa fa-exclamation-circle fa-2x"></i>
                            </div>
                            <div className="mt-30 f-20 col_white">
                                {props.error.error.message}
                            </div>
                            <div className="mt-50">
                                <button className="bscScan-btn" onClick={() => { onClose() }}>
                                    Okay
                                </button>
                            </div>
                        </div>
                        : null
                }
            </div>
            <div className="actions"></div>
        </div>
    );
}

export default ErrorModal