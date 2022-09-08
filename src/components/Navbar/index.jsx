import { useContext } from 'react';
import { Link } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import ThemeContext from '../../store/ThemeContext';

import style from './Navbar.module.scss';

const cx = classNames.bind(style);
function Navbar() {
    const themeState = useContext(ThemeContext);

    return (
        <nav id="Navbar" className={cx('wrapper')}>
            <div className={cx('left-content')}>
                <div className={cx('name')}>TrungVi</div>
                <div onClick={() => themeState.setTheme(!themeState.theme)} className={cx('themeToggle')}>
                    <FontAwesomeIcon icon={faSun} />
                    <FontAwesomeIcon icon={faMoon} />
                    <div
                        style={themeState.theme ? { right: '1px' } : { left: '1px' }}
                        className={cx('theme-btn')}
                    ></div>
                </div>
            </div>
            <div className={cx('right-content')}>
                <div className={cx('list')}>
                    <ul>
                        <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                            <li>Home</li>
                        </Link>
                        <Link to="Services" spy={true} smooth={true}>
                            <li>Services</li>
                        </Link>
                        <Link to="Experience" spy={true} smooth={true}>
                            <li>Experience</li>
                        </Link>
                        <Link to="Portfolio" spy={true} smooth={true}>
                            <li>Portfolio</li>
                        </Link>
                        <Link to="Testimonial" spy={true} smooth={true}>
                            <li>Testimonials</li>
                        </Link>
                    </ul>
                </div>
                <Link to="Contact" spy={true} smooth={true}>
                    <button className={cx('contact-btn', 'cus-button')}>Contact me</button>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
