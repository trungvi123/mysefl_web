import classNames from "classnames/bind";
import style from './Card.module.scss'


const cx = classNames.bind(style)

function Card({emoji ,heading='add heading is here',detail='add detail is here!'}) {
    return ( 
        <div className={cx('wrapper')}>
            <img src={emoji} alt="" />
            <span className={cx('heading-card')}>{heading}</span>
            <span className={cx('detail-card')}>{detail}</span>
            <button className={cx('more-btn', 'cus-button')}>LEARN MORE</button>
        </div>
     );
}

export default Card;