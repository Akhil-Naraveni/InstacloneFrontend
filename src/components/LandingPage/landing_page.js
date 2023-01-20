import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PostView from '../Postview/PostView';
import "./landing_page.css"

const Landing_page = () => {
    return (
        <>
            <section id='container'>
                <section id='left-aside'>
                    <img id='landingImage' src='https://c8.alamy.com/comp/HN7DBW/boys-and-girls-with-the-word-welcome-HN7DBW.jpg' />
                </section>
                <section id='right-aside'>
                    
                    <h2 id='title'> 10X TEAM</h2>
                    <div> <Link to={'/postview'}><button>Enter</button></Link> </div>
                    
                </section>
            </section>




        </>

    )
}
export default Landing_page;
