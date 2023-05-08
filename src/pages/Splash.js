import React from 'react'
import {Link} from "react-router-dom";
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import FooterThree from '../common/footer/FooterThree';
import { FiArrowDown } from "react-icons/fi";

const Demo = [
    {
        Url : "/business-consulting",
        Image: "./images/demo/result-01.jpeg" ,
        Imagelight: "./images/demo/result-01.jpeg" ,
        Title: "300k received in drawdown",
        badge: "",
    },

    {
        Url : "/business-consulting-2",
        Image: "./images/demo/result-02.jpeg" ,
        Imagelight: "./images/demo/result-02.jpeg" ,
        Title: "200k ftmo account",
        badge: "",
    },
    {
        Url : "/corporate",
        Image: "./images/demo/result-03.jpeg" ,
        Imagelight: "./images/demo/result-03.jpeg" ,
        Title: "E8funding 250k account",
        badge: "",
    },
    {
        Url : "/startup",
        Image: "./images/demo/result-04.jpeg" ,
        Imagelight: "./images/demo/result-04.jpeg" ,
        Title: "100k acc 1st phase almost passed",
        badge: "New",
    },
    {
        Url : "/web-agency",
        Image: "./images/demo/result-05.jpeg" ,
        Imagelight: "./images/demo/result-05.jpeg" ,
        Title: "Student winning with our daily gold breakdown",
        badge: "New",
    },
    {
        Url : "/international-consulting",
        Image: "./images/demo/result-06.jpeg" ,
        Imagelight: "./images/demo/result-06.jpeg" ,
        Title: "300k account",
        badge: "New",
    },
    {
        Url : "/consulting",
        Image: "./images/demo/result-08.jpeg" ,
        Imagelight: "./images/demo/result-08.jpeg" ,
        Title: "100k account",
        badge: "Hot",
    },
    {
        Url : "/finance",
        Image: "./images/demo/result-09.jpeg" ,
        Imagelight: "./images/demo/result-09.jpeg" ,
        Title: "50k account",
        badge: "",
    },
    {
        Url : "/digital-agency",
        Image: "./images/demo/result-10.jpeg" ,
        Imagelight: "./images/demo/result-10.jpeg" ,
        Title: "Payment received to pass a 200k ftmo",
        badge: "",
    },
    {
        Url : "/seo-agency",
        Image: "./images/demo/result-17.jpeg" ,
        Imagelight: "./images/demo/result-17.jpeg" ,
        Title: "One of our funded traders",
        badge: "",
    },
   
    {
        Url : "/company",
        Image: "./images/demo/result-18.jpeg" ,
        Imagelight: "./images/demo/result-18.jpeg" ,
        Title: "Receiving a payment for a 100k acc",
        badge: "",
    },
    {
        Url : "/personal-portfolio",
        Image: "./images/demo/result-12.jpeg" ,
        Imagelight: "./images/demo/result-12.jpeg" ,
        Title: "2nd phase 100k acc",
        badge: "",
    },
    {
        Url : "/freelancer",
        Image: "./images/demo/result-19.jpeg" ,
        Imagelight: "./images/demo/result-19.jpeg" ,
        Title: "E8 funding 250k 1st phase passed",
        badge: "Hot",
    },
    {
        Url : "/marketing",
        Image: "./images/demo/result-20.jpeg" ,
        Imagelight: "./images/demo/result-20.jpeg" ,
        Title: "funded Leveled up society",
        badge: "",
    },
    {
        Url : "/travel-agency",
        Image: "./images/demo/result-21.jpeg" ,
        Imagelight: "./images/demo/result-21.jpeg" ,
        Title: "funded True Forex Funds",
        badge: "",
    },
   
    {
        Url : "/business",
        Image: "./images/demo/result-22.jpeg" ,
        Imagelight: "./images/demo/result-22.jpeg" ,
        Title: "the funded trader funding our customer",
        badge: "",
    },
    
    {
        Url : "/event-conference",
        Image: "./images/demo/result-23.jpeg" ,
        Imagelight: "./images/demo/result-23.jpeg" ,
        Title: "1st phase 300k passed",
        badge: "",
    },
    {
        Url : "/creative-portfolio",
        Image: "./images/demo/result-24.jpeg" ,
        Imagelight: "./images/demo/result-24.jpeg" ,
        Title: "2nd phase 300k passed",
        badge: "",
    },
    
    {
        Url : "/about-us",
        Image: "./images/demo/result-25.jpeg" ,
        Imagelight: "./images/demo/result-25.jpeg" ,
        Title: "300k 1st phase ",
        badge: "",
    },

]

const InnerPages = [
    
]

const Splash = () => {
    return (
        <>
           <SEO title="FXLM" />
           <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />

                {/* Start Slider Area  */}
                <div className="demo-slider-area slider-area bg-transparent slider-style-1 pb--100 pt--70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <h1 className="title display-two">
                                        <span className="theme-gradient">Get funded</span> & {" "}
                                        <span className="theme-gradient">Get success</span>
                                        <br />
                                        FXLatinoMarkets.
                                    </h1>
                                    <p className="description">We help our clients succeed in the forex markets by providing some brand services and trading experience.</p>
                                    <div className="button-group">
                                        <a className="btn-default btn-large round btn-icon" href="#demo">See results<FiArrowDown /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                <Separator />

                {/* Start Our Demo  */}
                <div className="rn-demo-area rn-section-gap" id="demo">
                    <div className="wrapper plr--150 plr_lg--30 plr_md--30 plr_sm--30">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Here some results"
                                    title = "Customer passing service results."
                                    description = "We have passed over 30 challenges right now manually & using an EA that is allowed by most prop firms so you won't have issues."
                                />
                            </div>
                        </div>
                        <div className="row row--30">
                            {Demo.map((data, index) => (
                                <div className="col-lg-4 col-md-6 col-12 mt--40" key={index}>
                                    <div className="single-demo">
                                        <Link to={`${data.Url}`}>
                                            <div className="thumbnail">
                                                <img className="image-dark" src={`${data.Image}`} alt="Corporate Images" />
                                                <img className="image-light" src={`${data.Imagelight}`} alt="Corporate Images" />
                                                {data.badge ? <span className="label-badge">{data.badge}</span> : ''}
                                            </div>
                                        </Link>
                                        <h4 className="title"><Link to={`${data.Url}`}>{data.Title}</Link> </h4>
                                    </div>
                                </div>
                            ))} 
                        </div>
                    </div>
                </div> 
                {/* End Our Demo  */}


                <Separator />

                {/* Start Inner Pages  */}
                <div className="rn-inner-pages rn-section-gap">
                    <div className="wrapper plr--150 plr_lg--30 plr_md--30 plr_sm--30">
                        <div className="row">
                            {InnerPages.map((data, index) => (
                                <div className="col-lg-4 col-md-6 col-12 mt--40" key={index}>
                                    <div className="single-demo">
                                        <Link to={`${data.Url}`}>
                                            <div className="thumbnail">
                                                <img className="image-dark" src={`${data.Image}`} alt="Corporate Images" />
                                                <img className="image-light" src={`${data.Imagelight}`} alt="Corporate Images" />
                                            </div>
                                        </Link>
                                        <h4 className="title"><Link to={`${data.Url}`}>{data.Title}</Link></h4>
                                    </div>
                                </div>
                            ))} 
                        </div>

                    </div>
                </div>
                {/* End Inner Pages  */}
                <FooterThree />
           </main>

        </>
    )
}

export default Splash;