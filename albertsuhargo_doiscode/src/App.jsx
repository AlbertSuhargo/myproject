import React, { useState, useEffect } from 'react';
import ContactListItem from './components/ContactListItem';
import CallPopup from './components/CallPopup';
import call_icon from "./assets/call_icon.png";
import edit_icon from "./assets/edit_icon.png";
import delete_icon from "./assets/delete_icon.png";
import axios from 'axios';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [isCalling, setIsCalling] = useState(false);

  const phone_num = '+1 (234) 4331211 22';
  const contactList = [
    { id: 1, name: "John Doe", phone_num: phone_num, url: imageUrl },
    { id: 2, name: "John Doe", phone_num: phone_num, url: imageUrl },
    { id: 3, name: "John Doe", phone_num: phone_num, url: imageUrl },
    { id: 4, name: "John Doe", phone_num: phone_num, url: imageUrl },
    { id: 5, name: "John Doe", phone_num: phone_num, url: imageUrl },
    { id: 6, name: "John Doe", phone_num: phone_num, url: imageUrl },
    { id: 7, name: "John Doe", phone_num: phone_num, url: imageUrl },
    { id: 8, name: "John Doe", phone_num: phone_num, url: imageUrl },
  ]

  const handleCallClick = () => {
    setIsCalling(true);
  };

  const closeCallPopup = () => {
    setIsCalling(false);
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get('https://avatar.iran.liara.run/public/', {
          responseType: 'blob',
        });
        const imageObjectURL = URL.createObjectURL(response.data);
        setImageUrl(imageObjectURL);
      } catch (err) {
        console.log(err);
      }
    };
    fetchImage();
  }, []);

  return (
    <>
      <div className={isCalling ? "overlay" : ""}></div>
      <div className="all-container">
        <div className="wrapper">
          <div className="left-frame">
            <h4 className='contact-list-title'>Contact List</h4>
            {
              contactList.length > 0
                ? contactList.map((contact, index) => (
                  <ContactListItem
                    key={index}
                    name={contact.name}
                    phone_num={contact.phone_num}
                    url={contact.url}
                    handleCallClick={handleCallClick}
                  />
                ))
                : null
            }
          </div>
          <div className="right-frame">
            <div className='wrap-avatar-name'>
              <img src={imageUrl} alt="avatar" className="avatar-picture-big" />
              <p className='big-name'>{contactList[0].name}</p>
            </div>
            <div className='right-frame-buttons'>
              <img src={call_icon} alt="" onClick={handleCallClick} className='right-frame-buttons-call' />
              <img src={edit_icon} alt="" />
              <img src={delete_icon} alt="" />
            </div>
          </div>
        </div>
      </div>
      {isCalling && <CallPopup url={imageUrl} closeCallPopup={closeCallPopup} isCalling={isCalling}/>}
    </>
  )
}

export default App
