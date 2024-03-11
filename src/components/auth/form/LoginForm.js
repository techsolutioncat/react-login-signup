import axios from 'axios';
import React, { useRef, useState } from 'react'
// import FormInput from '../../common/input/FormInput'
import Button from '../../common/button/Button'

//Import Social icons
import google from '../../../assets/images/google.png';
import metamask from '../../../assets/images/metamask.png';
import twitter from '../../../assets/images/twitter.png';
import instagram from '../../../assets/images/instagram.png';
//Import svg
// import user from '../../../assets/images/svg/user.svg'
import mail from '../../../assets/images/svg/mail.svg'
import lock from '../../../assets/images/svg/lock.svg'

import './style.scss'

function Form(props) {
    const { title, subtitle } = props.data;
    const warningRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formData, setFormData] = useState();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setFormData({
            email: email,
            password: password
        });

        if (formData === undefined) {
            return;
        }

        axios.post('http://localhost:8080/login', formData)
            .then(response => {
                console.log('Form data sent successfully');
                if (response.data.auth == true) {
                    localStorage.setItem('accessToken', response.data.accessToken);
                    location.href = '/myfocus';
                } else {
                    warningRef.current.style.display = 'block';
                }
            })
            .catch(error => {
                if (error.response.status === 404) {
                    console.log('Resource not found');
                    // Handle 404 error
                } else {
                    console.error('An error occurred:', error);
                    // Handle other errors
                }
            });
    }

    return (
        <div className='auth-form'>
            <form className='submit-form' onSubmit={handleSubmit}>
                <div className="form-header">
                    <h1 className="form-title m-0 font-Syne fw-600">{title}</h1>
                    <p className="form-subtitle m-0 font-Montserrat fw-500">{subtitle}</p>
                </div>
                <div className='form-body'>
                    <div className='form-group'>
                        <div className='warning form-message d-hide font-Syne' ref={warningRef}>Please enter your email and password correctly.</div>
                    </div>
                    <div className='form-group'>
                        <div className='icon-input d-flex br-10'>
                            <div className='icon'> <img src={mail} alt='emailicon'></img></div>
                            <input type='email' name='email' placeholder='Email' required onChange={handleEmailChange} ></input>
                        </div>
                        {/* <FormInput data={{ icon: <img src={user} alt='emailicon'></img>, type: 'text', name: 'username', placeholder: 'Username', required: true }} ></FormInput> */}
                    </div>
                    <div className='form-group'>
                        <div className='icon-input d-flex br-10'>
                            <div className='icon'><img src={lock} alt='lockicon'></img></div>
                            <input type='password' name='password' placeholder='Password' required onChange={handlePasswordChange} ></input>
                        </div>
                        {/* <FormInput data={{ icon: <img src={lock} alt='emailicon'></img>, type: 'password', name: 'password', placeholder: 'Password', required: true }}></FormInput> */}
                    </div>
                    <div className='form-group'>
                        <Button data={{ type: 'submit', url: '', label: 'Log In', ButtonClass: 'site-button btn-submit btn-gradient font-Syne fw-700 br-10 br-10 td-none' }}></Button>
                    </div>
                    <div className='form-group'>
                        <Button data={{ type: 'link', url: '/resetpassword', label: 'I forgot my password', ButtonClass: 'site-button btn-submit btn-greygradient font-Syne fw-700 br-10 br-10 td-none' }}></Button>
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

export default Form;