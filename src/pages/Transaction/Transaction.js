import React,{useState} from 'react';
import './Transaction.css';
import Navigation from "../../components/Navigation/Navigation";
import {Link} from "react-router-dom";
import axios from "axios";

export default function Transaction() {

    const [accountNumber, setAccountNumber] = useState('');
    const [transactionType, setTransactionType] = useState('DEPOSIT'); // Default value
    const [amount, setAmount] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();

        const javascriptDate = new Date();

        const transaction = {
            transactionType,
            amount,
            timestamp: javascriptDate.toISOString(),
            accountId: accountNumber,
        };

        axios.post(`${process.env.REACT_APP_API_URL}/transaction`, transaction)
            .then(() => {
                alert('Successful');
                setTransactionType('');
                setAmount('');
                setAccountNumber('');
            })
            .catch((error) => {
                console.log(error);
                alert(`Error: ${error.message || 'An error occurred'}`);
            });
    };

    return (
        <div className='container-fluid'>
            <div className='row'>
                <header className='d-flex justify-content-between align-items-center p-1'>
                    <h1 className='text-white'>Transaction</h1>
                    <button id='logOutBtn' className='btn btn-danger'><Link className='text-black text-decoration-none' to="/">Log out</Link></button>
                </header>
                <Navigation/>
                <div className="col-md-10">
                    <div className="container">
                        <h2>Transaction Operations</h2>
                        <form onSubmit={onFormSubmit}>
                            <label htmlFor="accountNumber">Account Number:</label>
                            <input
                                type="text"
                                id="accountNumber"
                                value={accountNumber}
                                onChange={(e) => setAccountNumber(e.target.value)}
                                required
                            />
                            <br />

                            <label htmlFor="transactionType">Transaction Type:</label>
                            <select
                                id="transactionType"
                                value={transactionType}
                                onChange={(e) => setTransactionType(e.target.value)}
                                required
                            >
                                <option value="DEPOSIT">Deposit</option>
                                <option value="WITHDRAWAL">Withdraw</option>
                            </select>
                            <br />

                            <label htmlFor="amount">Amount:</label>
                            <input
                                type="number"
                                id="amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                required
                            />
                            <br />

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
}


