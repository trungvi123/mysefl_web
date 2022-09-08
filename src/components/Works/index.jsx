import { useContext } from 'react';
import { motion } from 'framer-motion';

import classNames from 'classnames/bind';
import styleCoppy from '../Services/Services.module.scss'; // giong 1 so thanh phan nen sai chung 1 so scss
import style from './Works.module.scss';
import { Upwork, fiverr, amazon, Shopify, facebook } from '../../assets/img';
import ThemeContext from '../../store/ThemeContext';

const cx = classNames.bind(style); // chính
const cx2 = classNames.bind(styleCoppy); // phụ

function Works() {
    const themeState = useContext(ThemeContext);

    return (
        <div className={cx('wrapper')}>
            <div className={cx2('left-content')}>
                <span style={!themeState.theme ? { color: 'white' } : {}}>Works for All these</span>
                <span>Brands and Clients</span>
                <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur culpa enim corrupti
                    temporibus excepturi modi ratione reprehenderit, optio animi eligendi rem, pariatur itaque quibusdam
                    repellendus quasi! Sunt repellendus ut reprehenderit.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </span>
                <button className={cx2('cus-button', 'down-btn')}>Hire me</button>
                <div style={{ background: '#ABF1FF94', left: '0rem', top: '14rem' }} className={cx2('blur')}></div>
            </div>
            <div className={cx('right-content')}>
                <motion.div
                    initial={{ rotate: 180 }}
                    whileInView={{ rotate: 360 }}
                    transition={{ duration: 5, type: 'spring' }}
                    className={cx('circles-box')}
                >
                    <div className={cx('circles-item')}>
                        <img src={Upwork} alt="" />
                    </div>
                    <div className={cx('circles-item')}>
                        <img src={fiverr} alt="" />
                    </div>
                    <div className={cx('circles-item')}>
                        <img src={amazon} alt="" />
                    </div>
                    <div className={cx('circles-item')}>
                        <img src={Shopify} alt="" />
                    </div>
                    <div className={cx('circles-item')}>
                        <img src={facebook} alt="" />
                    </div>
                </motion.div>
                <div className={cx('backCircle', 'yellowCircle')}></div>
                <div className={cx('backCircle', 'blueCircle')}></div>
            </div>
        </div>
    );
}

export default Works;
