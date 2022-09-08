import { useContext } from 'react';
import { motion } from 'framer-motion';

import classNames from 'classnames/bind';
import style from './Services.module.scss';
import { heartemoji, glasses, humble } from '../../assets/img';
import Card from '../Card';
import cv from '../../assets/CV.pdf';
import ThemeContext from '../../store/ThemeContext';

const cx = classNames.bind(style);

function Services() {
    const themeState = useContext(ThemeContext);

    return (
        <div id='Services' className={cx('wrapper')}>
            <div className={cx('left-content')}>
                <span style={!themeState.theme ? { color: 'white' } : {}}>My Awesome</span>
                <span>Services</span>
                <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur culpa enim corrupti
                    temporibus excepturi modi ratione reprehenderit, optio animi eligendi rem, pariatur itaque quibusdam
                    repellendus quasi! Sunt repellendus ut reprehenderit.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </span>
                <a href={cv} download>
                    <button className={cx('cus-button', 'down-btn')}>Download CV</button>
                </a>
                <div style={{ background: '#ABF1FF94', left: '0rem', top: '14rem' }} className={cx('blur')}></div>
            </div>
            <div className={cx('right-content')}>
                <div className={cx('cards')}>
                    <motion.div
                        style={{ left: '18rem' }}
                        className={cx('card-item')}
                        whileInView={{ left: '13rem' }}
                        transition={{ duration: 1.2, type: 'spring' }}
                    >
                        <Card
                            emoji={heartemoji}
                            heading={'Design'}
                            detail={'Figma, Sketch, Photoshop, Adobe, Adobe xd'}
                        ></Card>
                    </motion.div>

                    <motion.div
                        style={{ left: '-8rem', top: '13rem' }}
                        className={cx('card-item')}
                        whileInView={{ left: '-5rem' }}
                        transition={{ duration: 1.2, type: 'spring' }}
                    >
                        <Card
                            emoji={glasses}
                            heading={'Developer'}
                            detail={'Html, Css, JavaScript, React, Java, Php'}
                        ></Card>
                    </motion.div>

                    <motion.div
                        style={{ left: '15rem', top: '22rem' }}
                        className={cx('card-item')}
                        whileInView={{ left: '12rem' }}
                        transition={{ duration: 1.2, type: 'spring' }}
                    >
                        <Card
                            emoji={humble}
                            heading={'UX/UI'}
                            detail={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '}
                        ></Card>
                    </motion.div>
                </div>
                <div style={{ left: '17rem', top: '15rem' }} className={cx('blur')}></div>
            </div>
        </div>
    );
}

export default Services;
