import React, { useEffect } from 'react';
//import logo from './logo.svg';
import LoginForm from '../components/LoginForm';
import ClientList from '../Clients/Clients';


const App: React.FC = ()=>{
 
  return <div className="App">
    {/* <LoginForm /> */}
    <ClientList clients={[]}/>
  </div>;
} 

export default App;

//todo: routing 
//potential backend call



