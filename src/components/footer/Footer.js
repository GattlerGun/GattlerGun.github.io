import { NavLink, useLocation } from 'react-router-dom';

import ScrollToTopClick from './../../Utils/ScrollToTopClick';
import scrollToSection from '../../Utils/scrollToSection';

import gitHub from './../../images/svg/github.svg';
import telegram from './../../images/svg/telegram.svg';
import goTop from './../../images/svg/goTop.svg';
import './footer.scss';

const Footer = (prop) => {
    const { pathname } = useLocation();
    return (<footer className="footer">
        <div className="container">
            <div className="footer__inner">
                <ul className="footer__nav-list">
                    <li className="footer__nav-item"><NavLink to={'/'} className="footer__nav-link">Home</NavLink></li>
                    <li className="footer__nav-item"><NavLink to={'/projects'} className="footer__nav-link">Projects</NavLink></li>
                    {pathname === '/' ? <li className="footer__nav-item footer__nav-link" onClick={() => { scrollToSection(prop.elementRef); }}>My Skills</li> : ''}
                </ul>
                <ul className="footer__socials">
                    <li className="footer__social">
                        <a className="footer__link" href="https://github.com/GattlerGun" target="_blank" rel='noreferrer'>
                            <img className="svg-socials" src={gitHub} alt="github" />
                        </a>
                    </li>
                    <li className="footer__social">
                        <a className="footer__link" href="https://t.me/ThisNeTelega" target="_blank" rel='noreferrer'>
                            <img className="svg-socials" src={telegram} alt="telegram" />
                        </a>
                    </li>
                </ul>
                <div onClick={() => ScrollToTopClick()} className="go-top__btn btn-scroll">
                    <img className="svg-btn-top" src={goTop} alt="goTop" />
                </div>
            </div>
        </div>
    </footer>);
}

export default Footer;