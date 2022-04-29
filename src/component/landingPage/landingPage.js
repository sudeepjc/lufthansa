import React, { Component } from 'react';
import Countdown from 'react-countdown';
import rocket from '../../assets/rocket.png';
import wordPressLogo from '../../assets/wordpress.png';
import wooCommerceLogo from '../../assets/woocommerce.png'
import openCartLogo from '../../assets/opencart.png'
import paymentGateway from '../../assets/paymentGateway.jpg'
import linkImg from '../../assets/link.svg'
import tokenInfo from '../../assets/token-info.png'
import { Link } from "react-router-dom";
import mainLogo from '../../assets/main_logo.png'
import './stars.scss';

export class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      toLiveChart: false,
      toLandPage: true,
    }
    this.focusAbout = React.createRef()
    this.focusApps = React.createRef()
    this.focusTeam = React.createRef()
    this.focusRoadmap = React.createRef()
  }

  render() {

    const handleOnClick = (event) => {
      //.current is verification that your element has rendered
      if (event) {
        event.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        })
      }
    }


    const navigationBar = () => {
      return (
        <div >
          <nav class="navbar navbar-expand-lg navbar-expand-sm nav-pad bg_06121e z_index_2">
            <a class="navbar-brand ">

              <Link className="nav-head dis_flex " to="/">
                <img src={mainLogo} alt="main Logo" className="lf_logo mr_10"></img>

                Lufthansa Finance </Link>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link nav-ele" onClick={() => {
                    handleOnClick(this.focusAbout.current)
                  }}>About <span class="sr-only"></span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-ele" >
                    <Link className="nav-ele" to="/livechart">Live Chart</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-ele" onClick={() => {
                    handleOnClick(this.focusApps.current)
                  }}>Apps</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-ele" onClick={() => {
                    handleOnClick(this.focusRoadmap.current)
                  }}>Roadmap</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-ele" onClick={() => {
                    handleOnClick(this.focusTeam.current)
                  }}>Team</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )
    }
    const heroSection = () => {
      return (
        <div >
          <div className="hero-pads center_container">
            <div className="row col_white ">
              <div className="col-md-6 align-self-center z_index_2 bg-semitransparent">
                <div className="head-1 text_left pad-head-1 ">
                  The Most Efficient
                  Payment Solution to Unite The World is Right
                </div>
                <div className="sub-head-1 col_636A70 text_left">
                  Do you have any trouble when you are about
                  to looking for an online payment gateway that
                  provide an easy transaction process using cryptocurrencies
                </div>
                <div className="mt_50">
                  <button class="button"><i class="fa fa-download iconspacing "></i>
                    Whitepaper
                  </button>
                </div>
              </div>
              <div className="col-md-6 align-self-center ">
            <div class="stars">
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                </div>
                <img src={rocket} alt="GPU Logo" className="bg_svg " />
                <div className="z_index_2 p_relative">
                  <div className="pre-sale   ">
                    PRESALE
                  </div>
                  <Countdown className="countdown ls_5 " date={Date.now() + 3000000}>
                  </Countdown>

                  <div className="mt-cd ">
                    <span className="countdown_subs">DAYS</span>
                    <span className="countdown_subs" >HOURS</span>
                    <span className="countdown_subs">MINUTES</span>
                    <span className="countdown_subs">SECONDS</span>
                  </div>
                  <div className="mt_50">
                    <Link to="/ico">
                      <button class="button">
                        Buy Now
                  </button>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )
    }

    const aboutSection = () => {
      return (
        <div className="" ref={this.focusAbout}>
    
          <div className="hero-pads center_container" >
            <div className="row col_white ">
              <div className="col-md-6 align-self-center z_index_2 bg-fullopacity">
                <div className="head-1 text_left pad-head-1 ">
                  We’ve built a platform
                  for facilitate all your transaction needs
                </div>
                <div className="sub-head-1 col_636A70 text_left">
                  Payment gateway is a merchant service provided by an e-commerce application service provider that authorizes credit card or direct payments processing for e-businesses, online retailers, bricks and clicks, or traditional brick and mortar. The payment gateway may be provided by a bank to its customers, but can be provided by a specialised financial service provider as a separate service, such as a payment service provider.
                </div>
              </div>
              <div className="col-md-6 align-self-center z_index_2 bg-fullopacity">
                <img src={paymentGateway} alt="payment gateway" className="global-svg" />
              </div>
            </div>
          </div>
        </div>
      )
    }
    
    const integration = () => {
      return (
        <div className="mt-integration" >
          <div className="center_container p_relative z_index_2 bg-fullopacity">
            <img src={linkImg} alt="GPU Logo" className="link_svg_1" />

            <div className="row col_white  ">

              <div className="col-md-6 align-self-center">
                <div className="head-1 text_left pad-head-1 z_index_2  ">
                  Integration
                </div>
              </div>
              <div className="col-md-6 align-self-center  ">
                <div className="row integration-card">
                  <div className="col-md-6 align-self-center">
                    <div>
                      <div className="circle">
                        <img src={wordPressLogo} alt="GPU Logo" className="int_logo1" />
                      </div>
                      <div className="font_18">
                        Wordpress
                      </div>
                    </div>
                    <div>
                      <div className="circle">
                        <img src={wooCommerceLogo} alt="GPU Logo" className="int_logo2" />

                      </div>
                      <div className="font_18">
                        Woocommerce
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 align-self-center">
                    <div>
                      <div className="circle">
                        <i class="fa fa-code int_logo4"></i>
                      </div>
                      <div className="font_18">
                        HTML/PHP
                      </div>
                    </div>
                    <div>
                      <div className="circle">
                        <img src={openCartLogo} alt="GPU Logo" className="int_logo3" />

                      </div>
                      <div className="font_18">
                        Opencart
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      )

    }


    const whySection = () => {
      return (
        <div className="mt-about">
          <div className="hero-pads center_container col_white p_relative z_index_2 bg-fullopacity">
            <div className="head-why-2 pad-head-1">
              WHY CHOOSE LIKKA ?
            </div>
            <div className="row col_white ">
              <div className="col-md-6 align-self-center">
                <div>
                  <div className="text_left bold pad-head-1 ">
                    Payment API
                </div>
                  <div className="sub-head-why col_636A70 text_left">
                    It will manage customer’s Pay Money experience by integrating our seamless API interface within your website.
                  </div>
                </div>
                <div>
                  <div className="text_left bold pad-head-1 ">
                    Low Tax
                </div>
                  <div className="sub-head-why col_636A70 text_left">
                    A built in system with the lowest possible cost that energizes customer to grab it.
                  </div>
                </div>
                <div>
                  <div className="text_left bold pad-head-1 ">
                    Friendly To Use
                </div>
                  <div className="sub-head-why col_636A70 text_left">
                    A built in system with the lowest possible cost that energizes customer to grab it.
                  </div>
                </div>
              </div>
              <div className="col-md-6 align-self-center">
                <div>
                  <div className="text_left bold pad-head-1 ">
                    Faster Payments
                </div>
                  <div className="sub-head-why col_636A70 text_left">
                    Make payment from one corner of the world to another in just a few seconds. Making payment is very easy and fast.

            </div>
                </div>
                <div>
                  <div className="text_left bold pad-head-1 ">
                    Secure and Safe
                </div>
                  <div className="sub-head-why col_636A70 text_left">
                    Customer’s data security is the first priority. Make your transactions safe, sound and secure.

            </div>
                </div>
                <div>
                  <div className="text_left bold pad-head-1 ">
                    Online Payments
                </div>
                  <div className="sub-head-why col_636A70 text_left">
                    Whether it is credit, debit or bank account you can pay by your preferred way
            </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    const toeknInfo = () => {
      return (
        <div className=" p_relative  hero-pads center_container ">
          <div className="row">
            <div className="col-md-6 align-self-center ">
              <img src={tokenInfo} alt="global net" className="global-svg" />
            </div>
            <div className="col-md-6 col_white">

              <div className="z_index_2 p_relative bg-fullopacity">
                <div className="pre-sale   ">
                  PRIVATE SALE WILL START IN
                </div>
                <Countdown className="head-1 ls_5 bold " date={Date.now() + 3000000}>
                </Countdown>

                <div className="mt-cd ">
                  <span className="countdown_subs">DAYS</span>
                  <span className="countdown_subs" >HOURS</span>
                  <span className="countdown_subs">MINUTES</span>
                  <span className="countdown_subs">SECONDS</span>
                </div>
                <div className="mt_85">
                  <button class="button">
                    Purchase Token Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='mt_85 bg-fullopacity'>

          <div className="col_white dis_flex">
            <div className="square" style={{ backgroundColor: "#0c6dfd" }}></div> <div> Yeil Farming (25%) </div>
            <div className="square" style={{ backgroundColor: "#46996d" }} ></div> <div> Token Sale (25%) </div>
            <div className="square" style={{ backgroundColor: "#4ed2f3" }}></div> <div>Liquidity Pool (20%) </div>
            <div className="square" style={{ backgroundColor: "#ffc007" }}></div> <div>Marketing (7%) </div>
            <div className="square" style={{ backgroundColor: "#dc3444" }}></div>  <div>Team & Community(4%)</div>
            <div className="square" style={{ backgroundColor: "#383839" }}></div> <div>Airdrop (4%)</div>
            <div className="square" style={{ backgroundColor: "#6263fb" }}></div> <div>Listing (7%)</div>
          </div>
          <div class="progress p-bar">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '25%' }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" style={{ width: '25%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" style={{ width: '7%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar" style={{ width: '4%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar progress-bar-striped  progress-bar-animated" role="progressbar" style={{ width: '4%', backgroundColor: '#000000c2' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar progress-bar-striped  progress-bar-animated" role="progressbar" style={{ width: '15%', backgroundColor: '#0000ff94' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>

          </div>
          </div>
          {/* <div className="circle-info cir-1-pose">
            <div className="circ-text">
              Tottal Supply:
              1000.000.000

            </div>
          </div>
          <div className="circle-info cir-2-pose">
            <div className="circ-text">
              Ticker:
              $IKA

            </div>
          </div>
          <div className="circle-info cir-3-pose">
            <div className="circ-text">
              Token Name:
              LIKKA

            </div>
          </div>
          <div className="circle-info cir-4-pose">
            <div className="circ-text">
              Decimal: 9

            </div>
          </div> */}

        </div>
      )
    }
    const roadMap = () => {
      return (
        <div ref={this.focusRoadmap}>
          <div className="p_relative z_index_2 bg-fullopacity">
          <div className="head-why-2 f-w-300 col_white pad-head-1 " >
            THE ROADMAP
                </div>

          <div class="row1-container">
            <div class="box box-down cyan">
              <div className="col_614ade font_18 bold rm-h">Phase 2</div>
              <div className="col_white fw-200">
                <div className="mt-rm-c">
                  Marketing Campaigns

              </div>
                <div className="mt-rm-c">
                  Airdrop 2 Campaigns

              </div>
                <div className="mt-rm-c">
                  Presale

              </div>
                <div className="mt-rm-c">
                  Certik Audit

              </div>
                <div className="mt-rm-c">
                  Dex Launch ( Pancakeswap)

              </div>
              </div>

              <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
            </div>

            <div class="box red">
              <div className="col_614ade font_18 bold rm-h">Phase 1</div>
              <div className="col_white fw-200">

                <div className="mt-rm-c">
                  Linkka Development
              </div>
                <div className="mt-rm-c">
                  Website Development
              </div>
                <div className="mt-rm-c">
                  Token Creation + Audit
              </div>
                <div className="mt-rm-c">
                  Airdrop 1 Campaigns
              </div>
                <div className="mt-rm-c">
                  Private Sale
              </div>
              </div>
              <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
            </div>

            <div class="box box-down blue">
              <div className="col_614ade font_18 bold rm-h">Phase 3</div>
              <div className="col_white fw-200">

                <div className="mt-rm-c">
                  Yield Farming Launch
              </div>
                <div className="mt-rm-c">
                  Token Brigdes (ETH & Polygon)

              </div>
                <div className="mt-rm-c">
                  Listing Uniswap & Quickswap

              </div>
                <div className="mt-rm-c">
                  Airdrop Distribution 1&2

              </div>
                <div className="mt-rm-c">
                  CMC, CG listing & Coinbase

              </div>
              </div>
              <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
            </div>
          </div>
          <div class="row2-container ">
            <div class="box orange">
              <div className="col_614ade font_18 bold rm-h">Phase 4</div>
              <div className="col_white fw-200">
                <div className="mt-rm-c">
                  Cex Listing

              </div>
                <div className="mt-rm-c">
                  Launch Linkka Apps

              </div>
                <div className="mt-rm-c">
                  Strategic Partnership

              </div>
                <div className="mt-rm-c">
                  NFT Pools Launch

              </div>
                <div className="mt-rm-c">
                  Visa & Mastercard Partnership

              </div>
              </div>
              <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
            </div>
          </div>
        </div>
        </div>
      )
    }

    const services = () => {
      return (
        <div ref={this.focusApps}>
          <div class="container-service hero-pads center_container "  >
            <div className="col_white head-why-2">Our Services</div>
            <div class="row-service p_relative z_index_2 bg-fullopacity">
              <div class="service" >
                <div className="col_white mb_30 font_18 head-service">Crypto Payments</div>
                <div className="col_white sub-head-service">
                  A powerful solution that allows your customers to make payment using crypto coins including $IKA $Bitcoin, $Litecoin, $Dogecoin, $BNB ,
                </div>
              </div>
              <div class="service">
                <div className="col_white mb_30 font_18 head-service">E-commerce</div>
                <div className="col_white sub-head-service">
                  Easily create your own store and add products. A complete e-commerce with maintainability and efficiency to make an organized store for you.
                </div>
              </div>
              <div class="service" >
                <div className="col_white mb_30 font_18 head-service">Events</div>
                <div className="col_white sub-head-service">
                  Do not hesitate to compete with a lot of events. A beautiful and easily trackable event management is provided for making your tasks get done easier.
          </div>
              </div>
              <div class="service">
                <div className="col_white mb_30 font_18 head-service">E-booking</div>
                <div className="col_white sub-head-service">
                  Allow your customers to make payment for bookings or appointments in a quick, easy and secured process that suits them the most.
          </div>
              </div>
              <div class="service">
                <div className="col_white mb_30 font_18 head-service">Currency Exchange</div>
                <div className="col_white sub-head-service">
                  Default currency to another, you can change it easily.
          </div>
              </div>
              <div class="service">
                <div className="col_white mb_30 font_18 head-service">Instant Onboarding</div>
                <div className="col_white sub-head-service">
                  Merchants can get payments instantly from anywhere, anytime without any hassle. A simple and better way to expand your business.
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    const team = () => {
      return (
        <div className="mt-about mb_120" ref={this.focusTeam}>
          <section id="cards">
            <div class="container py-2 ">
              <div class="row pb-4">
                <div class="col-12 text-center">
                  <div class=" col_white head-why-2">Our Team</div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 pt-5">
                  <div class="card shadow-sm border-0">
                    <div class="card-body">
                      <div class="user-picture">
                        <img src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle" height="130" width="130" />
                      </div>
                      <div class="user-content">
                        <h5 class="text-capitalize user-name">Carry Johnshon</h5>
                        <p class=" text-capitalize text-muted small blockquote-footer">CEO</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 pt-5">
                  <div class="card shadow-sm border-0">
                    <div class="card-body">
                      <div class="user-picture">
                        <img src="https://images.unsplash.com/photo-1582003457856-20898dd7e1ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle" height="130" width="130" />
                      </div>
                      <div class="user-content">
                        <h5 class="text-capitalize user-name">Alex Carry</h5>
                        <p class=" text-capitalize text-muted small blockquote-footer">CTO</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 pt-5">
                  <div class="card shadow-sm border-0">
                    <div class="card-body">
                      <div class="user-picture">
                        <img src="https://images.unsplash.com/photo-1492447166138-50c3889fccb1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle" height="130" width="130" />
                      </div>
                      <div class="user-content">
                        <h5 class="text-capitalize user-name">John Smith</h5>
                        <p class=" text-capitalize text-muted small blockquote-footer">Tech Lead</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 pt-5">
                  <div class="card shadow-sm border-0">
                    <div class="card-body">
                      <div class="user-picture">
                        <img src="https://i.picsum.photos/id/836/130/130.jpg?hmac=Sot_REUw5W-XSuE6FmCjT9JenhZfiNqZYs3AQbfrZsc" class="shadow-sm rounded-circle" height="130" width="130" />
                      </div>
                      <div class="user-content">
                        <h5 class="text-capitalize user-name">George Alex</h5>
                        <p class=" text-capitalize text-muted small blockquote-footer">Community Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 pt-5">
                  <div class="card shadow-sm border-0">
                    <div class="card-body">
                      <div class="user-picture">
                        <img src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle" height="130" width="130" />
                      </div>
                      <div class="user-content">
                        <h5 class="text-capitalize user-name">John Wright</h5>
                        <p class=" text-capitalize text-muted small blockquote-footer">Web developer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 pt-5">
                  <div class="card shadow-sm border-0">
                    <div class="card-body">
                      <div class="user-picture">
                        <img src="https://images.unsplash.com/photo-1582003457856-20898dd7e1ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle" height="130" width="130" />
                      </div>
                      <div class="user-content">
                        <h5 class="text-capitalize user-name">Samuel Hampston</h5>
                        <p class=" text-capitalize text-muted small blockquote-footer">Smart Contract developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
          </section>
        </div>
      )
    }
    return (
      <div className="bg_1c2636 ">

        {navigationBar()}
        <div className="p_relative">
          {heroSection()}
        </div>
        {aboutSection()}
        {whySection()}
        {integration()}
        {toeknInfo()}
        {roadMap()}
        {services()}
        {team()}
        {/* {<LiveChart></LiveChart>} */}

        {/* ----ticker--  */}
        <div className="ticker-1"><div className="ticker-2"><iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover=" width="100%" height="36px" scrolling="auto" marginWidth="0" marginHeight="0" frameBorder="0" border="0" className="ticker-4"></iframe></div>
          <div className="ticker-5"><a target="_blank" className="ticker-3"></a></div></div>
        {/* ---ticker--  */}

      </div >
    );
  }
}