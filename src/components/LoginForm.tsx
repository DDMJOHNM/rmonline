import React,{useState, useEffect} from 'react';
import {connect,ConnectedProps, useSelector} from 'react-redux';
import { RootState } from '../redux/store';
import {getCSRF, Login} from '../redux/reducers/LoginReducer';
import { useAppDispatch } from '../redux/hooks';
import { BrowserRouter as Router, Route, useNavigate} from "react-router-dom";
import {SnackBar} from "./SnackBar";


const mapState = (state: RootState) => ({
    Login: state.login,
  })
  
const mapDispatch = {
GetClients: () => ({ type: 'client/getClients' }),
}

interface User {
    email? :string;
    password? :string;
}

interface LoginState{
    login: string|undefined;
    loading: boolean;
    loggedin: boolean;
    token: string|undefined;
    error:string|undefined;
}

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux {
    login? : LoginState  
}

const LoginForm  = (props:Props) => {

    const [user, setUser] = React.useState<User | null>(null);   
    const dispatch = useAppDispatch();    
    const onChange = (e:React.FormEvent<HTMLInputElement>):void=>{
        setUser({[e.currentTarget.name]:e.currentTarget.value})
    }           

    const loading : boolean | undefined = props.Login.login.loading;
    const loggedin : boolean | undefined = props.Login.login.loggedin
    let navigate = useNavigate();

    if(loading) return <SnackBar message={"Loading"} color={"grey"}/>;

    if (loggedin) {
        navigate("/clients");
    }
 
    return (
    <div className='container'>        
        <form className="login-form" onSubmit={
            (e:React.SyntheticEvent)=>{
                e.preventDefault();
                const target = e.target as typeof e.target &{
                    email:{value:string}
                    password:{value:string}                
                };             
                dispatch(getCSRF({}));
                dispatch(Login({email:target.email.value,password:target.password.value}));
                    
        }
        }>
            <h1 className="login-form__heading">Rachael Mason Online Login</h1>
            {/* {props.Login.login.loggedin === true ? "true" :"false"}  */}
            <div className="login-form__group">
                <label htmlFor="username" className="login-form__label">Email</label>
                <input 
                    type="email"
                    name="email"
                    className="login-form__email" 
                    value={user? user.email : "" } 
                    onChange={onChange}
                    />
            </div>   
            <div className="login-form__group">
                <label htmlFor="password" className="login-form__label">Password</label>
                <input 
                    type="password" 
                    name="password"
                    className="login-form__password" 
                    value={user? user.password : "" } 
                    onChange={onChange}
                    />
            </div>   
            <input type="submit" className="login-form__submit" value="Login" />    
        </form> 
    </div>);

}
  
export default connector(LoginForm);


//TODO: 
//JEST
//CSS grid 
//Replace logged in state with persistant cookie 
//Login spinner
//Return login error from backend aand implement snack bar
//Navigation menu and logout
//persist loggedin state
//hook up index page