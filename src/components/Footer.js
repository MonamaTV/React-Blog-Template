import React from 'react';
import './Footer.css';

import {FaWhatsapp, FaFacebook, FaTwitter} from 'react-icons/all';
function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-header">
                <h1>TadBlog</h1>
                <small><i>Growth Is Inevitable</i></small>
                <br/>
                <br/>
                <small>The blog aims at the general public with the intent to dissect seemingly complex subjects and make them fun. Creating a diverse community that engages with me on different topics, bringing their insights -- percepctive -- that we may not have considered. </small>
            </div>
            <div className="footer-topics">
                <h3>Topics</h3>
                <ul>
                    <li>Growth</li>
                    <li>Goals</li>
                    <li>Happiness</li>
                    <li>Personal</li>
                    <li>Affairs</li>
                    <li>Depression</li>
                </ul>
            </div>
            <div className="footer-subs">
                <form >
                <input type="text" required placeholder="Enter your email"/>
                <button>Free Subscription</button>
                </form>
                <div className="follow-us">
                    <h4>Follow Us</h4>
                    <a href="/" className="whatsapp-a"><FaWhatsapp /></a>
                    <a href="/"><FaFacebook className="facebook-a"/></a>
                    <a href="/"><FaTwitter className="twitter-a"/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
