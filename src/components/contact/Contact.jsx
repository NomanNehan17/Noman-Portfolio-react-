import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { Button } from 'react-bootstrap'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2l81t59', 'template_jlk6ngl', form.current, 'hadoEv2-J17dc0hnG')
        e.target.reset()
         
      };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMail  className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>nomanrooks@gmail.com</h5>
                        <a href="mailto:nomanrooks@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon'/>
                        <h4>Messenger</h4>
                        <h5>Noman Nehan</h5>
                        <a href="https://m.me/Noman.nehan" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+8801748595454</h5>
                        <a href="https://wa.me/1748595454" target="_blank">Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS  */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text"  name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <Button type='submit' className='btn btn-primary'>Send Message</Button>
                </form>
            </div>
        </section>
    )
}

export default Contact
