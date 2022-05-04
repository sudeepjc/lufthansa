import React from "react";
import config from 'react-global-configuration';

const TransactionModal = (props) => {
    return (
        <div className="modal3" id="modal">
            <div className="container1" >
                <div className={props.status.state === "Success" ? 'col-green one' : props.status.state === "Failure" ? 'col-red one' : ''}>
                </div>
                <div className="row">
                    <div className="col-1 mt-30">
                        {props.status.state === "Success" ?
                            <i className="fa fa-check-circle"></i> : props.status.state === "Failure" ? <i className="fa fa-times-circle"></i> : null}
                    </div>
                    <div className=" col-auto text-lect word-break mrgs-tr">
                        <div>
                            <div className="stake-status">
                            <div> {props.status.message} </div>
                                <a rel="noreferrer" href={`${config.get('link')}/tx/${props.status.hash}`} target="_blank" ><i className="fa fa-external-link m-link"></i> </a>
                            </div>
                        </div >
                    </div>
                </div>
            </div>
            <div className="actions"> </div>
        </div>
    );
}

export default TransactionModal