import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import ReactWhatsapp from 'react-whatsapp';
const callToActionData = {
    title: "Ready to start?",
    subtitle: "Contact us below now!",
    btnText: "Conctact us through whatsapp",
}

const CalltoActionEight = () => {
    return (
        <div className="rn-callto-action rn-call-to-action style-8 content-wrapper">
            <div className="container">
                <div className="row row--0 align-items-center ">
                    <div className="col-lg-12">
                        <div className="inner">
                            <div className="content text-center">
                                <h2 className="title">{callToActionData.title}</h2>
                                <h6 className="subtitle">{callToActionData.subtitle}</h6>
                                <div className="call-to-btn text-center mt--30">
                                   <ReactWhatsapp number='+573203447254' style={{"backgroundColor": "transparent", "border": "none"}} message='I am interested on your services'> <a className="btn-default btn-icon" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">{callToActionData.btnText} <i className="icon"><FiArrowRight /></i></a></ReactWhatsapp>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalltoActionEight;