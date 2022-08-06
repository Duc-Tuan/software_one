import classNames from 'classnames/bind';
import style from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
const ctx = classNames.bind(style);

function HeaderSocial() {
  return (
    <div className={ctx('header__social')}>
      <a href="/">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="/">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="/">
        <FontAwesomeIcon icon={faDribbble} />
      </a>
    </div>
  );
}

export default HeaderSocial;
