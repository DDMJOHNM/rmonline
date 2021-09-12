import React,{useState} from 'react';

interface User {
    email? :string;
    password? :string;
}

const LoginForm : React.FC<User> = () => {

    const [user, setUser] = React.useState<User | null>(null);   
    
    const onChange = (e:React.FormEvent<HTMLInputElement>):void=>{
        setUser({[e.currentTarget.name]:e.currentTarget.value})
    }

    return (
    <form className="login-form" onSubmit={
        (e:React.SyntheticEvent)=>{
            e.preventDefault();
            const target = e.target as typeof e.target &{
                email:{value:string}
                password:{value:string}                
            }; 
            //todo: ajax call or dispatch here 
            //todo: snack bar and ajax call loader
            console.log(target.email.value,target.password.value);

        }
    }>
        <h1 className="login-form__heading">Rachael Mason Online Login</h1>
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
    );
}

export default LoginForm;