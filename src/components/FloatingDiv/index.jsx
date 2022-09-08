import { useContext } from 'react';

import ThemeContext from '../../store/ThemeContext';
import classNames from 'classnames/bind';
import style from './FloatingDiv.module.scss';

const cx = classNames.bind(style);


function FloatingDiv({image ,txt1,txt2}) {

    const themeState = useContext(ThemeContext)
    return ( 
        <div className={cx('wrapper')}>
            <img src={image} alt="icon" />
            <span style={!themeState.theme ? {color: 'var(--black)'} : {}}>  
                {txt1}
                <br/>
                {txt2}
            </span>
        </div>   
     );
}

export default FloatingDiv;