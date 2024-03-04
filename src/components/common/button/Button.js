import { Link } from 'react-router-dom'
import './style.scss'

function Button(props) {
    const { link, label, ButtonClass } = props.data;

    return (
        <Link to={link} className={ButtonClass}>{label}</Link>
    );
}

export default Button;
