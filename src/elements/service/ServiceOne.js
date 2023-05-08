import React from 'react';
import { FiAirplay, FiBarChart, FiBookOpen } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        icon: <FiAirplay />,
        title: 'Passing service',
        description: 'This service is for people who dont like to pass the 2phases that most prop firms have in order to get funded with big capitals, thats why we created this service to pass for you whatever prop firm challenge charging for the following fees depending on the account size.'
    },
    {
        icon: <FiBarChart />,
        title: 'Account Management',
        description: 'This service is for people who is already funded or has real capital and want to receive monthly ROI, the account could be managed by robot or manually, both options are fine and its up to you.'
    },
    {
        icon: <FiBookOpen />,
        title: 'Mentorship',
        description: 'This service is for people who wants to become a professional trader and have a mentor as well, that will guide you through this business from scratch and helping you to develop a system with an edge that works and fit with your personality so you will be free of stress when you look at the charts, understanding advanced concepts and why technical indicators distract you all the time affecting your psychology, you will have access as well to my VIP XAUUSD channel where you can find analysis, ideas and feedback.'
    },
]

const ServiceOne = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                  console.log(val.title),
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-600"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                {val.title === 'Passing service' ? <ol class="ordered-list">
                                    <li><strong>25k account - $150 </strong> </li>
                                    <li><strong>50k account - $300 </strong> </li>
                                    <li><strong>100k account - $500 </strong> </li>
                                    <li><strong>200k account - $800 </strong> </li>
                                    <li><strong>300k account - $1300 </strong> </li>
                                </ol> : ""}
                                {val.title === 'Account Management' ? <ul class="ordered-list">
                                    <li><strong>ROI for manually option: 7 - 15% avg monthly (higher risk) </strong> </li>
                                    <li><strong>ROI for bot option: 4 - 8% avg monthly (lower risk)</strong> </li>
                                </ul> : ""}
                                {val.title === 'Mentorship' ? <ul class="ordered-list">
                                    <li><strong>One to one mentorship with lifetime access to the VIP group - $450 </strong> </li>
                                    <li><strong>Access to the VIP XAUUSD group - (monthly) $ 100 </strong> </li>
                                </ul> : ""}
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceOne;