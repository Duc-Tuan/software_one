// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import classNames from 'classnames/bind';
import style from './Testimonials.module.scss';

import avt1 from '../../assets/avatar1.jpg';
import avt2 from '../../assets/avatar2.jpg';
import avt3 from '../../assets/avatar3.jpg';
import avt4 from '../../assets/avatar4.jpg';

const ctx = classNames.bind(style);

const data = [
  {
    id: 1,
    img: avt1,
    name: 'John Doe',
    review:
      'lorem ipsum dolor sit amet, consectetur adip ex nisl lorem ipsum dolor sit amet, consectetur adip ex nis lorem ipsum dolor sit amet, consectetur adip ex nisl lorem ipsum dolor sit amet, consectetur adip ex nis lorem ipsum dolor sit amet, consectetur adip ex nisl lorem ipsum dolor sit amet, consectetur adip ex nis',
  },
  {
    id: 2,
    img: avt2,
    name: 'John Doe',
    review:
      'lorem ipsum dolor sit amet, consectetur adip ex nisl lorem ipsum dolor sit amet, consectetur adip ex nis lorem ipsum dolor sit amet, consectetur adip ex nisl lorem ipsum dolor sit amet, consectetur adip ex nis lorem ipsum dolor sit amet, consectetur adip ex nisl lorem ipsum dolor sit amet, consectetur adip ex nis',
  },
  {
    id: 3,
    img: avt3,
    name: 'John Doe',
    review:
      'lorem ipsum dolor sit amet, consectetur adip ex nisl lorem ipsum dolor sit amet, consectetur adip ex nis lorem ipsum dolor sit amet, consectetur adip ex nisl lorem ipsum dolor sit amet, consectetur adip ex nis lorem ipsum dolor sit amet, consectetur adip ex nisl lorem ipsum dolor sit amet, consectetur adip ex nis',
  },
  {
    id: 4,
    img: avt4,
    name: 'John Doe',
    review:
      'lorem ipsum dolor sit amet, consectetur adip ex nisl lorem ipsum dolor sit amet, consectetur adip ex nis lorem ipsum dolor sit amet, consectetur adip ex nisl lorem ipsum dolor sit amet, consectetur adip ex nis lorem ipsum dolor sit amet, consectetur adip ex nisl lorem ipsum dolor sit amet, consectetur adip ex nis',
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper
        className={ctx('container', 'testimonials__container')} // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, img, name, review }) => {
          return (
            <SwiperSlide key={id} className={ctx('testimonials')}>
              <div className={ctx('clinet_avt')}>
                <img src={img} alt={img} />
              </div>
              <h5 className={ctx('clinet__name')}>{name}</h5>
              <small className={ctx('client__review')}>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
