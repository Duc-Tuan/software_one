import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import style from './Service.module.scss';

const ctx = classNames.bind(style);

function Service() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Service</h2>

      <div className={ctx('container', 'services__container')}>
        <article className={ctx('service')}>
          <div className={ctx('service__head')}>
            <h3>UI/UX design</h3>
          </div>

          <ul className={ctx('service__list')}>
            <li>
              <FontAwesomeIcon icon={faCheck} className={ctx('service__list-icon')} />
              <p>lorem ipsum dolor sit amet, consectetur adip ex nisl.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={ctx('service__list-icon')} />
              <p>lorem ipsum dolor sit amet, consectetur adip ex nisl.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={ctx('service__list-icon')} />
              <p>lorem ipsum dolor sit amet, consectetur adip ex nisl.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={ctx('service__list-icon')} />
              <p>lorem ipsum dolor sit amet, consectetur adip ex nisl.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={ctx('service__list-icon')} />
              <p>lorem ipsum dolor sit amet, consectetur adip ex nisl.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={ctx('service__list-icon')} />
              <p>lorem ipsum dolor sit amet, consectetur adip ex nisl.</p>
            </li>
          </ul>
        </article>

        <article className={ctx('service')}>
          <div className={ctx('service__head')}>
            <h3>Web Development</h3>
          </div>

          <ul className={ctx('service__list')}>
            <li>
              <FontAwesomeIcon icon={faCheck} className={ctx('service__list-icon')} />
              <p>lorem ipsum dolor sit amet, consectetur adip ex nisl.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={ctx('service__list-icon')} />
              <p>lorem ipsum dolor sit amet, consectetur adip ex nisl.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={ctx('service__list-icon')} />
              <p>lorem ipsum dolor sit amet, consectetur adip ex nisl.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={ctx('service__list-icon')} />
              <p>lorem ipsum dolor sit amet, consectetur adip ex nisl.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={ctx('service__list-icon')} />
              <p>lorem ipsum dolor sit amet, consectetur adip ex nisl.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={ctx('service__list-icon')} />
              <p>lorem ipsum dolor sit amet, consectetur adip ex nisl.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={ctx('service__list-icon')} />
              <p>lorem ipsum dolor sit amet, consectetur adip ex nisl.</p>
            </li>
          </ul>
        </article>

        <article className={ctx('service')}>
          <div className={ctx('service__head')}>
            <h3>Content Creation</h3>
          </div>

          <ul className={ctx('service__list')}>
            <li>
              <FontAwesomeIcon icon={faCheck} className={ctx('service__list-icon')} />
              <p>lorem ipsum dolor sit amet, consectetur adip ex nisl.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={ctx('service__list-icon')} />
              <p>lorem ipsum dolor sit amet, consectetur adip ex nisl.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={ctx('service__list-icon')} />
              <p>lorem ipsum dolor sit amet, consectetur adip ex nisl.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={ctx('service__list-icon')} />
              <p>lorem ipsum dolor sit amet, consectetur adip ex nisl.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={ctx('service__list-icon')} />
              <p>lorem ipsum dolor sit amet, consectetur adip ex nisl.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={ctx('service__list-icon')} />
              <p>lorem ipsum dolor sit amet, consectetur adip ex nisl.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Service;
