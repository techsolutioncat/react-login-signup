import { Link } from 'react-router-dom'
import Button from '../../common/button/Button'

//Import svg
import telegram from '../../../assets/images/svg/telegram.svg'
import twitter from '../../../assets/images/svg/twitter.svg'

import nothing from '../../../assets/images/nothing.png'
import send from '../../../assets/images/send.png'
import footerLogo from '../../../assets/images/footer-logo.png'
import './style.scss'

function Footer() {

    return (
        <footer className='page-footer'>
            <div className='page-width d-flex'>
                <div className='footer-logo'>
                    <Link to='/myfocus'>
                        <img src={footerLogo} alt='logo'></img>
                    </Link>
                    <Button data={{ type: 'link', url: '/myfocus', label: 'Contact Us', ButtonClass: 'site-button footer-button btn-gradient font-Syne fw-700 br-10 br-10 td-none' }}></Button>
                </div>
                <div className='footer-content'>
                    <div className='social-icons d-flex'>
                        <Link to='/#'>
                            <img src={telegram} alt='logo'></img>
                        </Link>
                        <Link to='/#'>
                            <img src={twitter} alt='logo'></img>
                        </Link>
                    </div>
                    <div className='footer-links d-flex'>
                        <Link to='/#' className='link font-Cairo fw-700 fs-16 td-none'>FAQ</Link>
                        <Link to='/#' className='link font-Cairo fw-700 fs-16 td-none'>Terms & Conditions</Link>
                    </div>
                    <div className='footer-brands'>
                        <div className='label'><p className='font-Cairo fw-400 fs-16'>Founded by:</p></div>
                        <div className='brands d-flex'>
                            <img src={nothing} alt='footer-image'></img>
                            <img src={send} alt='footer-image'></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <p className='font-Cairo fw-400 fs-16'>© 2023 Design. All right reserves</p>
            </div>
        </footer>
    );
}

export default Footer;
