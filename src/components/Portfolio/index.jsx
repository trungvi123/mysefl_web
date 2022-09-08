import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useContext } from 'react';
import { Autoplay } from 'swiper';

import classNames from 'classnames/bind';
import style from './Portfolio.module.scss';
import { sidebar, ecommerce, musicapp, hoc } from '../../assets/img';
import ThemeContext from '../../store/ThemeContext';

const cx = classNames.bind(style);

function Portfolio() {
    const themeState = useContext(ThemeContext);

    return (
        <div id="Portfolio" className={cx('wrapper')}>
            {/* heading */}
            <span style={!themeState.theme ? { color: 'white' } : {}} className={cx('span1')}>
                Recent Projects
            </span>
            <span className={cx('span2')}>Portfolio</span>
            <div
                style={{ background: '#2badd8', top: '5rem', width: '21rem', height: '11rem', left: '40rem' }}
                className={cx('blur')}
            ></div>
            {/* slider */}
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className={cx('Portfolio-slider')}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <img src={sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={musicapp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={hoc} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Portfolio;
