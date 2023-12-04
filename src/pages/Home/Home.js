import React from 'react';
import './Home.css';
import Navigation from "../../components/Navigation/Navigation";
import homeImage from '../../assets/images/home.jpg';
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <header className='d-flex justify-content-between align-items-center p-1'>
                    <h1 className='text-white'>Finance Management System</h1>
                    <button id='logOutBtn' className='btn btn-danger'><Link className='text-black text-decoration-none' to="/">Log out</Link></button>
                </header>
               <Navigation/>
                <div id='imageWrapper' className="col-md-10">
                    <img src={homeImage} alt="home image" />
                </div>

            </div>

        </div>
    );
}


