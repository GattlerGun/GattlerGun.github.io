import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import scrollToSection from '../../Utils/scrollToSection';

import './nav.scss';
import logo from './../../images/svg/logo.svg';

function Nav(prop) {
    const { pathname } = useLocation();
    const [menuActive, setMenuActive] = useState(false);
    const currentLink = 'nav__link nav__link--current';
    const normalLink = 'nav__link';

    return (<nav className="nav">
        <div className="container">
            <div className="nav__inner">
                <NavLink to={'/'} className="logo">
                    <img src={logo} alt="logo" />
                </NavLink>
                <ul className={menuActive ? "nav__list nav__list--open" : "nav__list"}>
                    <li className="nav__item" onClick={() => { setMenuActive(false) }}>
                        <NavLink to={'/'} className={
                            ({ isActive }) => isActive ? currentLink : normalLink}>Home</NavLink>
                    </li>
                    <li className="nav__item" onClick={() => { setMenuActive(false) }}>
                        <NavLink to={'/projects'} className={
                            ({ isActive }) => isActive ? currentLink : normalLink}>Projects</NavLink>
                    </li>
                    {pathname === '/' ? <li className="nav__item" onClick={() => { scrollToSection(prop.elementRef); setMenuActive(false) }}>My Skills</li> : ''}
                </ul>
                <button className={menuActive ? "burger burger--active" : "burger"} onClick={() => {
                    setMenuActive(!menuActive)
                }}><span></span></button>
            </div>
        </div>
    </nav>);
}

export default Nav;