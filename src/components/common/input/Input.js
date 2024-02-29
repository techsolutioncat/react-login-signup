import './style.scss'

function Input(props) {
    const {icon, type, placeholder} = props.data;

    return (
        <div className='icon-input d-flex br-10'>
            <div className='icon'>{icon}</div>
            <input type={type} placeholder={placeholder}></input>
        </div>
    );
}

export default Input;