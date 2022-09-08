import { useContext } from 'react';

import classNames from 'classnames/bind';
import style from './Intro.module.scss';
import { github, linkedin, instagram, Vector1, Vector2, boy, crown, thumbup, glassesimoji } from '../../assets/img';
import FloatingDiv from '../FloatingDiv';
import ThemeContext from '../../store/ThemeContext';
import { motion } from 'framer-motion';

const cx = classNames.bind(style);

function Intro() {
    const themeState = useContext(ThemeContext);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left-content')}>
                <div className={cx('text-content')}>
                    <span style={!themeState.theme ? { color: 'white' } : {}}>Hi! I Am</span>
                    <span>Bui Trung Vi</span>
                    <span>
                        Frontend Developer with low level with experience in web designing and development, producting
                        the Quality work
                    </span>
                </div>
                <button className={cx('hire-btn', 'cus-button')}>Hire me</button>
                <div className={cx('icons-box')}>
                    <img src={github} alt="github" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={instagram} alt="instagram" />
                </div>
            </div>
            <div className={cx('right-content')}>
                <img src={Vector1} alt="Vector1" />
                <img src={Vector2} alt="Vector2" />
                <img src={boy} alt="boy" />
                <motion.img
                    src={glassesimoji}
                    initial={{ left: '-40%' }}
                    whileInView={{ left: '-20%' }}
                    transition={{ duration: 1.2, type: 'spring' }}
                    alt=""
                />

                <motion.div
                    whileInView={{ left:'60%' }}
                    transition={{ duration: 1, type: 'spring' }}
                    style={{ top: '-4%', left: '70%' }}
                >
                    <FloatingDiv image={crown} txt1="Web" txt2="Award"></FloatingDiv>
                </motion.div>

                <motion.div
                    whileInView={{ left: '-20%' }}
                    transition={{ duration: 1.2, type: 'spring' }}
                    style={{ top: '19rem', left: '0.1rem' }}
                >
                    <FloatingDiv image={thumbup} txt1="Best Design" txt2="Developer"></FloatingDiv>
                </motion.div>
                <div className={cx('blur')}></div>
                <div
                    style={{ background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}
                    className={cx('blur')}
                ></div>
            </div>
        </div>
    );
}

export default Intro;
