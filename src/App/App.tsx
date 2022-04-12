import React, { useEffect } from 'react';
//import logo from './logo.svg';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import LoginForm from '../components/LoginForm';
import Clients from '../Clients/Clients';


const App: React.FC = ()=>{
 
  return <div className="App">
      <BrowserRouter>
          <nav>
              <Link to="dashboard">Dashboard</Link>
              <Link to="clients">Clients</Link>
              <Link to="appointments">Appointments</Link>
              <Link to="invoices">Invoices</Link>
              <Link to="logout">Logout</Link>
          </nav>
         <Routes>
             <Route path="/login" element ={<LoginForm />} />
             <Route path="/clients" element ={<Clients clients={[]} />} />
         </Routes>
      </BrowserRouter>

  </div>;
} 

export default App;



