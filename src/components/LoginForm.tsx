import React from 'react';

interface Props {}

const LoginForm : React.FC<{}> = () => {
    return <form className="login-form">
        <h1 className="login-form__heading">Rachael Mason Online Login</h1>
        <div className="login-form__group">
            <label htmlFor="username" className="login-form__label">Email</label>
            <input type="email" className="login-form__email" />
        </div>   
        <div className="login-form__group">
            <label htmlFor="password" className="login-form__label">Password</label>
            <input type="password" className="login-form__password" />
        </div>   
        <input type="submit" className="login-form__submit" value="Login" />    
    </form>
}

export default LoginForm;