import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import style from './Contact.module.scss';

const ctx = classNames.bind(style);

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h00ei2s', 'template_w9b0f2s', form.current, '7-qpLIG7Op8OAvamy');

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className={ctx('container', 'contact__container')}>
        <div className={ctx('contact__options')}>
          <article className={ctx('contact__option')}>
            <FontAwesomeIcon icon={faEnvelope} className={ctx('contact__option-icon')} />
            <h4>Email</h4>
            <h5>phamductuan26032002@gmail.com</h5>
            <a href="mailto:phamductuan26032002@gmail.com" target="_blank" rel="noreferrer">
              Send a messager
            </a>
          </article>
          <article className={ctx('contact__option')}>
            <FontAwesomeIcon icon={faMessage} className={ctx('contact__option-icon')} />
            <h4>Messager</h4>
            <h5>egatortutorials</h5>
            <a href="/">Send a messager</a>
          </article>
          <article className={ctx('contact__option')}>
            <FontAwesomeIcon icon={faWhatsapp} className={ctx('contact__option-icon')} />
            <h4>WhatsApp</h4>
            <h5>0343354366</h5>
            <a href="/">Send a messager</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Enter Full Name" required />
          <input type="email" name="email" placeholder="Enter Email" required />
          <textarea name="messager" rows="7" placeholder="Enter Messager" required></textarea>
          <button type="submit" name="send" className={ctx('btn', 'btn-primary')}>
            Send messager
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
