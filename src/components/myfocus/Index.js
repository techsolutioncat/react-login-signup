import { Link } from 'react-router-dom'
import plus from '../../assets/images/svg/plus.svg'
import help from '../../assets/images/svg/help-icon.svg'
import users from '../../assets/images/svg/users.svg'
import fizz from '../../assets/images/svg/fizz.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons'

import './style.scss'

function MyFocus() {

    return (
        <div className='page-width'>
            <h1 className='page-title font-Syne fw-600 fs-32'>Your Focus</h1>
            <div className='portlate br-24'>
                <div className='tab-header'>
                    <ul className='d-flex'>
                        <li className='active'>
                            <Link to='/#' className='font-Cairo fw-700 fs-16 td-none'>In progress</Link>
                        </li>
                        <li>
                            <Link to='/#' className='font-Cairo fw-700 fs-16 td-none'>Completed</Link>
                        </li>
                    </ul>
                </div>

                <div className='tab-content'>
                    <div className='action-group d-flex'>
                        <div className='information'>
                            <p className='font-Cairo fw-600 fs-16 td-none m-0'>Focus Points</p>
                            <div className='focus-count d-flex'>
                                <p className='font-Cairo fw-700 fs-40 td-none m-0'>12,254</p>
                                <p className='focus-points font-Cairo fw-700 fs-20 td-none m-0'>points</p>
                            </div>
                        </div>
                        <div className='button'>
                            <a className='add-new font-Syne fw-700 fs-18 td-none'><img src={plus}></img>Add new focus point</a>
                        </div>
                    </div>
                    <div className='card-list'>
                        <div className='card'>
                            <div className='card-title'>
                                <p className='m-0 font-Syne fw-700 fs-16'>Distinctio perspiciatis sint nihil nulla.</p>
                                <img src={help}></img>
                            </div>
                            <div className='card-icons'>
                                <div className='icons'>
                                    <img src={users}></img>
                                    <img src={fizz}></img>
                                </div>
                                <a className='btn-edit'>
                                    <FontAwesomeIcon icon={faEdit} className='fa-edit' />
                                </a>
                            </div>
                            <div className='card-text'>
                                <p className='font-Cairo fw-500 fs-14'>Voluptatem soluta omnis doloremque iusto odit ab architecto voluptas.</p>
                                <a className='btn-remove'>
                                    <FontAwesomeIcon icon={faRemove} className='fa-remove' />
                                </a>
                            </div>
                        </div>

                        <div className='card'>
                            <div className='card-title'>
                                <p className='m-0 font-Syne fw-700 fs-16'>Distinctio perspiciatis sint nihil nulla.</p>
                                <img src={help}></img>
                            </div>
                            <div className='card-icons'>
                                <div className='icons'>
                                    <img src={users}></img>
                                    <img src={fizz}></img>
                                </div>
                                <a className='btn-edit'>
                                    <FontAwesomeIcon icon={faEdit} className='fa-edit' />
                                </a>
                            </div>
                            <div className='card-text'>
                                <p className='font-Cairo fw-500 fs-14'>Voluptatem soluta omnis doloremque iusto odit ab architecto voluptas.</p>
                                <a className='btn-remove'>
                                    <FontAwesomeIcon icon={faRemove} className='fa-remove' />
                                </a>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-title'>
                                <p className='m-0 font-Syne fw-700 fs-16'>Distinctio perspiciatis sint nihil nulla.</p>
                                <img src={help}></img>
                            </div>
                            <div className='card-icons'>
                                <div className='icons'>
                                    <img src={users}></img>
                                    <img src={fizz}></img>
                                </div>
                                <a className='btn-edit'>
                                    <FontAwesomeIcon icon={faEdit} className='fa-edit' />
                                </a>
                            </div>
                            <div className='card-text'>
                                <p className='font-Cairo fw-500 fs-14'>Voluptatem soluta omnis doloremque iusto odit ab architecto voluptas.</p>
                                <a className='btn-remove'>
                                    <FontAwesomeIcon icon={faRemove} className='fa-remove' />
                                </a>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-title'>
                                <p className='m-0 font-Syne fw-700 fs-16'>Distinctio perspiciatis sint nihil nulla.</p>
                                <img src={help}></img>
                            </div>
                            <div className='card-icons'>
                                <div className='icons'>
                                    <img src={users}></img>
                                    <img src={fizz}></img>
                                </div>
                                <a className='btn-edit'>
                                    <FontAwesomeIcon icon={faEdit} className='fa-edit' />
                                </a>
                            </div>
                            <div className='card-text'>
                                <p className='font-Cairo fw-500 fs-14'>Voluptatem soluta omnis doloremque iusto odit ab architecto voluptas.</p>
                                <a className='btn-remove'>
                                    <FontAwesomeIcon icon={faRemove} className='fa-remove' />
                                </a>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-title'>
                                <p className='m-0 font-Syne fw-700 fs-16'>Distinctio perspiciatis sint nihil nulla.</p>
                                <img src={help}></img>
                            </div>
                            <div className='card-icons'>
                                <div className='icons'>
                                    <img src={users}></img>
                                    <img src={fizz}></img>
                                </div>
                                <a className='btn-edit'>
                                    <FontAwesomeIcon icon={faEdit} className='fa-edit' />
                                </a>
                            </div>
                            <div className='card-text'>
                                <p className='font-Cairo fw-500 fs-14'>Voluptatem soluta omnis doloremque iusto odit ab architecto voluptas.</p>
                                <a className='btn-remove'>
                                    <FontAwesomeIcon icon={faRemove} className='fa-remove' />
                                </a>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-title'>
                                <p className='m-0 font-Syne fw-700 fs-16'>Distinctio perspiciatis sint nihil nulla.</p>
                                <img src={help}></img>
                            </div>
                            <div className='card-icons'>
                                <div className='icons'>
                                    <img src={users}></img>
                                    <img src={fizz}></img>
                                </div>
                                <a className='btn-edit'>
                                    <FontAwesomeIcon icon={faEdit} className='fa-edit' />
                                </a>
                            </div>
                            <div className='card-text'>
                                <p className='font-Cairo fw-500 fs-14'>Voluptatem soluta omnis doloremque iusto odit ab architecto voluptas.</p>
                                <a className='btn-remove'>
                                    <FontAwesomeIcon icon={faRemove} className='fa-remove' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='load-more'>
                        <a className='btn-load-more font-Syne fw-500 fs-16 td-none br-10'>Load More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyFocus;
