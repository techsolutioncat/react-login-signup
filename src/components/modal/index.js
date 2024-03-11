import React, { useState } from 'react';
import axios from 'axios';
import './style.scss'

const Modal = ({ focusData, isOpen, onClose, id, titlevalue, contentvalue }) => {

    const modalStyle = {
        display: isOpen ? 'block' : 'none',
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

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [formData, setFormData] = useState();

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setFormData({
            id: id,
            title: title,
            content: content
        });

        if (formData === undefined) {
            return;
        }

        axios.post('http://localhost:8080/savefocus', formData)
            .then(response => {
                console.log('Form data sent successfully');
                if (response.data.successful) {
                    onClose();
                    focusData();
                }
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

    return (
        <div className='modal-wrap' style={modalStyle}>
            <form className='modal-content' style={contentStyle} onSubmit={handleSubmit}>
                <div className='modal-header m-0 font-Syne fw-700 fs-25'>ADD/EDIT</div>
                <div className='form-group'>
                    <p className='m-0 font-Syne fw-700 fs-16'>Title</p>
                    <input type="text" name="title" className="focusTitle" placeholder="Title" onChange={handleTitleChange} required defaultValue={titlevalue} />
                </div>
                <div className='form-group'>
                    <p className='m-0 font-Syne fw-700 fs-16'>Content</p>
                    <textarea className='content' name="focusContent" placeholder='Text' rows={2} onChange={handleContentChange} required defaultValue={contentvalue}></textarea>
                </div>
                <div className='modal-footer'>
                    <button type='submit' className='m-0 font-Syne fw-600 fs-16 btn-info'>Save</button>
                    <button onClick={onClose} className='m-0 font-Syne fw-600 fs-16 btn-light'>Close</button>
                </div>
            </form>
        </div>
    );
};

export default Modal;