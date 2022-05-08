import {createSlice,  createAsyncThunk } from '@reduxjs/toolkit'; 

interface  LoginE {
    loggedin :boolean
    loading:boolean
    token: string  
    error: string|null|undefined    
}

interface LoginState {
    login: LoginE      
}
   
const initialState: LoginState = { login:{ loggedin:false, token:'', loading:false, error:null}}  

export const Login = createAsyncThunk(
    'login',
    async (payload: object,{rejectWithValue}) => {     
        const data = payload;
        try{
        const response = await fetch(`http://127.0.0.1:8000/login`,{ mode:'cors' ,method: 'POST',  headers: {
                'Content-Type': 'application/json'}, body:JSON.stringify(data)}).then(          
            (data) => data.json()
        )      
           console.log(document.cookie);
           document.cookie = response.token;         
           return response;
        } catch (err){
           return rejectWithValue(err);
        }
    },
)

export const getCSRF = createAsyncThunk(
    'getCSRF',
    async (payload: object,{rejectWithValue}) => {     
        const data = payload;
        try{
        const response = await fetch(`http://127.0.0.1:8000/sanctum/csrf-cookie`,{ mode:'cors' ,method: 'GET',  headers: {
                'Content-Type': 'application/json'}, body:JSON.stringify(data)}).then(          
            (data) => data.json()
        )      
           return response;
        } catch (err){
           return rejectWithValue(err);
        }
    },
)

export const LoginSlice  = createSlice({//async thunk
    name:'login',
    initialState,
    reducers:{      
     
    }, 
    extraReducers: (builder) =>{
        builder.addCase(Login.pending,(state,action)=>{           
            state.login.loading = false;
            state.login.loading= true;
        })
        builder.addCase(Login.fulfilled,(state,action)=>{
           
            state.login = action.payload;
            state.login.loading = false;
            state.login.loggedin=true;       
            
        })
        builder.addCase(Login.rejected,(state,action)=>{
            state.login = {loggedin: false, token:'',loading:false, error:action.error.message};           
        })
    }
    
}) 


export default LoginSlice.reducer

