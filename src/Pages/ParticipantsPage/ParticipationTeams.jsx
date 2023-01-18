import React from 'react'
import './ParticipantsPage.css'

const CoreTeam = (props) => {
    return (
        <div className='CORE-COMITEE-CONTAINER'>
            <img src={props.item.MemberPhoto} className="CORE-COMMITEE-IMAGE" alt="Commity Member" />
            <div className='MEMBER-INFORMATION'>
                <div className='MEMBERS-NAME-STATUS'>
                    <h5 className='MEMBER-NAME'>"HELLO"</h5>
                    <h5 className='MEMBER-STATUS'>"HELLO"</h5>
                </div>
                <a href="/" className='MEMBER-LINK'>
                    "HELLO"
                </a>
            </div>
        </div>
    );
}

const WebDevTeam = (props) => {
    return (
        <div className='DEVLOPER-COMITEE-CONTAINER'>
            <img src={props.item.MemberPhoto} alt="Commity Member" />
            <div className='MEMBER-INFORMATION'>
                <p>
                    <h4>{props.item.MemberName}</h4>
                    <h4>{props.item.MemberPosition}</h4>
                </p>
                <a href="/">{props.item.MemberLink}</a>
            </div>
        </div>
    );
}

const GraphicsTeam = (props) => {
    return (
        <div className='GRAPHICS-COMITEE-CONTAINER'>
            <img src={props.item.MemberPhoto} alt="Commity Member" />
            <div className='MEMBER-INFORMATION'>
                <p className='MEMBER-INFO-PARAGRAPH'>
                    <h4>{props.item.MemberName}</h4>
                    <h4>{props.item.MemberPosition}</h4>
                </p>
                <a href="/">{props.item.MemberLink}</a>
            </div>
        </div>
    );
}

export { CoreTeam, WebDevTeam, GraphicsTeam }