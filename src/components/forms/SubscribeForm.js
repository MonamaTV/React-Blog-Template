import React from 'react';
import './SubscribeForm.css';
import { CgClose} from 'react-icons/all'

function SubscribeForm({ setOpenModal }) {

    return (
        <div className="modal-container">
            <button 
                className="close-modal" 
                onClick={() => setOpenModal(false)}>
                <CgClose />
            </button>
            <h3>Join Our NewsLetter</h3>
            <small>Be the first one to know when there is a new post.😊</small>
            <form>
                <div className="modal-input">
                    <label htmlFor="name">Full name</label>
                    <input type="text"/> 
                </div>
                <div className="modal-input">
                    <label htmlFor="name">Email</label>
                    <input type="email"/>
                </div>
                <div className="modal-input">
                    <button>Subscribe For Free</button>
                </div>
            </form>
        </div>
    )
}

export default SubscribeForm;
