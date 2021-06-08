import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CgClose, FiSearch, FiMenu, FaSearch } from "react-icons/all";
import './Navbar.css';
import SearchForm from './forms/SearchForm';
import SubscribeForm from './forms/SubscribeForm';
function Navbar({ searchPosts, handleSubmit }) {

    // Used to open the drawer menu
    const [click, setClick] = useState(true);
    // Changes the navigation depending on the width of the screen
    const [mobileView, setMobileView] = useState(false);
    // Opens the search input
    const [openSearch, setOpenSearch] = useState(false)
    // Opens modal for subscription
    const [openModal, setOpenModal] = useState(false);
    // 
    const screenResize = () => {
        if(window.innerWidth < 700) {
            setMobileView(true);
            setClick(false);
        }
        else {
            setMobileView(false)
        }
    }

    //On load and resize - checks the width of the screen to render the appropriate navigation/drawer
    useEffect(() => {
        screenResize();
        window.addEventListener("resize", () =>{
            screenResize();
        })
        return () => {
            setMobileView(false);
        }
    }, [window.innerWidth]) /** Everytime the width changes. RE-RUNS */

    //Opens the drawer
    const openMobileMenu = () => {
        setClick(!click);
        setMobileView(true)
    }

    return (
        <>
        <nav className="my-navbar">
            <div className="navbar-container">
                <div className="navbar-logo">{/** To change this div tag to NavLink */}
                   <NavLink to="/"> TadBlog</NavLink>
                </div>
                {/* You can only see the following button from the width 700 */}
                <div>                 
                    <button className={`menu-button  ${!mobileView && 'hide'}`} onClick={() => setOpenSearch(!openSearch) }>
                        <FiSearch className="search"/>
                    </button>
                    {/*  */}
                    <button className={`menu-button ${!mobileView && 'hide'}`} onClick={openMobileMenu}>
                        { click ? <CgClose className="times"/> : <FiMenu  className="menu" />}
                    </button>
                </div>
                
                <ul className={`nav-menu 
                    ${ mobileView ? 
                    ( `show-mobile-menu ${ click && 'show-menu'}` ) 
                    : 'show-desktop-menu'}`}> {/** If the minimum width is met, then follows whether the button has been clicked to show side navigation*/}
                    <div className="menu-items">
                        <li className="nav-item">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/books">Books</NavLink>
                        </li> 
                        <li className="nav-item">
                            <NavLink to="/">Quotes</NavLink>
                        </li> 
                        <li className="nav-item subs">
                            <button 
                                className={`menu-button `} 
                                onClick={() => setOpenModal(!openModal)}>
                                SUBSCRIBE
                            </button>
                        </li> 
                        <li className={`nav-item ${mobileView && 'hide'}`}>
                            <button className={`menu-button `} onClick={() => setOpenSearch(!openSearch)}><FaSearch /></button>
                        </li> 
                        
                    </div>
                </ul>
            </div>
            {/* If the values of openSearch or openModal changes, the right components are rendered */}
            {
                openSearch ? <SearchForm searchPosts={searchPosts} handleSubmit={handleSubmit}/> : ''
            }
            {
                openModal ? <SubscribeForm setOpenModal={setOpenModal} /> : ''
            }
        </nav>
        </>
    )
}

export default Navbar;
