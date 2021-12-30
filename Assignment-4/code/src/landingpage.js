import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Postview from './Postview';
import './landing_page.css'
import tech from './img/tech.jpg';

function Landingpage(){
    return(
        <Router>
        <div className="main_container">
            <div className="container_content">
                <div className="first_content">
                    <img className="img_content" src={tech} alt=""/>
                </div>
                <div className="socond_content">
                    <h1>10x Team 04</h1>
                    <Link className='btn' to={'/Postview'}><div className="button">Enter</div></Link>
                </div>
            </div>
        </div>
        
                <div className="routes_con">
                <Routes>
                    <Route path='/Postview' element={<Postview />}></Route>
                </Routes>
                </div>       
    
        </Router>
    );
}
export default Landingpage;
