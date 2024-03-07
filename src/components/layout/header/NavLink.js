import { Link } from 'react-router-dom'

function NavLink(props) {
    const items = props.data;
    
    return (
        <ul className='nav-link-list p-0 m-0 d-flex ls-none'>
            {
                items.map((item, index) => (
                    <li className={item.liClass} key={index}>
                        {item.svg}
                        <Link to="/myfocus" className='nav-link btn-transparent font-Syne fs-14 fw-600 td-none'>{item.name}</Link>
                    </li>
                ))
            }
        </ul>
    );
}

export default NavLink;
