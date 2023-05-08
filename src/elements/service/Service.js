import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import HeaderOne from "../../common/header/HeaderOne";
import FooterOne from "../../common/footer/FooterOne";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import ServiceOne from "./ServiceOne";
import ServiceTwo from "./ServiceTwo";
import ServiceThree from "./ServiceThree";
import ServiceFour from "./ServiceFour";
import ServiceFive from "./ServiceFive";
import Separator from "../separator/Separator";

const Service = () => {
    return (
        <>

            <SEO title="Service || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                    title="These are our services: "
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Services"
                />
                <div className="main-content">

                    {/* Start Service Area  */}
                    <div className="rn-service-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "What we can do for you"
                                        description = "There are three services that we are currently offering <br /> Those are about since teaching how to trade until passing whatever prop firm account no matter the size."
                                     />
                                </div>
                            </div>
                            <ServiceOne 
                                serviceStyle = "service__style--1 bg-color-blackest radius mt--25"
                                textAlign = "text-center"
                            />
                        </div>
                    </div>
                    {/* End Service Area  */}

                    
                    <Separator />

                    {/* Start Service Area  */}
                
                    {/* End Service Area  */}

                    <Separator />

                    {/* Start Service Area  */}
                    {/* End Service Area  */}

                    <Separator />

                    {/* Start Service Area  */}
                   
                    {/* End Service Area  */}

                    <Separator />


                    {/* Start Service Area  */}
                    {/* End Service Area  */}


                    <Separator />


                    {/* Start Service Area  */}
                    {/* End Service Area  */}
                    

                    <Separator />

                    {/* Start Service Area  */}
                
                    {/* End Service Area  */}

                    
                </div>

            </Layout>
            
        </>
    )
}

export default Service;
