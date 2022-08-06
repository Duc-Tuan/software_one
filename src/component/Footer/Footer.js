/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import style from './Footer.module.scss';

const ctx = classNames.bind(style);

function Footer() {
  return (
    <footer>
      <a href="/" className={ctx('footer_logo')}>
        EGATOR
      </a>

      <ul className={ctx('permalinks')}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className={ctx('footer_socials')}>
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>

      <div className={ctx('footer_copyright')}>
        <small>&copy; EGATOR Tutorials. All right reserviced.</small>
      </div>
    </footer>
  );
}

export default Footer;
