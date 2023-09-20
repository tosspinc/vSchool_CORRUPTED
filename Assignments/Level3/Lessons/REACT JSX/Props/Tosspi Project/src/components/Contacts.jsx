import React from "react";

export default function Contact(props) {
    return (
        <div className='contact-card'>
            <img src={props.contactsImg}/>
            <h2>{props.contactsName}</h2>
            <div className='contact-phone'>
                <img src="../images/PhoneIcon.png" /> 
                <p>{props.contactsNumber}</p>
            </div>
            <div className='contact-email'>
                <img src='../images/email_Icon.png'/>
                <p>{props.contactsEmail}</p>
            </div>
        </div>)
}