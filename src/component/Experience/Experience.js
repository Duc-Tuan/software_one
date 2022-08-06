import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import style from './Experience.module.scss';

const ctx = classNames.bind(style);

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className={ctx('container', 'experience__container')}>
        <div className={ctx('experience__frontend')}>
          <h3>Frontend Development</h3>
          <div className={ctx('experience__content')}>
            <article className={ctx('experience__details')}>
              <FontAwesomeIcon icon={faCheck} className={ctx('experience__details-icon')} />
              <div>
                <h4>HTML</h4>
                <small className={ctx('text-light')}>Experienced</small>
              </div>
            </article>
            <article className={ctx('experience__details')}>
              <FontAwesomeIcon icon={faCheck} className={ctx('experience__details-icon')} />
              <div>
                <h4>CSS</h4>
                <small className={ctx('text-light')}>Experienced</small>
              </div>
            </article>
            <article className={ctx('experience__details')}>
              <FontAwesomeIcon icon={faCheck} className={ctx('experience__details-icon')} />
              <div>
                <h4>Javascript</h4>
                <small className={ctx('text-light')}>Experienced</small>
              </div>
            </article>
            <article className={ctx('experience__details')}>
              <FontAwesomeIcon icon={faCheck} className={ctx('experience__details-icon')} />
              <div>
                <h4>Bootstrap</h4>
                <small className={ctx('text-light')}>Experienced</small>
              </div>
            </article>
            <article className={ctx('experience__details')}>
              <FontAwesomeIcon icon={faCheck} className={ctx('experience__details-icon')} />
              <div>
                <h4>Tailwind</h4>
                <small className={ctx('text-light')}>Experienced</small>
              </div>
            </article>
            <article className={ctx('experience__details')}>
              <FontAwesomeIcon icon={faCheck} className={ctx('experience__details-icon')} />
              <div>
                <h4>React</h4>
                <small className={ctx('text-light')}>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className={ctx('experience__backend')}>
          <h3>Backend Development</h3>
          <div className={ctx('experience__content')}>
            <article className={ctx('experience__details')}>
              <FontAwesomeIcon icon={faCheck} className={ctx('experience__details-icon')} />
              <div>
                <h4>Node Js</h4>
                <small className={ctx('text-light')}>Experienced</small>
              </div>
            </article>
            <article className={ctx('experience__details')}>
              <FontAwesomeIcon icon={faCheck} className={ctx('experience__details-icon')} />
              <div>
                <h4>MoganDB</h4>
                <small className={ctx('text-light')}>Experienced</small>
              </div>
            </article>
            <article className={ctx('experience__details')}>
              <FontAwesomeIcon icon={faCheck} className={ctx('experience__details-icon')} />
              <div>
                <h4>PHP</h4>
                <small className={ctx('text-light')}>Experienced</small>
              </div>
            </article>
            <article className={ctx('experience__details')}>
              <FontAwesomeIcon icon={faCheck} className={ctx('experience__details-icon')} />
              <div>
                <h4>Basic</h4>
                <small className={ctx('text-light')}>Experienced</small>
              </div>
            </article>
            <article className={ctx('experience__details')}>
              <FontAwesomeIcon icon={faCheck} className={ctx('experience__details-icon')} />
              <div>
                <h4>Intermediate</h4>
                <small className={ctx('text-light')}>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
