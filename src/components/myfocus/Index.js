import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Modal from '../modal';

import plus from '../../assets/images/svg/plus.svg'
import help from '../../assets/images/svg/help-icon.svg'
import users from '../../assets/images/svg/users.svg'
import fizz from '../../assets/images/svg/fizz.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons'

import './style.scss'

function MyFocus() {
    const accessToken = localStorage.getItem('accessToken');
    if(accessToken == '' || accessToken == null || accessToken == undefined) {
        location.href = '/';
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rowID, setRowId] = useState(0);
    const [pageID, setPageID] = useState(1);
    const [data, setData] = useState([]);
    const [showConfirm, setShowConfirm] = useState(false);

    const modalStyle = {
        display: showConfirm ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 999
    };

    const contentStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16)'
    };

    const loadmore = () => {
        setPageID(pageID + 1);
        handleGetData();
    }

    const handleGetData = () => {
        axios.post('http://localhost:8080/getData', { pageid: pageID })
            .then(response => {
                console.log('Form data sent successfully');
                setData(response.data);

            })
            .catch(error => {
                if (error.response.status === 404) {
                    console.log('Resource not found');
                    // Handle 404 error
                } else {
                    console.error('An error occurred:', error);
                    // Handle other errors
                }
            });
    }


    useEffect(() => {
        return () => {
            handleGetData();
        };
    }, []);

    const handleRemove = (id) => {
        setPageID(1);
        setShowConfirm(true);
        setRowId(id);
    }

    const reloadData = () => {
        setPageID(1);
        handleGetData();
    }

    const handleConfirm = () => {
        axios.post('http://localhost:8080/removefocus', {id: rowID})
            .then(response => {
                console.log('Form data sent successfully');
                if (response.data.success) {
                    handleGetData();
                    setShowConfirm(false);
                }
            });
    };

    const handleOpenAddModal = () => {
        setRowId(0);
        setIsModalOpen(true);
    };

    const handleOpenUpdateModal = (id) => {
        setRowId(id);
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='page-width'>
            <h1 className='page-title font-Syne fw-600 fs-32'>Your Focus</h1>
            <div className='portlate br-24'>
                <div className='tab-header'>
                    <ul className='d-flex'>
                        <li className='active'>
                            <Link to='/myfocus' className='font-Cairo fw-700 fs-16 td-none'>In progress</Link>
                        </li>
                        <li>
                            <Link to='/myfocus' className='font-Cairo fw-700 fs-16 td-none'>Completed</Link>
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
                            <a className='add-new font-Syne fw-700 fs-18 td-none' onClick={handleOpenAddModal}><img src={plus}></img>Add new focus point</a>
                        </div>
                    </div>
                    <div className='card-list'>
                        {data && data.map(row => (
                            <div className='card' key={row.id}>
                                <div className='card-title'>
                                    <p className='m-0 font-Syne fw-700 fs-16'>{row.title}</p>
                                    <img src={help}></img>
                                </div>
                                <div className='card-icons'>
                                    <div className='icons'>
                                        <img src={users}></img>
                                        <img src={fizz}></img>
                                    </div>
                                    <a className='btn-edit'>
                                        <FontAwesomeIcon icon={faEdit} className='fa-edit' onClick={() => handleOpenUpdateModal(row.id)} />
                                    </a>
                                </div>
                                <div className='card-text'>
                                    <p className='font-Cairo fw-500 fs-14'>{row.content}</p>
                                    <a className='btn-remove' onClick={() => handleRemove(row.id)}>
                                        <FontAwesomeIcon icon={faRemove} className='fa-remove' />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='load-more'>
                        <a className='btn-load-more font-Syne fw-500 fs-16 td-none br-10' onClick={loadmore}>Load More</a>
                    </div>
                </div>
            </div>
            { isModalOpen && (
                <Modal focusData={reloadData} isOpen={isModalOpen} onClose={handleCloseModal} id={rowID}></Modal>
            )}
            {showConfirm && (
                <div className="modal" style={modalStyle}>
                    <div className="confirm-modal-content" style={contentStyle}>
                        <div className='modal-header m-0 font-Syne fw-700 fs-25'><p>Are you sure you want to remove?</p></div>
                        <div className='modal-footer'>
                            <button onClick={handleConfirm} className="m-0 font-Syne fw-600 fs-16 btn-info">Okay</button>
                            <button onClick={() => setShowConfirm(false)} className="m-0 font-Syne fw-600 fs-16 btn-light">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MyFocus;
