import React from "react";
import config from 'react-global-configuration';

const TransactionSubmitModal = (props) => {

    const onClose = () => {
        props.onClose();
    };

    console.log(props, 'props')
    
    return (
        <div className="modal2" id="modal">
            <div className="content">
                <div className="toggle-button" onClick={() => { onClose() }}>
                    <i className="fa fa-times-circle"></i>
                </div>
                <div className="mg-t-107 col_white">
                    <i className="fa fa-hourglass-half fa-2x"></i>
                </div>
                <div className="mt-40 col_white">
                    Transaction submitted.
                </div>
                { props.status.hash ?
                    <div className="mt-40">
                        <a rel="noreferrer" href={`${config.get('link')}/tx/${props.status.hash}`} target="_blank" >
                            <button className="bscScan-btn">
                                View on bscscan.com   <i className="fa fa-external-link m-link"></i>
                            </button>
                        </a>
                    </div> : null
                }
                <div className="actions"> </div>
            </div>
        </div>
    );
}

export default TransactionSubmitModal