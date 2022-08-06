import classNames from 'classnames/bind';
import style from './Header.module.scss';

const ctx = classNames.bind(style);

function CTA() {
  return (
    <div className={ctx('cta')}>
      <a href="/" className={ctx('btn')}>
        Download CV
      </a>
      <a href="#contact" className={ctx('btn btn-primary')}>
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
