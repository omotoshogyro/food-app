import React from 'react'


function SettingOptions({Icon, header, word}) {
    return (
        <div className="settingoptions">
            <div className="settingoptions__icon">
                <Icon className="settingoptions__icon--smallicon"/>
            </div>
            <div className="settingoptions__texts">
                <h5 className="settingoptions__texts--header">
                { header }
                </h5>
                <p className="settingoptions__texts--word">
                { word }
                </p>
            </div>
        </div>
    )
}

export default SettingOptions
