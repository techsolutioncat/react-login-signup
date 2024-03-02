import React, { useState } from 'react';

import Input from '../../common/input/Input'
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
    const {title, subtitle} = props.data;
    const [formData, setFormData] = useState({ username: '', email: '', phone: '' });

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // const response = await fetch('http://localhost:3001/submitUser', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(formData)
        // });
        // const data = await response.json();
        // console.log(data);
    };
    
    const handleChange = (e) => {
        // setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className='auth-form'>
            <form className='submit-form' onSubmit={handleSubmit}>
                <div className="form-header">
                    <h1 className="form-title m-0 font-Syne fw-600">{title}</h1>
                    <p className="form-subtitle m-0 font-Montserrat fw-500">{subtitle}</p>
                </div>
                <div className='form-body'>
                    <div className='form-group'>
                        <Input data={{ icon: <img src={user} alt='usericon'></img>, type: 'text', name:'username', placeholder: 'Username' }} onChange={handleChange} ></Input>
                    </div>
                    <div className='form-group'>
                        <Input data={{ icon: <img src={mail} alt='emailicon'></img>, type: 'email', name:'email', placeholder: 'Email' }} onChange={handleChange} ></Input>
                    </div>
                    <div className='form-group'>
                        <Input data={{ icon: <img src={phone} alt='phoneicon'></img>, type: 'tel', name:'phonenumber', placeholder: 'Phone Number' }} onChange={handleChange} ></Input>
                    </div>
                    <div className='form-group'>
                        <Button data={{ link: '/', label: 'Proceed', LinkClass: 'site-button btn-submit btn-gradient font-Syne fw-700 br-10 br-10 td-none' }}></Button>
                    </div>
                    <div className='form-group'>
                        <Button data={{ link: '/', label: 'I already have an account', LinkClass: 'site-button btn-submit btn-greygradient font-Syne fw-700 br-10 br-10 td-none' }}></Button>
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