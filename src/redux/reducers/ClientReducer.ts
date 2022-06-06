import {createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'; 
import { ClientRequest } from 'http';
import type {RootState} from '../store';

interface  Client {
    id: number
    firstName: string    
    lastName: string
    street: string
    city: string
    country:string
    status:number     
}


interface ClientState {
    clients: Client[]     
    loading:boolean   
    error: string|null|undefined
    
}
        
const initialState: ClientState = {clients:[], loading:false, error:null}  

export const GetClients = createAsyncThunk(
    'clients/getClients',
    async (clients,{rejectWithValue}) => {
        try{         
        const response = await fetch(`http://127.0.0.1:8000/clients`,{ mode:'cors' ,method: 'GET',headers:{'Content-Type': 'application/json', Authorization:'Bearer ' + document.cookie}}).then(          
            (data) => data.json()
        )             
          return response
        } catch (err){
           return rejectWithValue(err);
        }
    },
)


  
export const Add = createAsyncThunk(
    'add',
    async (payload: object,{rejectWithValue})  => {
       
        const data = payload;
        try{         
            const response = await fetch(`http://127.0.0.1:8000/add`,{ mode:'cors' ,method: 'POST',  headers: {
                'Content-Type': 'application/json',Authorization:'Bearer ' + document.cookie}, body:JSON.stringify(data)}).then(          
            (data) => data.json()
        )                       
          return response
        } catch (err){
            console.log(err + " errorr", data);
           return rejectWithValue(err);
        }
    },
)

export const ClientSlice  = createSlice({//async thunk
    name:'clients',
    initialState,
    reducers:{      
         //getClients:state => {            
            //  state.clients=[
            //      {id:0,firstName:"John", lastName:"Mason",streetAddress:"1/31 Pakira Road",city:"Auckland",country:"New Zealand", status:1},
            //      {id:1,firstName:"Rachael", lastName:"Mason",streetAddress:"1/31 Pakira Road",city:"Auckland",country:"New Zealand", status:1},
            //      {id:2,firstName:"Rosie", lastName:"Mason",streetAddress:"1/31 Pakira Road",city:"Auckland",country:"New Zealand", status:1},
            //      {id:3,firstName:"Morepork", lastName:"Mason",streetAddress:"1/31 Pakira Road",city:"Auckland",country:"New Zealand", status:1},
            //      {id:4,firstName:"Squitidichty", lastName:"Mason",streetAddress:"1/31 Pakira Road",city:"Auckland",country:"New Zealand", status:1}      
            //     ];                                     
        //}  
    }, 
    extraReducers: (builder) =>{
        builder.addCase(GetClients.pending,(state,action)=>{           
            state.clients = [];
            state.loading= true;
        })
        builder.addCase(GetClients.fulfilled,(state,action)=>{
            state.clients = action.payload;
            state.loading= false;
        })
        builder.addCase(GetClients.rejected,(state,action)=>{
            state.error = action.error.message;
            state.loading= false;
        })
    }
    
}) 


export default ClientSlice.reducer

