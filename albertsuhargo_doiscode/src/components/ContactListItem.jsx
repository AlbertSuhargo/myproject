import call_icon from "../assets/call_icon.png";
import "./ContactListItem.css";
import React from 'react';

export default function ContactListItem({ name, phone_num, url, handleCallClick }) {
    return (
        <div className="wrap-item">
            <img src={url} alt="avatar" className="avatar-picture" />
            <div className="contact-container">
                <p className="name">{name}</p>
                <p>{phone_num}</p>
            </div>
            <img src={call_icon} onClick={handleCallClick} alt="" className="contact-list-call" />
        </div>
    )
}