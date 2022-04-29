import React, { Component } from 'react';
import { Link } from "react-router-dom";
import mainLogo from '../../assets/main_logo.png'


export class ICO extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_drop: 'Connect Wallet'
        }

    }

    render() {
        const navigationBar = () => {
            return (
                <div >
                    <nav class="navbar navbar-expand-lg navbar-expand-sm nav-pad bg_06121e">
                        <a class="navbar-brand ">
                            <Link className="nav-ele dis_flex " to="/">
                                <img src={mainLogo} alt="main Logo" className="lf_logo mr_10"></img>
                            Lufthansa Finance</Link>
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                </div>
            )
        }
        return (
            <div className="bg_1c2636">{navigationBar()}
                <div className="col_white head-why-2 pad_50"> ICO</div>
                <div className=" center_container ">
                    <div className="flex-center">
                        <input className="input-cls-add color-cf font-14 mr_30" type="number" placeholder="Address " />
                        <div className="btn-group">
                            <button type="button" className="btn btn-success dropdown-toggle dd_width" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.state.selected_drop}
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" onClick={() => { this.setState(() => ({ selected_drop: 'Wallet Connect' })) }}>Wallet Connect</a>
                                <a className="dropdown-item" onClick={() => { this.setState(() => ({ selected_drop: 'Metamask' })) }}>Metamask</a>

                            </div>
                        </div>
                    </div>
                    <div className="card-ico">
                        <div className="flex-center">
                            <input className="input-cls-add color-cf font-14 mr_30 mt_20" type="number" placeholder="Token amount " />
                            <div className="col_white r_text">
                                Token
                            </div>
                        </div>

                        <div className="flex-center">
                            <input className="input-cls-add color-cf font-14 mr_30 mt_20" type="number" placeholder="Equivalent BNB " />
                            <div className="col_white r_text">
                                BNB
                            </div>
                        </div>
                        <div className="flex-center">
                            <input className="input-cls-add color-cf font-14 mr_30 mt_20" type="number" placeholder="Equivalent USD " />
                            <div className="col_white r_text">
                                USD
                            </div>
                        </div>


                        <div className="mt_25">
                            <button class=" mt_30 card-btns">Connect</button>
                        </div>

                    </div>
                    {/* <div className="text_left">
                        <button class=" ml-10 card-btns">Connect</button>

                    </div> */}


                </div>
            </div>
        )
    }
}