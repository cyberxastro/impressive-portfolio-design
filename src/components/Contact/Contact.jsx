import React, { useState } from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Contact = () => {
    const theme = useContext(themeContext);
    const darkmode = theme.state.darkmode;
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yqkk0cs', 'template_00holh4', form.current, 'mM-0kPlAI4SYaM1Cb')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="contact-form" id='Contact'>
            <div className="w-left">
                <div className="awesome">
                    <span style={{ color: darkmode ? 'white' : '' }}>Get in touch</span>
                    <br />
                    <span>Contact Me</span>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' className='user' placeholder='Name' required />
                    <input type="email" name='user_email' className='user' placeholder='Email' required />
                    <input type="message" name='user_msg' className='user' placeholder='Message' required />
                    <input type="submit" value='Send' className='button' style={{ color: darkmode ? 'black' : '', fontWeight: darkmode ? 'bolder' : '' }} />
                    <span id='reply'>{done && "Thanks for Contacting me, You'll definitely get a reply within an hour.\n Please Refresh the page to submit new request."}</span>
                </form>
            </div>
        </div>
    )
}

export default Contact