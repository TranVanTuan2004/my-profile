import React, { useRef } from 'react';
import './ContactFormStyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import cartoon from '../images/cartoon-compressed.png';

export default function ContactForm({ id }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_yckdm8h', 'template_hgpbklw', form.current, 'SoW4qy8rgIzltt0ua')
      .then((result) => {
        console.log(result.text);
        toast.success('Message sent successfully.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }, (error) => {
        console.log(error.text);
        toast.error("Failed to send message. Kindly refresh the page.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };




  return (
    <div className='contact-window' id={id}>
      <h1>Contact</h1>
      <p>Thảo luận về một dự án hay chỉ muốn nói xin chào? Hộp thư đến của tôi mở cho tất cả.</p>
      <div className="contact-container">
        <img src={cartoon} alt='Deepa Jha' className="contact-wrapper-left"></img>
        <form ref={form} onSubmit={sendEmail} className="contact-wrapper-right">
          <input id='name' type="text" name="name" placeholder='Your name' required />
          <input id='email' type="email" name="email" placeholder='Your email' required />
          <textarea id='message' name="message" rows='5' column='15' placeholder='Hãy nói về điều bạn muốn chia sẻ T_T' required />
          <button className='btn' id='submitBtn' type="submit" value="Send" >Send Message</button>
          <ToastContainer />
        </form>

      </div>
    </div>
  )
}