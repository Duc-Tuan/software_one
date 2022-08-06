import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faUsers, faFolder } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import style from './About.module.scss';
import me from '../../assets/me-about.jpg';

const ctx = classNames.bind(style);

function About() {
  return (
    <section id="about">
      <h5>Go To Know</h5>
      <h2>About me</h2>
      <div className={ctx('container', 'about__container')}>
        <div className={ctx('about__me')}>
          <img src={me} alt="me" className={ctx('about__me-image')} />
        </div>

        <div className={ctx('about__content')}>
          <div className={ctx('about__cards')}>
            <article className={ctx('about__card')}>
              <FontAwesomeIcon icon={faAward} className={ctx('about__icon')} />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className={ctx('about__card')}>
              <FontAwesomeIcon icon={faUsers} className={ctx('about__icon')} />
              <h5>Clients</h5>
              <small>200+ Wordwide</small>
            </article>

            <article className={ctx('about__card')}>
              <FontAwesomeIcon icon={faFolder} className={ctx('about__icon')} />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            lorem ipsum dolor sit amet, consectetur adip ex nisl lorem ipsum dolor sit amet, consectetur adip ex nisl
            lorem ipsum dolor sit amet, consectetur adip ex nisl lorem ipsum dolor sit amet, consectetur adip ex nisl
            lorem ipsum dolor sit amet, consectetur adip ex nisl
          </p>

          <a href="#contact" className={ctx('btn btn-primary')}>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
