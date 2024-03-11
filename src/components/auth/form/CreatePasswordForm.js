// import FormInput from '../../common/input/FormInput'
import axios from 'axios';
import React, { useRef, useState } from 'react'
import Button from '../../common/button/Button'
//Import svg
import lock from '../../../assets/images/svg/lock.svg'

import './style.scss'

function Form(props) {
    const warningRef = useRef();
    const infoRef = useRef();
    const { title, subtitle, name, email, tel } = props.data;
    const [pwd, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [formData, setFormData] = useState({
        username: name,
        email: email,
        phone: tel,
        password: pwd
    });

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setFormData({
            ...formData,
            password: e.target.value
        });
    };

    const handleRePasswordChange = async (e) => {
        setRepassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform validation to check if all input fields have valid values
        if (pwd.trim() === repassword.trim()) {
            axios.post('http://localhost:8080/signup', formData)
                .then(response => {
                    console.log('Form data sent successfully');
                    if(response.data.registed === true) {
                        warningRef.current.style.display = 'none';
                        infoRef.current.style.display = 'block';
                    }else{
                        localStorage.setItem('accessToken', response.data.accessToken);
                        location.href="/myfocus";
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
        } else {
            infoRef.current.style.display = 'none';
            warningRef.current.style.display = 'block';
        }
    };
    return (
        <div className='auth-form'>
            <form className='submit-form' onSubmit={handleSubmit}>
                <div className="form-header">
                    <h1 className="form-title m-0 font-Syne fw-600">{title}</h1>
                    <p className="form-subtitle m-0 font-Montserrat fw-500">{subtitle}</p>
                </div>
                <div className='form-body'>
                    <input type='hidden' name="username" value={name}></input>
                    <input type='hidden' name="email" value={email}></input>
                    <input type='hidden' name="phone" value={tel}></input>
                    <div className='form-group'>
                        <div className='info form-message d-hide font-Syne' ref={infoRef}>You are already registered.</div>
                    </div>
                    <div className='form-group'>
                        <div className='warning form-message d-hide font-Syne' ref={warningRef}>Please enter the password as same confirm password.</div>
                    </div>
                    <div className='form-group'>
                        <div className='icon-input d-flex br-10'>
                            <div className='icon'><img src={lock} alt='lockicon'></img></div>
                            <input type='password' name='password' placeholder='New Password' required onChange={handlePasswordChange} ></input>
                        </div>
                        {/* <FormInput data={{ icon: <img src={lock} alt='lockicon'></img>, type: 'password', name: 'password', placeholder: 'New Password', required: true }} ></FormInput> */}
                    </div>
                    <div className='form-group'>
                        <div className='icon-input d-flex br-10'>
                            <div className='icon'><img src={lock} alt='lockicon'></img></div>
                            <input type='password' name='re-password' placeholder='Confirm new password' required onChange={handleRePasswordChange} ></input>
                        </div>
                        {/* <FormInput data={{ icon: <img src={lock} alt='lockicon'></img>, type: 'password', placeholder: 'Confirm new password', required: true }} ></FormInput> */}
                    </div>
                    <div className='form-button-group'>
                        <div className='form-group'>
                            <Button data={{ type: 'submit', url: '', label: 'Submit', ButtonClass: 'site-button btn-submit btn-gradient font-Syne fw-700 br-10 br-10 td-none' }}></Button>
                        </div>
                        <div className='form-group'>
                            <Button data={{ type: 'link', url: '/', label: 'I already have an account', ButtonClass: 'site-button btn-submit btn-greygradient font-Syne fw-700 br-10 br-10 td-none' }}></Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;