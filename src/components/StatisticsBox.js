
import React from 'react';

import { ReactComponent as ArrowUpIcon } from "../assets/icons/arrowup-icon.svg";
import { ReactComponent as ArrowDownIcon } from "../assets/icons/arrowdown-icon.svg";



function StatisticsBox({Icon,fall, percentage, total, title}) {
    return (
        <div className="statisticsbox">
            <div className="statisticsbox__analytics">
                <div className="statisticsbox__analytics--typeicon">
                    <Icon />
                </div>
                <p className={`statisticsbox__analytics--percentage ${fall &&'fall'}`}>
                { percentage }%
                </p>
                <div className={`statisticsbox__analytics--arrowicon ${fall &&'fall'}`}>
                    {fall ? <ArrowDownIcon /> : <ArrowUpIcon />}
                </div>
            </div>
            <h2 className="statisticsbox__total">
                ${ total }
            </h2>
            <h4 className="statisticsbox__title">
            { title }
            </h4>
        </div>
    )
}

export default StatisticsBox;
