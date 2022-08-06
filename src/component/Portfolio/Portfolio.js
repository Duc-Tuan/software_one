import classNames from 'classnames/bind';
import style from './Portfolio.module.scss';

import img1 from '../../assets/portfolio1.jpg';
import img2 from '../../assets/portfolio2.jpg';
import img3 from '../../assets/portfolio3.jpg';
import img4 from '../../assets/portfolio4.jpg';
import img5 from '../../assets/portfolio5.png';
import img6 from '../../assets/portfolio6.jpg';

const ctx = classNames.bind(style);

const data = [
  {
    id: 1,
    image: img1,
    title: 'This is a portfolio item title',
    github: 'https://github.com/',
    demo: 'https://github.com/',
  },
  {
    id: 2,
    image: img2,
    title: 'This is a portfolio item title',
    github: 'https://github.com/',
    demo: 'https://github.com/',
  },
  {
    id: 3,
    image: img3,
    title: 'This is a portfolio item title',
    github: 'https://github.com/',
    demo: 'https://github.com/',
  },
  {
    id: 4,
    image: img4,
    title: 'This is a portfolio item title',
    github: 'https://github.com/',
    demo: 'https://github.com/',
  },
  {
    id: 5,
    image: img5,
    title: 'This is a portfolio item title',
    github: 'https://github.com/',
    demo: 'https://github.com/',
  },
  {
    id: 6,
    image: img6,
    title: 'This is a portfolio item title',
    github: 'https://github.com/',
    demo: 'https://github.com/',
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Rencent Work</h5>
      <h2>Portfolio</h2>

      <div className={ctx('container', 'portfolio__container')}>
        {data.map(({ id, image, title, git, demo }) => {
          return (
            <article key={id} className={ctx('portfolio__item')}>
              <div className={ctx('portfolio__item-image')}>
                <img src={image} alt={image} />
              </div>

              <h3>{title}</h3>

              <div className={ctx('portfolio__item-cta')}>
                <a href={git} target="_blank" className={ctx('btn')} rel="noreferrer">
                  Github
                </a>
                <a href={demo} target="_blank" className={ctx('btn', 'btn-primary')} rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
