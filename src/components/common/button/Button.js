import { Link } from 'react-router-dom'
import './style.scss'

function Button(props) {
    const { type, url, label, ButtonClass } = props.data;

    if (type == 'link') {
        return (
            <Link to={url} className={ButtonClass}>{label}</Link>
        );
    } else {
        return (
            <button type='submit' className={ButtonClass}>{label}</button>
        );
    }
}

export default Button;
