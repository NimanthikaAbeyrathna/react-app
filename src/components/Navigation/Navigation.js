import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Navigation() {
    return (
        // <div className='container-fluid'>
        //     <div className='row'>
        <div className='bg-dark col-auto col-md-2 min-vh-100'>
            <ul className='nav nav-pills flex-column'>
                <li className='nav-item text-white fs-6'>
                    <Link className='nav-link text-white text-decoration-none' to="/home">Home</Link>
                </li>
                <li className='nav-item text-white fs-6'>
                    <Link className='nav-link text-white text-decoration-none' to="/account">Account</Link>
                </li>
                <li className='nav-item text-white fs-6'>
                    <Link className='nav-link text-white text-decoration-none' to="/fixdeposit">Fix-Deposit-Account</Link>
                </li>
                <li className='nav-item text-white fs-6'>
                    <Link className='nav-link text-white text-decoration-none' to="/saving">Savings-Account</Link>
                </li>
                <li className='nav-item text-white fs-6'>
                    <Link className='nav-link text-white text-decoration-none' to="/loan">Loan-Account</Link>
                </li>
                <li className='nav-item text-white fs-6'>
                    <Link className='nav-link text-white text-decoration-none' to="/transaction">Transaction</Link>
                </li>
            </ul>
        </div>

        // {/*        <div className="col-md-10">*/}
        //
        // {/*            <p>ujbh</p>*/}
        // {/*        </div>*/}
        //
        //     </div>
        //
        // </div>
    );
}

