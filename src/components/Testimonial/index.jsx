import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css/pagination';

import classNames from 'classnames/bind';
import style from './Testimonial.module.scss';
import { profile1, profile2, profile3, profile4, profile5, profile6 } from '../../assets/img';

const cx = classNames.bind(style);
const clients = [
    {
        img: 'https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-1/282675918_1838339279710001_4571140091026533018_n.jpg?stp=dst-jpg_s320x320&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=gY0v2Jx_XVQAX8yWYjL&_nc_ht=scontent.fvca1-1.fna&oh=00_AT8cpVAWGU5p2ZkRNMbZ8zCldi7yyDBw9dsThRRC3X4pzw&oe=62C4A741',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam, velit laudantium tenetur hic quaerat unde, quibusdam qui dolorem perspiciatis adipisci vero dolores nesciunt et? Recusandae mollitia sit laudantium aliquid. ',
    },
    {
        img: 'https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-1/276149519_1096845257549071_762224789537091157_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=07kKrb25LakAX-eg2ZZ&_nc_ht=scontent.fvca1-2.fna&oh=00_AT-6nI1Jf7UXox-m5QZnSu1BVF4G45N8fimpunwjfspvVA&oe=62C51D52',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam, velit laudantium tenetur hic quaerat unde, quibusdam qui dolorem perspiciatis adipisci vero dolores nesciunt et? Recusandae mollitia sit laudantium aliquid. ',
    },
    {
        img: 'https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-1/277986637_757243085663047_6928149239481352151_n.jpg?stp=dst-jpg_s320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=UXjwzFEu6-EAX8uHlat&_nc_ht=scontent.fvca1-1.fna&oh=00_AT_GAvba5vnZxAyoEFieC3GuvfRChHj9Z0tBDwQAbft6dg&oe=62C4A5D6',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam, velit laudantium tenetur hic quaerat unde, quibusdam qui dolorem perspiciatis adipisci vero dolores nesciunt et? Recusandae mollitia sit laudantium aliquid. ',
    },
    {
        img: 'https://scontent.fvca1-1.fna.fbcdn.net/v/t1.6435-9/124478757_2652249225087333_5963946762173974682_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=5VNLZ28-Fn0AX-AO4co&_nc_ht=scontent.fvca1-1.fna&oh=00_AT8u2h6MecmSkk-sjlPFNb8hm56X7HRfSZPN-mTGKwefwA&oe=62E73C94',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam, velit laudantium tenetur hic quaerat unde, quibusdam qui dolorem perspiciatis adipisci vero dolores nesciunt et? Recusandae mollitia sit laudantium aliquid. ',
    },
    {
        img: 'https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-1/272718304_1248800662280174_45357648333051324_n.jpg?stp=dst-jpg_s320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Wen6LLu9WMIAX-dKlgN&_nc_ht=scontent.fvca1-1.fna&oh=00_AT9-AY-xbULhOqBvhqqMWy9yPlH5auodOZwfLeAUb0AdOw&oe=62C4208D',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam, velit laudantium tenetur hic quaerat unde, quibusdam qui dolorem perspiciatis adipisci vero dolores nesciunt et? Recusandae mollitia sit laudantium aliquid. ',
    },
    {
        img: 'https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-1/277558145_1374137806391289_8477911905341777566_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=7X9-GM5OHzcAX9cpbfk&_nc_ht=scontent.fvca1-4.fna&oh=00_AT-7m5Pm-f6NRuBHmVicvuWdKFLE-0210YTpxCRg1wYKkg&oe=62C5DAD2',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam, velit laudantium tenetur hic quaerat unde, quibusdam qui dolorem perspiciatis adipisci vero dolores nesciunt et? Recusandae mollitia sit laudantium aliquid. ',
    },
    {
        img:'https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-1/266785983_1907456616123106_7019465707257285653_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=UG8df7Ajfv8AX8eQZki&_nc_ht=scontent.fvca1-3.fna&oh=00_AT_RQAd24F30aVKgVITJicnNh9BjFFzNI084eZsBdiCdrQ&oe=62C4F774',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam, velit laudantium tenetur hic quaerat unde, quibusdam qui dolorem perspiciatis adipisci vero dolores nesciunt et? Recusandae mollitia sit laudantium aliquid. ',
    },
    {
        img:'https://scontent.fvca1-3.fna.fbcdn.net/v/t1.6435-9/181751006_527658215079954_6068695460529494110_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=z-HgnwH8npgAX-SCuE1&_nc_ht=scontent.fvca1-3.fna&oh=00_AT_v517IX1EofXayqzkw4sDkHkDOMnydVX6WxOPQ5_OoHg&oe=62E5218B',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam, velit laudantium tenetur hic quaerat unde, quibusdam qui dolorem perspiciatis adipisci vero dolores nesciunt et? Recusandae mollitia sit laudantium aliquid. ',
    },
];

function Testimonial() {

    return (
        <div id='Testimonial' className={cx('wrapper')}>
            <div className={cx('head-content')}>
                <span>Clients always get</span>
                <span>Exeptional Work</span>
                <span>from me ...</span>
                <div style={{ top: '19rem', left: '48rem' }} className={cx('blur')}></div>
                <div
                    style={{ background: '#2badd8', top: '11rem', width: '21rem', height: '11rem', left: '8rem' }}
                    className={cx('blur')}
                ></div>
            </div>
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                grabCursor={true}
                className={cx('Testimonial-slider')}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {clients.map((item, index) => (
                    <SwiperSlide key={index} className={cx('swiper-slide')}>
                        <div className={cx('slide-item')}>
                            <img src={item.img} alt="" />
                            <span>{item.review}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Testimonial;
