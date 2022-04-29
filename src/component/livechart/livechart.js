import React, { Component } from 'react';
import { Link } from "react-router-dom";
import mainLogo from '../../assets/main_logo.png'


export class LiveChart extends Component {


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
                <div className="col_white head-why-2 pad_50"> Live Chart</div>
                <div className=" center_container ">
                    <div className="live-chart-1 ">
                        <div className="live-chart-2 ">
                            <iframe src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=75&pref_coin_id=1505&graph=yes" width="100%" height="4480px" scrolling="auto" marginWidth="0" marginHeight="0" frameBorder="0" border="0" className="live-chart-5"></iframe></div>
                        <div className="live-chart-3">
                            <a target="_blank" className="live-chart-4"></a></div></div>

                </div>
            </div>
        )
    }
}