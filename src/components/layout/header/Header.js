import { Link } from 'react-router-dom'
import React, { useRef, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
//Import home
import NavLink from './NavLink'

//Import svg
import logo from '../../../assets/images/svg/logo.svg'
import MobileLogo from '../../../assets/images/svg/mobile-logo.svg'
import gold from '../../../assets/images/svg/gold.svg'
import homepage from '../../../assets/images/svg/homepage.svg'
import focus from '../../../assets/images/svg/focus.svg'
import rewards from '../../../assets/images/svg/rewards.svg'
import profile from '../../../assets/images/svg/profile.svg'
import statistics from '../../../assets/images/svg/statistics.svg'
import logout from '../../../assets/images/svg/logout.svg'
import megamenu from '../../../assets/images/svg/megamenu.svg'

import './style.scss'

function Header(props) {
    const items = [
        {
            name: 'Homepage',
            svg: <img className='nav-icon' src={homepage} alt='nav-logo'></img>
        },
        {
            name: 'Focus Point',
            svg: <img className='nav-icon' src={focus} alt='nav-logo'></img>
        },
        {
            name: 'Rewards',
            svg: <img className='nav-icon' src={rewards} alt='nav-logo'></img>
        },
        {
            name: 'Profile',
            svg: <img className='nav-icon' src={profile} alt='nav-logo'></img>
        },
        {
            name: 'My Statistics',
            svg: <img className='nav-icon' src={statistics} alt='nav-logo'></img>
        },
        {
            name: 'Pricing',
            svg: <img className='nav-icon' src={gold} alt='nav-logo'></img>
        }
    ];

    for (const [i, item] of items.entries()) {
        items[i].liClass = 'nav-link d-flex ls-none';
        if (item.name === props.page) {
            items[i].liClass = 'nav-link d-flex ls-none active';
        }
    }

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <header className='page-header header-main__wrapper page-width'>
            <div className='header-main__container d-flex'>
                <div className='site-logo'>
                    <Link to="/" className='logo'>
                        <img src={logo} alt='logo'></img>
                    </Link>
                    <Link to="/" className='mobile-logo d-hide'>
                        <img src={MobileLogo} alt='logo'></img>
                    </Link>
                </div>
                <div className='site-navigation'>
                    <NavLink data={items} />
                </div>
                <div className='logout'>
                    <Link to='/' className='nav-link btn-transparent font-Syne fs-16 fw-600 td-none d-flex'>
                        <img className='nav-icon' src={logout} alt='nav-logo'></img>
                        <span>Log out</span>
                    </Link>
                </div>
                <div className='mobile-menu d-hide'>
                    {showMobileMenu ? <FontAwesomeIcon icon={faXmark} className='close-menu' onClick={toggleMobileMenu} /> : <a className='open-menu' onClick={toggleMobileMenu}><img src={megamenu}></img></a>}
                    {showMobileMenu ? <ul className='nav-link-list p-0 m-0 d-flex ls-none br-10'>
                        {
                            items.map((item, index) => (
                                <li className={item.liClass} key={index}>
                                    <Link to="/myfocus" className='nav-link btn-transparent font-Syne fs-14 fw-600 td-none'>{item.name}</Link>
                                </li>
                            ))
                        }
                    </ul> : ''}
                </div>
            </div>
        </header>
    );
}

export default Header;
