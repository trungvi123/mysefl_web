import { useContext } from 'react';

import classNames from 'classnames/bind';
import style from './Experience.module.scss';
import ThemeContext from '../../store/ThemeContext';

const cx = classNames.bind(style);

function Experience() {
    const themeState = useContext(ThemeContext);

    return (
        <div id='Experience' className={cx('wrapper')}>
            <div className={cx('content')}>
                <div
                    style={
                        (!themeState.theme ? { color: 'var(--black)',borderColor: 'var(--orange)' } : {})
                    }
                    className={cx('circle')}
                >
                    8+
                </div>
                <span>years</span>
                <span className={cx('cus-span')}>Experience</span>
            </div>
            <div className={cx('content')}>
                <div
                    style={
                        (!themeState.theme ? { color: 'var(--black)',borderColor: 'var(--orange)' } : {})
                    }
                    className={cx('circle')}
                >
                    20+
                </div>
                <span>completed</span>
                <span className={cx('cus-span')}>Projects</span>
            </div>
            <div className={cx('content')}>
                <div style={!themeState.theme ? { color: 'var(--black)',borderColor: 'var(--orange)' } : {}} className={cx('circle')}>
                    5+
                </div>
                <span>companies</span>
                <span className={cx('cus-span')}>Work</span>
            </div>
        </div>
    );
}

export default Experience;
