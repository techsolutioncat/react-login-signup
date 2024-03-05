import React, { useState } from 'react'
// import axios from 'axios';
import VerifyEmailForm from './VerifyEmailForm'

// import FormInput from '../../common/input/FormInput'
import Button from '../../common/button/Button'

//Import Social icons
import google from '../../../assets/images/google.png';
import metamask from '../../../assets/images/metamask.png';
import twitter from '../../../assets/images/twitter.png';
import instagram from '../../../assets/images/instagram.png';
//Import svg
import user from '../../../assets/images/svg/user.svg'
import mail from '../../../assets/images/svg/mail.svg'
import phone from '../../../assets/images/svg/phone.svg'

import './style.scss'

function Form(props) {
    const { title, subtitle } = props.data;

    const [isValid, setIsValid] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setPhone] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleProceed = () => {
        // Perform validation to check if all input fields have valid values
        if (name.trim() === '' || tel.trim() === '' || !email.includes('@')) {
            setIsValid(false);
        } else {
            // console.log(email)
            // try {
            //     const response = await axios.post('http://your-backend-api.com/send-verification-code', { email });
            //     console.log('Verification code sent successfully');
            // } catch (error) {
            //     console.error('Error sending verification code:', error);
            // }
            setIsValid(true);
        }
    };

    if (!isValid) {
        return (
            <div className='auth-form'>
                <form className='submit-form'>
                    <div className="form-header">
                        <h1 className="form-title m-0 font-Syne fw-600">{title}</h1>
                        <p className="form-subtitle m-0 font-Montserrat fw-500">{subtitle}</p>
                    </div>
                    <div className='form-body'>
                        <div className='form-group'>
                            <div className='icon-input d-flex br-10'>
                                <div className='icon'><img src={user} alt='usericon'></img></div>
                                <input type='text' name='username' placeholder='Username' required onChange={handleNameChange} ></input>
                            </div>
                            {/* <FormInput data={{ icon: <img src={user} alt='usericon'></img>, type: 'text', name: 'username', placeholder: 'Username', required: true }} ></FormInput> */}
                        </div>
                        <div className='form-group'>
                            <div className='icon-input d-flex br-10'>
                                <div className='icon'> <img src={mail} alt='emailicon'></img></div>
                                <input type='email' name='email' placeholder='Email' required onChange={handleEmailChange} ></input>
                            </div>
                            {/* <FormInput data={{ icon: <img src={mail} alt='emailicon'></img>, type: 'email', name: 'email', placeholder: 'Email', required: true }} ></FormInput> */}
                        </div>
                        <div className='form-group'>
                            <div className='icon-input d-flex br-10'>
                                <div className='icon'><img src={phone} alt='phoneicon'></img></div>
                                <input type='tel' name='phonenumber' placeholder='Phone Number' required onChange={handlePhoneChange} ></input>
                            </div>
                            {/* <FormInput data={{ icon: <img src={phone} alt='phoneicon'></img>, type: 'tel', name: 'phonenumber', placeholder: 'Phone Number', required: true }} ></FormInput> */}
                        </div>
                        <div className='form-group'>
                            <button className='site-button btn-submit btn-gradient font-Syne fw-700 br-10 br-10 td-none' onClick={handleProceed}>Proceed</button>
                            {/* <Button data={{ type: 'link', url:'/Showverifyemail', label: 'Proceed', ButtonClass: 'site-button btn-submit btn-gradient font-Syne fw-700 br-10 br-10 td-none' }}></Button> */}
                        </div>
                        <div className='form-group'>
                            <Button data={{ type: 'link', url: '/', label: 'I already have an account', ButtonClass: 'site-button btn-submit btn-greygradient font-Syne fw-700 br-10 br-10 td-none' }}></Button>
                        </div>
                    </div>
                </form>
                <div className='form-icons d-flex'>
                    <a href="/#" className="link-icon icon-google">
                        <img src={google} alt="link-icon" />
                    </a>
                    <a href="/#" className="link-icon icon-metamask">
                        <img src={metamask} alt="link-icon" />
                    </a>
                    <a href="/#" className="link-icon icon-instagram d-hide">
                        <img src={instagram} alt="link-icon" />
                    </a>
                    <a href="/#" className="link-icon icon-twitter">
                        <img src={twitter} alt="link-icon" />
                    </a>
                </div>
            </div>
        );
    }

    if (isValid) {
        return (
            <VerifyEmailForm data={{ title: 'Verify Your Email', subtitle: "We have send you a code. Check your email and input the code to procced", name: name, email: email, tel: tel }} />
        )
    }
}

export default Form;