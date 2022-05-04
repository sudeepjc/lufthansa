import React, { Component } from 'react';
import Countdown from 'react-countdown';
import rocket from '../../assets/rocket.png';
import paymentGateway from '../../assets/paymentGateway.jpg'
import { Link } from "react-router-dom";
import mainLogo from '../../assets/main_logo.png'
import './stars.scss';
import facebook from '../../assets/socials/facebook.png';
import instagram from '../../assets/socials/instagram.png';
import telegram from '../../assets/socials/telegram.png';
import twitter from '../../assets/socials/twitter.png';
import youtube from '../../assets/socials/youtube.png';

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
          <nav className="navbar navbar-expand-lg navbar-expand-sm nav-pad bg_06121e z_index_2">
            <a className="navbar-brand ">

              <Link className="nav-head dis_flex " to="/">
                <img src={mainLogo} alt="main Logo" className="lf_logo mr_10"></img>

                Lufthansa Finance </Link>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link nav-ele" onClick={() => {
                    handleOnClick(this.focusAbout.current)
                  }}>About <span className="sr-only"></span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-ele" >
                    <Link className="nav-ele" to="/livechart">Live Chart</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-ele" onClick={() => {
                    handleOnClick(this.focusApps.current)
                  }}>Apps</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-ele" onClick={() => {
                    handleOnClick(this.focusRoadmap.current)
                  }}>Roadmap</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-ele" onClick={() => {
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
                  The Most Efficient Payment Solution To Unite The World is Right Here
                </div>
                <div className="sub-head-1 col_636A70 text_left">
                  Do you have trouble when you are looking for an online payment gateway that provides an easy transaction process using cryptocurrency
                </div>
                <div className="mt_50 flex_space_between">
                  <Link to="lufthansa_finance_whitepaper.pdf" target="_blank" download>
                    <button className="button"><i className="fa fa-download iconspacing "></i>Whitepaper</button>
                  </Link>
                  <a rel="noreferrer" href={"https://bscscan.com/address/0x250b50338ac468dfcae51402a0f57569f2ceec7c"} target="_blank" >
                    <button className="button">
                      Smart Contract <i className="fas fa-external-link-alt  m-link"></i>
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-md-6 align-self-center ">
            <div className="stars">
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                </div>
                <img src={rocket} alt="GPU Logo" className="bg_svg " />
                <div className="z_index_2 p_relative">
                  <div className="pre-sale   ">
                    PRESALE
                  </div>
                  <Countdown className="countdown ls_5 " date={1651708800000}>
                  </Countdown>

                  <div className="mt-cd ">
                    <span className="countdown_subs">DAYS</span>
                    <span className="countdown_subs" >HOURS</span>
                    <span className="countdown_subs">MINUTES</span>
                    <span className="countdown_subs">SECONDS</span>
                  </div>
                  <div className="mt_50">
                    <Link to="/ico">
                      <button className="button">
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
                  We have built a platform to facilitate all your transaction needs
                </div>
                <div className="sub-head-1 col_636A70 text_left">
                  Payment gateway is a merchant service provided by an E-Commerce application provider that authorises credit card or direct payment processing for e-businesses, online retailers, bricks and clicks or traditional brick and motar. The payment gateway maybe provided by a bank to its customers,  but can be provided by a specialised Financial Service Provider as a separate service, such as a payment service provider.
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
    
    const icoPhases = () => {
      return (
        <div className="mt-fundraising" >
          <div className="center_container p_relative ">
            <div className="head-why-2 f-w-300 col_white pad-head-1 " >
              Fundraising Rounds
            </div>
            <div className="row col_white z_index_2 bg-fullopacity flex_space_around">
              <div className=" col-md-4 align-self-center fundraising-card">
                <div className="round-head bold text_centre round-head-1  ">
                  Round 1
                  <div className='font_12 normal'>
                    ( 1 LFA = 0.0000025 BNB )
                  </div>
                </div>
                <div className="flex_space_around">
                  <div className='text_left'>
                    <div className='mt_20'>
                      $LFA for 1 BNB
                    </div>
                    <div className=' mt_20'>
                      StartTime
                    </div>
                    <div className=' mt_20'>
                      EndTime
                    </div>
                    <div className='mt_20'>
                      Duration
                    </div>
                  </div>
                  <div className='bold text_left'>
                    <div className=' mt_20'>
                      400,000
                    </div>
                    <div className='  mt_20'>
                      May 05, 2022 12:00 UTC
                    </div>
                    <div className='  mt_20'>
                      May 14, 2022 23:59 UTC
                    </div>
                    <div className=' mt_20'>
                      10 days
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-md-4 align-self-center fundraising-card">
                <div className="round-head bold text_centre round-head-1  ">
                  Round 2
                  <div className='font_12 normal'>
                    ( 1 LFA = 0.00000375 BNB )
                  </div>
                </div>
                <div className="flex_space_around">
                  <div className=' text_left'>
                    <div className='mt_20'>
                      $LFA for 1 BNB
                    </div>
                    <div className=' mt_20'>
                      StartTime
                    </div>
                    <div className=' mt_20'>
                      EndTime
                    </div>
                    <div className='mt_20'>
                      Duration
                    </div>
                  </div>
                  <div className='bold text_left'>
                    <div className=' mt_20'>
                      266,666
                    </div>
                    <div className=' mt_20'>
                      May 15, 2022 12:00 UTC
                    </div>
                    <div className=' mt_20'>
                      May 24, 2022 23:59 UTC
                    </div>
                    <div className=' mt_20'>
                      10 days
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 align-self-center fundraising-card">
                <div className="round-head bold text_centre round-head-1  ">
                  Round 3
                  <div className='font_12 normal'>
                    ( 1 LFA = 0.000005 BNB )
                  </div>
                </div>
                <div className="flex_space_around">
                  <div className=' text_left'>
                    <div className='mt_20'>
                      $LFA for 1 BNB
                    </div>
                    <div className=' mt_20'>
                      StartTime
                    </div>
                    <div className=' mt_20'>
                      EndTime
                    </div>
                    <div className='mt_20'>
                      Duration
                    </div>
                  </div>
                  <div className=' bold text_left'>
                    <div className=' mt_20'>
                      200,000
                    </div>
                    <div className=' mt_20'>
                      May 25, 2022 12:00 UTC
                    </div>
                    <div className=' mt_20'>
                      June 03, 2022 23:59 UTC
                    </div>
                    <div className=' mt_20'>
                      10 days
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-md-4 align-self-center fundraising-card">
                <div className="round-head bold text_centre round-head-1  ">
                  Round 4
                  <div className='font_12 normal'>
                    ( 1 LFA = 0.00000625 BNB )
                  </div>
                </div>
                <div className="flex_space_around">
                  <div className=' text_left'>
                    <div className='mt_20'>
                      $LFA for 1 BNB
                    </div>
                    <div className=' mt_20'>
                      StartTime
                    </div>
                    <div className=' mt_20'>
                      EndTime
                    </div>
                    <div className='mt_20'>
                      Duration
                    </div>
                  </div>
                  <div className=' bold text_left'>
                    <div className=' mt_20'>
                      160,000
                    </div>
                    <div className=' mt_20'>
                      June 04, 2022 12:00 UTC
                    </div>
                    <div className=' mt_20'>
                      June 13, 2022 23:59 UTC
                    </div>
                    <div className=' mt_20'>
                      10 days
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
          <div className="hero-pads center_container col_white p_relative ">
            <div className="head-why-2 pad-head-1">
              WHY PREFER LUFTHANSA ?
            </div>
            <div className="row col_white z_index_2 bg-fullopacity">
              <div className="col-md-6 align-self-center">
                <div>
                  <div className="text_left bold pad-head-1 ">
                    Faster payments and process
                  </div>
                  <div className="sub-head-why col_636A70 text_left">
                    You can experience an easier and fastest way of transaction process in just one click
                  </div>
                </div>
                <div>
                  <div className="text_left bold pad-head-1 ">
                    Secure and safe
                  </div>
                  <div className="sub-head-why col_636A70 text_left">
                    We provide secure and safe transactions And also see to the data security of every customer
                  </div>
                </div>
                <div>
                  <div className="text_left bold pad-head-1 ">
                    Online payment
                  </div>
                  <div className="sub-head-why col_636A70 text_left">
                    Lufthansa provides any mode of payment at your convenience ( Credit, debit or directly to bank account)
                  </div>
                </div>
              </div>
              <div className="col-md-6 align-self-center">
                <div>
                  <div className="text_left bold pad-head-1 ">
                    Payment API
                  </div>
                  <div className="sub-head-why col_636A70 text_left">
                    By integrating our seamless API interface within your website it manages customer’s pay money
                  </div>
                </div>
                <div>
                  <div className="text_left bold pad-head-1 ">
                    Low tax
                  </div>
                  <div className="sub-head-why col_636A70 text_left">
                    A built-in system with lowest cost that stimulates customer to use it.
                  </div>
                </div>
                <div>
                  <div className="text_left bold pad-head-1 ">
                    Friendly to use
                  </div>
                  <div className="sub-head-why col_636A70 text_left">
                    A customer friendly platform that allows easy and safe transaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    
    const tokenInfo = () => {
      return (
        <div className=" p_relative hero-pads center_container ">
          <div className="row">
            <div className="col-md-6 col_white">
              <div className="z_index_2 p_relative bg-fullopacity">
                <div className="pre-sale">
                  Token Information
                </div >
                <div className="flex_space_around">
                  <div className="text_left ">
                    <div className="mt_20">
                      Token Name
                    </div>
                    <div className="mt_20">
                      Ticker
                    </div>
                    <div className="mt_20">
                      Decimals
                    </div>
                    <div className="mt_20">
                      Total Supply
                    </div>
                  </div>
                  <div className='text_left  bold'>
                    <div className=" mt_20">
                      Lufthansa Finance
                    </div>
                    <div className="mt_20">
                      $LFA
                    </div>
                    <div className="mt_20 ">
                      18
                    </div>
                    <div className="mt_20">
                      100.000.000
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col_white">

              <div className="z_index_2 p_relative bg-fullopacity">
                <div className="pre-sale   ">
                  PRIVATE SALE WILL START IN
                </div>
                <Countdown className="head-1 ls_5 bold " date={1651708800000}>
                </Countdown>

                <div className="mt-cd ">
                  <span className="countdown_subs">DAYS</span>
                  <span className="countdown_subs" >HOURS</span>
                  <span className="countdown_subs">MINUTES</span>
                  <span className="countdown_subs">SECONDS</span>
                </div>
                <div className="mt_50">
                  <Link to="/ico">
                    <button className="button">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='mt_85 bg-fullopacity'>

          <div className="col_white dis_flex">
            <div className="square" style={{ backgroundColor: "#0c6dfd" }}></div> <div> Yield Farming (25%) </div>
            <div className="square" style={{ backgroundColor: "#46996d" }} ></div> <div> Token Sale (25%) </div>
            <div className="square" style={{ backgroundColor: "#4ed2f3" }}></div> <div>Liquidity Pool (15%) </div>
            <div className="square" style={{ backgroundColor: "#ffc007" }}></div> <div>Marketing (4%) </div>
            <div className="square" style={{ backgroundColor: "#dc3444" }}></div>  <div>Team & Community(4%)</div>
            <div className="square" style={{ backgroundColor: "#383839" }}></div> <div>Airdrop (4%)</div>
            <div className="square" style={{ backgroundColor: "#6263fb" }}></div> <div>IDO & Others (23%)</div>
          </div>
          <div className="progress p-bar">
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '25%' }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" style={{ width: '25%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
            <div className="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar" style={{ width: '15%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" style={{ width: '4%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            <div className="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar" style={{ width: '4%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            <div className="progress-bar progress-bar-striped  progress-bar-animated" role="progressbar" style={{ width: '4%', backgroundColor: '#000000c2' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            <div className="progress-bar progress-bar-striped  progress-bar-animated" role="progressbar" style={{ width: '23%', backgroundColor: '#0000ff94' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          </div>
        </div>
      )
    }

    const roadMap = () => {
      return (
        <div ref={this.focusRoadmap}>
          <div className="mt-roadmap hero-pads p_relative">
            <div className="head-why-2 f-w-300 col_white pad-head-1 " >
              THE ROADMAP
            </div>
            <div className="z_index_2 bg-fullopacity">
              <div className="row1-container">
                <div className="box box-down red">
                  <div className=" col_white font_18 bold mb_30">Phase 1</div>
                  <div className="col_white fw-200">
                  <div className="mt-rm-c">
                    Lufthansa Development
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
                <div className="box cyan">
                  <div className="col_white font_18 bold mb_30">Phase 2</div>
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
                <div className="box box-down blue">
                  <div className="col_white font_18 bold mb_30">Phase 3</div>
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
              <div className="row2-container ">
                <div className="box orange">
                  <div className="col_white font_18 bold mb_30">Phase 4</div>
                  <div className="col_white fw-200">
                    {/* <div className="mt-rm-c">
                      Cex Listing
                    </div> */}
                    <div className="mt-rm-c">
                      Launch Lufthansa Apps
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
        </div>
      ) 
    }

    const services = () => {
      return (
        <div ref={this.focusApps}>
          <div className="container-service hero-pads center_container "  >
            <div className="col_white head-why-2">WHAT LUFTHANSA CAN DO FOR YOU ?</div>
            <div className="row-service p_relative z_index_2 bg-fullopacity">
              <div className="service" >
                <div className="col_white mb_30 font_18 head-service">E- commerce</div>
                <div className="col_white sub-head-service">
                  With complete E-commerce efficiency and maintainability to create an organised store for you. Easily create your own store and add products
                </div>
              </div>
              <div className="service">
                <div className="col_white mb_30 font_18 head-service">Crypto payments</div>
                <div className="col_white sub-head-service">
                  Crypto coins such as $LFA, $Bitcoin $Litecoin, $Dogecoin, $ BNB Can be used by customers to make payment
                </div>
              </div>
              <div className="service" >
                <div className="col_white mb_30 font_18 head-service">Events</div>
                <div className="col_white sub-head-service">
                  An effective and easily trackable event management is provided to make your task easier. Do not hesitate to compete with a lot of events
                </div>
              </div>
              <div className="service">
                <div className="col_white mb_30 font_18 head-service">Currency exchange</div>
                <div className="col_white sub-head-service">
                  You can now change and exchange currency easily
                </div>
              </div>
              <div className="service">
                <div className="col_white mb_30 font_18 head-service">Instant onboarding</div>
                <div className="col_white sub-head-service">
                  Hassle free payments can be a veiled by merchants from anywhere anytime
                </div>
              </div>
              <div className="service">
                <div className="col_white mb_30 font_18 head-service">E booking</div>
                <div className="col_white sub-head-service">
                  Customers can make bookings or appointments easily and in a secured process by just a click
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    const team = () => {
      return (
        <div className="mt-about" ref={this.focusTeam}>
          <section id="cards">
            <div className="container py-2 ">
              <div className="row pb-4">
                <div className="col-12 text-center">
                  <div className=" col_white head-why-2">Our Team</div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 pt-5">
                  <div className="card shadow-sm border-0">
                    <div className="card-body">
                      <div className="user-picture">
                        <img src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" className="shadow-sm rounded-circle" height="130" width="130" />
                      </div>
                      <div className="user-content">
                        <h5 className="text-capitalize text_left">Carry Johnshon</h5>
                        <p className=" text-capitalize text-muted small text_left">CEO</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 pt-5">
                  <div className="card shadow-sm border-0">
                    <div className="card-body">
                      <div className="user-picture">
                        <img src="https://images.unsplash.com/photo-1582003457856-20898dd7e1ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" className="shadow-sm rounded-circle" height="130" width="130" />
                      </div>
                      <div className="user-content">
                        <h5 className="text-capitalize text_left">Alex Mount</h5>
                        <p className=" text-capitalize text-muted small text_left">CTO</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 pt-5">
                  <div className="card shadow-sm border-0">
                    <div className="card-body">
                      <div className="user-picture">
                        <img src="https://images.unsplash.com/photo-1492447166138-50c3889fccb1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" className="shadow-sm rounded-circle" height="130" width="130" />
                      </div>
                      <div className="user-content">
                        <h5 className="text-capitalize text_left">John Smith</h5>
                        <p className=" text-capitalize text-muted small text_left">Tech Lead</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 pt-5">
                  <div className="card shadow-sm border-0">
                    <div className="card-body">
                      <div className="user-picture">
                        <img src="https://i.picsum.photos/id/836/130/130.jpg?hmac=Sot_REUw5W-XSuE6FmCjT9JenhZfiNqZYs3AQbfrZsc" className="shadow-sm rounded-circle" height="130" width="130" />
                      </div>
                      <div className="user-content">
                        <h5 className="text-capitalize text_left">Sarah George </h5>
                        <p className=" text-capitalize text-muted small text_left">Community Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 pt-5">
                  <div className="card shadow-sm border-0">
                    <div className="card-body">
                      <div className="user-picture">
                        <img src="https://www.albion.edu/wp-content/uploads/2021/12/tyler-hood-december-2021-900.jpg" className="shadow-sm rounded-circle" height="130" width="130" />
                      </div>
                      <div className="user-content">
                        <h5 className="text-capitalize text_left">Will Kentuck</h5>
                        <p className=" text-capitalize text-muted small text_left">Smart Contract Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 pt-5">
                  <div className="card shadow-sm border-0">
                    <div className="card-body">
                      <div className="user-picture">
                        <img src="https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png" className="shadow-sm rounded-circle" height="130" width="130" />
                      </div>
                      <div className="user-content">
                        <h5 className="text-capitalize text_left">Hannah Samuel </h5>
                        <p className=" text-capitalize text-muted small text_left">Web Developer</p>
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
    const socials = () => {
      return (
        <div className="mt-fundraising mb_exp">
          <div className="hero-pads center_container col_white p_relative ">
            <div className="head-why-2 pad-head-1">
              SOCIALS
            </div>
            <div className='mt-50 col_white z_index_2 bg-fullopacity'>
              <div className="row mt-85 mb_exp">
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
              <div className="row mt-85 mb_exp flex-center">
                ©2022 Lufthansa Finance. All Rights Reserved.
              </div>
            </div>
          </div>
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
        {tokenInfo()}
        {icoPhases()}
        {roadMap()}
        {services()}
        {team()}
        {socials()}
        <div className="ticker-1"><div className="ticker-2"><iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover=" width="100%" height="36px" scrolling="auto" marginWidth="0" marginHeight="0" frameBorder="0" border="0" className="ticker-4"></iframe></div>
          <div className="ticker-5"><a target="_blank" className="ticker-3"></a></div>
        </div>
      </div >
    );
  }
}