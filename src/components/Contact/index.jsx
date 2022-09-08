import { useContext } from 'react';

import classNames from 'classnames/bind';
import style from './Contact.module.scss';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ThemeContext from '../../store/ThemeContext';

const cx = classNames.bind(style);

function Contact() {
    const themeState = useContext(ThemeContext)

    const form = useRef();

    const [doneSendForm, setDoneSendForm] = useState(false);
    const [valueNameInput, setValueNameInput] = useState('');
    const [valueEmailInput, setValueEmailInput] = useState('');
    const [valueMsgInput, setValueMsgInput] = useState('');

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            if (doneSendForm) {
                setDoneSendForm(false);
            }
        }, 6000);
        return () => {
            clearTimeout(idTimeOut);
        };
    }, [doneSendForm]);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zt44zcl', 'template_imgp54d', form.current, 'DuyTNhlV_u7gmlyv1').then(
            (result) => {
                // console.log(result.text);
                setDoneSendForm(true);
                setValueNameInput('');
                setValueEmailInput('');
                setValueMsgInput('');
            },
            (error) => {
                // console.log(error.text);
                setDoneSendForm(false);
            },
        );
    };

    const handleChange = (e) => {
        const value = e.target.value;
        if (!value.startsWith(' ')) {
            setValueNameInput(value);
        }
    };
    const handleChange1 = (e) => {
        const value = e.target.value;
        if (!value.startsWith(' ')) {
            setValueEmailInput(value);
        }
    };
    const handleChange2 = (e) => {
        const value = e.target.value;
        if (!value.startsWith(' ')) {
            setValueMsgInput(value);
        }
    };

    return (
        <div id='Contact' className={cx('wrapper')}>
            <div className={cx('left-content')}>
                <div className={cx('awesome')}>
                    <span style={!themeState.theme ? {color:'white'} : {}}>Get in touch</span>
                    <span>Contact me</span>
                </div>
                <div
                    style={{ background: '#2badd8', top: '12rem', width: '21rem', height: '11rem', left: '-20rem' }}
                    className={cx('blur')}
                ></div>
            </div>
            <div className={cx('right-content')}>
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        onChange={handleChange}
                        value={valueNameInput}
                        type="text"
                        name="userName"
                        className={cx('contact-input')}
                        placeholder="Name"
                    />
                    <input
                        onChange={handleChange1}
                        value={valueEmailInput}
                        type="email"
                        name="userEmail"
                        className={cx('contact-input')}
                        placeholder="Email"
                    />
                    <textarea
                        onChange={handleChange2}
                        value={valueMsgInput}
                        name="message"
                        className={cx('contact-input')}
                        placeholder="Message"
                    ></textarea>
                    <input type="submit" value="Send" className={cx('contact-submit', 'cus-button')} />
                    {doneSendForm && <span>Thanks for contacting me!</span>}
                </form>
                <div
                    style={{ top: '2rem', width: '21rem', height: '11rem', left: '6rem' }}
                    className={cx('blur')}
                ></div>
            </div>
        </div>
    );
}

export default Contact;
