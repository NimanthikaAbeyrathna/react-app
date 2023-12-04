import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import LogIn from "./pages/Log-in/Log-in";
import SignIn from "./pages/Sign-in/Sign-in";
import Account from "./pages/Account/Account";
import FixDepositAccount from "./pages/Fix-deposit-account/Fix-deposit-account";
import SavingsAccount from "./pages/Savings-account/Savings-account";
import LoanAccount from "./pages/Loan-account/Loan-account";
import Transaction from "./pages/Transaction/Transaction";
import Navigation from "./components/Navigation/Navigation";
import React from "react";

function App() {
  return (
      <Router>

        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<LogIn/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/fixdeposit" element={<FixDepositAccount/>}/>
          <Route path="/saving" element={<SavingsAccount/>}/>
          <Route path="/loan" element={<LoanAccount/>}/>
          <Route path="/transaction" element={<Transaction/>}/>
        </Routes>
      </Router>
  );
}

export default App;
