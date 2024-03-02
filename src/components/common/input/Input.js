import './style.scss'

function Input(props) {
    const {icon, type, name, placeholder} = props.data;

    return (
        <div className='icon-input d-flex br-10'>
            <div className='icon'>{icon}</div>
            <input type={type} name={name} placeholder={placeholder}></input>
        </div>
    );
}

export default Input;