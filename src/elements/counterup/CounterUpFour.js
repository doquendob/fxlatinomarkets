import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from "react-on-screen";

const Data = [
    {
        countNum : 30,
        countTitle: 'Happy Clients.',
    },
    {
        countNum : 30,
        countTitle: 'Challenge passed',
    },
    {
        countNum : 700000,
        countTitle: 'usd in funds',
    },
    {
        countNum : 100,
        countTitle: 'Useful Programs',
    },
];
const CounterUpFour = ({textALign, counterStyle, column}) => {
    return (
        <div className="row">
            {Data.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <div className={`count-box ${counterStyle} ${textALign}`}>
                        <TrackVisibility once>
                            {({ isVisible }) => isVisible && 
                                <div className="count-number">{isVisible ? <CountUp end={data.countNum} /> : 0}</div>}
                        </TrackVisibility>
                        <h5 className="counter-title">{data.countTitle}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CounterUpFour;