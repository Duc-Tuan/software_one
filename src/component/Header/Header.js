import classNames from 'classnames/bind';
import style from './Header.module.scss';
import Download from './Download';
import HeaderSocial from './HeaderSocial';
import me from '../../assets/me.png';

const ctx = classNames.bind(style);

function Header() {
  return (
    <header id="home">
      <div className={ctx('container', 'header__container')}>
        <h5>Hello I'm</h5>
        <h1>Hajia Bintu</h1>
        <h5 className={ctx('text-light')}>Fullstack Developer</h5>

        <Download />
        <HeaderSocial />

        <div className={ctx('me')}>
          <img src={me} alt="me" />
        </div>

        <a href="#contact" className={ctx('scroll__down')}>
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
