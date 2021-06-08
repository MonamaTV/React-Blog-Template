import React, { useState } from 'react';
import Post from '../Post'
import '../Post.css';
import time_ from '../../assets/img/time.jpg';
// import focus_ from '../../assets/img/focus.jpg';
import stubborn from '../../assets/img/stubborn.jpg';
import self_ from '../../assets/img/social.jpg';

import { FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from 'react-icons/fa'

import focus_ from '../../assets/img/social.jpg';
function BlogPost({ post }) {
    const [showComments, setShowComments] = useState(false)
    const posts = [
        {id: 1, imageUrl: time_, title: 'Great things take time, do not rush.', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'+
        'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'+
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'+
        'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
        {id: 2, imageUrl: stubborn, title: 'The happier you are, the more everything makes sense', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'+
        'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'+
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'+
        'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
        {id: 3, imageUrl: focus_, title: 'The end results of undivided attention'},
        {id: 4, imageUrl: self_, title: 'Put yourself first -- unconditionally'}
      ]
    return (
        <div className="blog-post-container">
           <div className="blog-post-image">
               <img src={focus_} alt="Focus"/>
           </div>
           <div className="blog-post-body">
               <small className="tags">#focus #personal</small>
                <div className="blog-post-title">
                    <h1>Social Media is the modern bars</h1>
               </div>
               <div className="share-buttons">
                    <a href="/"><FaWhatsapp className="whatsapp"/></a>
                    <a href="/"><FaFacebook className="facebook"/></a>
                    <a href="/"><FaTwitter className="twiter"/></a>
                    <a href="/"><FaLinkedin className="twiter"/></a>
                    <a href="/"><FaPinterest className="twiter"/></a>
               </div>
               <div className="blog-post-content">
                    <p>The biological impact of social media deepens every second that passes - or more precisely, its impact on our lives. It conviently appears as an 'organizatinal structure' that intents to impose ideas to us that drive our behaviour and further distance ourselves from who we truly are. This is evident if you look with scrutiny to how it has massively broadened the societal social hiercachy. My conversation does not take away the positives that have come out of it. 
                    I am just thinking. What could be the ultimate formula of dealing with these chains (social media)? Is leaving it indefintely out of question?
                    </p>
                    <br/>
                    <p>The biological impact of social media deepens every second that passes - or more precisely, its impact on our lives. It conviently appears as an 'organizatinal structure' that intents to impose ideas to us that drive our behaviour and further distance ourselves from who we truly are. This is evident if you look with scrutiny to how it has massively broadened the societal social hiercachy. My conversation does not take away the positives that have come out of it. 
                    I am just thinking. What could be the ultimate formula of dealing with these chains (social media)? Is leaving it indefintely out of question?
                    </p>
               </div>
           </div>
           <div className="share-post">
               <p >Share The Post</p>
               <small className="facebook-btn"><FaFacebook />Facebook</small>
               <small className="whatsapp-btn"><FaWhatsapp />WhatsApp</small>
               <small className="twitter-btn"><FaTwitter  />Twitter</small>
           </div>
           <div className="comments-container">
                <button onClick={() => setShowComments(!showComments)}>{showComments ? 'Hide' : 'Show'} Comments</button>
                
           </div>
           <p className="p-block">Related Blogs</p> 
           <div className="posts-container">
               
                {posts.map((post) => (
                    <Post post={post} key={post.id} />
                ))}
           </div>
          
        </div>
    )
}

export default BlogPost;
