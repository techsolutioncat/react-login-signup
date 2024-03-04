import FormInput from '../../common/input/FormInput'
import Button from '../../common/button/Button'
//Import svg
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
                        <FormInput data={{ icon: <img src={lock} alt='lockicon'></img>, type: 'password', name:'password', placeholder: 'New Password', required: true }} ></FormInput>
                    </div>
                    <div className='form-group'>
                        <FormInput data={{ icon: <img src={lock} alt='lockicon'></img>, type: 'password', name:'re-password', placeholder: 'Confirm new password', required: true }} ></FormInput>
                    </div>
                    <div className='form-button-group'>
                        <div className='form-group'>
                            <Button data={{ link: '/', label: 'Log In', ButtonClass: 'site-button btn-submit btn-gradient font-Syne fw-700 br-10 br-10 td-none' }}></Button>
                        </div>
                        <div className='form-group'>
                            <Button data={{ link: '/', label: 'Cancel reset and go back', ButtonClass: 'site-button btn-submit btn-greygradient font-Syne fw-700 br-10 br-10 td-none' }}></Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;