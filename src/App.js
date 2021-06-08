import './App.css';
import React, {useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';


import Navbar from './components/Navbar'
import Posts from './components/pages/Posts'
import MainPost from './components/MainPost';
import BlogPost from './components/pages/BlogPost';
import time_ from './assets/img/time.jpg';
import focus_ from './assets/img/focus.jpg';
import stubborn from './assets/img/stubborn.jpg';
import self_ from './assets/img/social.jpg';
import Search from './components/pages/Search';
import Books from './components/pages/Books';
import Footer from './components/Footer';
import NotFound from './components/pages/NotFound';




function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/search/${search}`;
  }

  const [search, setSearch] = useState('')
  const searchPosts = (e) => {

    setSearch(e.target.value)
    
  }

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
    {id: 4, imageUrl: self_, title: 'Social Media is the modern bars'}
  ]

  return (
    <Router>
        <Navbar searchPosts={searchPosts} handleSubmit={handleSubmit}/>
        <Switch >
            <Route exact path="/post">
                <BlogPost />
            </Route>
            <Route exact path="/search/:query">
                <Search />
            </Route>
            <Route exact path="/books">
                <Books />
            </Route>
            <Route exact path="/" >
                <div className="main-container">
                  <MainPost post={posts[0]}/>
                  <Posts posts={posts} />
                  <Posts posts={posts} />
                  <button >Load More...</button>
                </div>
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
