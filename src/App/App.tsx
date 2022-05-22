import React, { useEffect } from 'react';
//import logo from './logo.svg';
import {Link, Routes, Route, useNavigate} from "react-router-dom";
import LoginForm from '../components/LoginForm';
import Clients from '../Clients/Clients';
import Client from '../Clients/Client';
import {connect,ConnectedProps, useSelector} from 'react-redux';
import { RootState } from '../redux/store';
import {getCSRF, Login} from '../redux/reducers/LoginReducer';
import { useAppDispatch } from '../redux/hooks';


const mapState = (state: RootState) => ({Login: state.login})
const mapDispatch = {}   
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>

interface  LoginE {
    loggedin :boolean
    loading:boolean
    token: string  
    error: string|null|undefined    
}

interface LoginState {
    login: LoginE      
}

interface Props extends PropsFromRedux {
    login? : LoginState  
}


//todo: add logged in state and redirect hide menu bar css for menu bar
const App = (props: Props)=>{
const loading : boolean | undefined = props.Login.login.loading;
const loggedin : boolean | undefined = document.cookie? true: false;

const navigate = useNavigate();

  React.useEffect(() => {
    if (!loggedin) {
      navigate('/login');
    }
  },[loggedin]);

return <div className="App">          
         {loggedin &&
           <nav className="global-nav"> 
              <Link className="global-nav__a" to="/">Rachael Mason</Link>
              <Link className="global-nav__a" to="dashboard">Dashboard</Link>
              <Link className="global-nav__a" to="clients">Clients</Link>
              <Link className="global-nav__a" to="appointments">Appointments</Link>
              <Link className="global-nav__a" to="invoices">Invoices</Link>
              <Link className="global-nav__a" to="logout">Logout</Link>
            </nav>       
        }

         <Routes>
             <Route path="/login" element ={<LoginForm />} />
             <Route path="/clients" element ={<Clients clients={[]} />} />
             <Route path="/clients/client/:id" element ={<Client client={{}} />} />
         </Routes>   
  </div>;
} 

export default connector(App);



function useHistory() {
    throw new Error('Function not implemented.');
}

