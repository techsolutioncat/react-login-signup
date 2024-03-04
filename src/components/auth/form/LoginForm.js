import FormInput from '../../common/input/FormInput'
import Button from '../../common/button/Button'

//Import Social icons
import google from '../../../assets/images/google.png';
import metamask from '../../../assets/images/metamask.png';
import twitter from '../../../assets/images/twitter.png';
import instagram from '../../../assets/images/instagram.png';
//Import svg
import user from '../../../assets/images/svg/user.svg'
import lock from '../../../assets/images/svg/lock.svg'

import './style.scss'

function Form(props) {
    const {title, subtitle} = props.data;
    
    return (
        <div className='auth-form'>
            <form className='submit-form'>
                <div className="form-header">
                    <h1 className="form-title m-0 font-Syne fw-600">{title}</h1>
                    <p className="form-subtitle m-0 font-Montserrat fw-500">{subtitle}</p>
                </div>
                <div className='form-body'>
                    <div className='form-group'>
                        <FormInput data={{ icon: <img src={user} alt='emailicon'></img>, type: 'text', name:'username', placeholder: 'Username', required: true }}></FormInput>
                    </div>
                    <div className='form-group'>
                        <FormInput data={{ icon: <img src={lock} alt='emailicon'></img>, type: 'password', name:'password', placeholder: 'Password', required: true }}></FormInput>
                    </div>
                    <div className='form-group'>
                        <Button data={{ link: '/', label: 'Proceed', ButtonClass: 'site-button btn-submit btn-gradient font-Syne fw-700 br-10 br-10 td-none' }}></Button>
                    </div>
                    <div className='form-group'>
                        <Button data={{ link: '/resetpassword', label: 'I forgot my password', ButtonClass: 'site-button btn-submit btn-greygradient font-Syne fw-700 br-10 br-10 td-none' }}></Button>
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