import React, { useEffect } from 'react';
//import logo from './logo.svg';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import LoginForm from '../components/LoginForm';
import ClientList from '../Clients/Clients';


const App: React.FC = ()=>{
 
  return <div className="App">
      <BrowserRouter>
          <nav>
              <Link to="clients">Clients</Link>
          </nav>
         <Routes>
             <Route path="/login" element ={<LoginForm />} />
             <Route path="/clients" element ={<ClientList clients={[]} />} />
         </Routes>
      </BrowserRouter>

  </div>;
} 

export default App;

//todo: routing 
//potential backend call



