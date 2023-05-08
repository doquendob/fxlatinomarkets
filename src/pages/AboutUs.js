import React from 'react'
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import FooterFour from '../common/footer/FooterFour';
import BrandThree from '../elements/brand/BrandThree';
import AboutFour from '../elements/about/AboutFour';
import ServiceOne from "../elements/service/ServiceOne";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import CounterUpFour from "../elements/counterup/CounterUpFour";
import TeamFour from "../elements/team/TeamFour";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import Separator from "../elements/separator/Separator";

const AboutUs = () => {
    return (
        <>
            <SEO title="About Us" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 height-850 bg_image" data-black-overlay="7" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo/logo.png)`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner pt--80 text-center">
                                    <div>
                                        <h3 className="rn-sub-badge"><span className="theme-gradient">Our Company's About Details.</span></h3>
                                    </div>
                                    <h1 className="title display-one">We create profitable and funded <br /> traders.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}


                {/* Start Service Area  */}
                <div className="service-area rn-section-gapTop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="content">
                                    <h3 className="title">We are a company that specializes in the financial markets specifically on FOREX market.</h3>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p className="mb--10">we are known by our high-quality services at affordable prices. Our mission is to create as many funded traders as possible to improve their lifestyle and get the financial freedom being our services the bridge between..</p>
                                <h4 className="title">My story: </h4>
                                <p className="story">I'm Diego Oquendo a forex trader who started in this world 6 years ago, losing a lot of money trying to predict the markets, I started to look for some resources and mentors through the internet, the more I found the more I got frustrated, I tried hundreds of strategies and talked with some "mentors", after that I found a person who until now is my mentor is not a guru like everyone is pretending to be on social media, I was able to understand the real purpose of this business and what banks need in order to make a lot of money and keep the retail traders lose constantly with conventional strategies and that "knowledge" then with a tough trading bootcamp i was able to see my mistakes and started to create a real trading system with rules to follow strictly and daily habits that took me into the profitability. I will teach you an entire system that is working for me looking more deeper into the trader psychology this is not the holy grail of trading but if you follow the system you will become a successful trader in the near future.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Service Area  */}



                {/* Start Brand Area  */}
                <div className="rwt-brand-area pb--60 pt--30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mt--10">
                                <BrandThree brandStyle="brand-style-2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area  */}


                <Separator />

                {/* Start Service Area  */}
                {/* End Service Area  */}

                <Separator />

               
                {/* Start Elements Area  */}
                <div className="rwt-counterup-area pb--100">
                    <div className="container mt_dec--30">
                        <CounterUpFour column="col-lg-3 col-md-6 col-sm-6 col-12" counterStyle="counter-style-4" textALign="text-center" />   
                    </div>
                </div>
                {/* End Elements Area  */}

                <Separator />

                {/* Start Elements Area  */}
                {/* End Elements Area  */}

                <FooterFour />
            </main>
        </>
    )
}

export default AboutUs;
