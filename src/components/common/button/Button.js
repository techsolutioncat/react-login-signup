import { Link } from 'react-router-dom'
import './style.scss'

function Button(props) {
    const { link, label, LinkClass } = props.data;

    return (
        <Link to={link} className={LinkClass}>{label}</Link>
    );
}

export default Button;
