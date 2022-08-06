import { useState } from 'react';

import classNames from 'classnames/bind';
import style from './Nav.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHome } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faMessage, faUser } from '@fortawesome/free-regular-svg-icons';

const ctx = classNames.bind(style);

function Nav() {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? ctx('active') : ''}>
        <FontAwesomeIcon icon={faHome} />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? ctx('active') : ''}>
        <FontAwesomeIcon icon={faUser} />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? ctx('active') : ''}
      >
        <FontAwesomeIcon icon={faBook} />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? ctx('active') : ''}
      >
        <FontAwesomeIcon icon={faHeart} />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? ctx('active') : ''}
      >
        <FontAwesomeIcon icon={faMessage} />
      </a>
    </nav>
  );
}

export default Nav;
