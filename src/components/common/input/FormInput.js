import './style.scss'

function FormInput(props) {
    const {icon, type, name, placeholder, required} = props.data;

    return (
        <div className='icon-input d-flex br-10'>
            <div className='icon'>{icon}</div>
            <input type={type} name={name} placeholder={placeholder} required={required}></input>
        </div>
    );
}

export default FormInput;