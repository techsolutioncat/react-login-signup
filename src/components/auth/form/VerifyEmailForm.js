import Button from '../../common/button/Button'
//Import svg

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
                    <div className='form-group verify-code-group d-flex br-10'>
                        <div className='input-group'>
                            <input type="text" maxLength='1' className='p-0' id="otc-1" required></input>
                        </div>
                        <div className='input-group'>
                            <input type="text" maxLength='1' className='p-0' id="otc-2" required></input>
                        </div>
                        <div className='input-group'>
                            <input type="text" maxLength='1' className='p-0' id="otc-3" required></input>
                        </div>
                        <div className='input-group'>
                            <input type="text" maxLength='1' className='p-0' id="otc-4" required></input>
                        </div>
                        <div className='input-group'>
                            <input type="text" maxLength='1' className='p-0' id="otc-5" required></input>
                        </div>
                        <div className='input-group'>
                            <input type="text" maxLength='1' className='p-0' id="otc-6" required></input>
                        </div>
                    </div>
                    <div className='form-button-group'>
                        <div className='form-group'>
                            <Button data={{ type: 'link', url:'/createpassword', label: 'Proceed', ButtonClass: 'site-button btn-submit btn-gradient font-Syne fw-700 br-10 br-10 td-none' }}></Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;