import { Link } from 'react-router-dom'
import React, { useRef, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNavicon, faXmark } from '@fortawesome/free-solid-svg-icons'

import Button from '../../common/button/Button'
import './style.scss'
import logo from '../../../assets/images/svg/logo.svg'
import MobileLogo from '../../../assets/images/svg/mobile-logo.svg'

function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const divRef = useRef();
    useEffect(() => {
        const handleScroll = () => {
           // Perform actions when the scroll position changes
            if (window.scrollY > 0) {
                divRef.current.style.backgroundColor = '#f9f8f4';
                divRef.current.style.boxShadow = '10px 6px 17px #e3dab9';
            }else{
                divRef.current.style.backgroundColor = 'transparent';
                divRef.current.style.boxShadow = 'unset';
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <header className='header-main__wrapper' ref={divRef}>
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
                    <Button data={{ type: 'link', url: '/', label: 'Log in', ButtonClass: 'nav-link site-button link-login btn-transparent font-Syne fw-500 br-10 br-10 td-none' }}></Button>
                    <Button data={{ type: 'link', url: '/signup', label: 'Sign Up', ButtonClass: 'nav-link site-button link-signup btn-gradient font-Syne fw-700 br-10 br-10 td-none' }}></Button>
                    <div className='mobile-menu d-hide'>
                        {showMobileMenu ? <FontAwesomeIcon icon={faXmark} className='close-menu' onClick={toggleMobileMenu} /> : <FontAwesomeIcon icon={faNavicon} className='open-menu' onClick={toggleMobileMenu} />}
                        {showMobileMenu ? <ul className="menu-list ls-none p-0 br-10">
                            <li>
                                <Link to="/" className='mo-nav-link font-Syne td-none'>Log in</Link>
                            </li>
                            <li>
                                <Link to="/signup" className='mo-nav-link font-Syne td-none'>Sign Up</Link>
                            </li>
                        </ul> : ''}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;