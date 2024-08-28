import "./CallPopup.css";
import hang_up_icon from "../assets/hang_up.png";

export default function CallPopup({ url, closeCallPopup, isCalling }) {
    return (
        <div className="call-popup">
            <div className="call-header">
                <img src={url} alt="avatar" />
                <h3>John Doe</h3>
                <p>Calling</p>
                <div className="dot-wrapper">
                    <dot /><dot /><dot /> <dot />
                </div>
            </div>
            <img src={hang_up_icon} onClick={closeCallPopup} alt='End Call'className="end-call-button" />
        </div>
    )
}

