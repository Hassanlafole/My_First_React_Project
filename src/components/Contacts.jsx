import React from 'react'
import { FiPhoneCall } from 'react-icons/fi';
import { FaEnvelope } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';


const Contacts = () => {
  return (
    <div className='whole-contact'>
            <div className="left-contact">
                <h2>Contact Info</h2>
                <p><FiPhoneCall className='midab'/>  +(252) 618430302</p>
                <p><FaEnvelope className='midab'/>   Hassan@gmail.com</p>
                <p><MdLocationOn className='midab'/> 203, Envato Labs, warshadaha Steet, <br /> Mogadishu</p>
            </div>
            <div className="right-contact">
                <input type="text" placeholder='Enter Your Name' /><br />
                <input type="email" placeholder='Enter a valid email address'/><br />
                <textarea>Enter your message</textarea><br />
                <button>Submit</button>
            </div>
    </div>
  )
}

export default Contacts