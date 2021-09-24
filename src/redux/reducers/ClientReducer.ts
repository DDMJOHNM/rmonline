import {createSlice, PayloadAction } from '@reduxjs/toolkit'; 
import { ClientRequest } from 'http';
import type {RootState} from '../store';


interface  Client {
    id: number
    firstName: string    
    lastName: string
    streetAddress: string
    city: string
    country:string
    status:number

}

interface ClientState {
    clients: Client[] 
}

const initialState: ClientState = {clients:[]}   
   

export const ClientSlice = createSlice({//async thunk
    name:'clients',
    initialState,
    reducers:{
        getClients:state => {            
             state.clients=[
                 {id:0,firstName:"John", lastName:"Mason",streetAddress:"1/31 Pakira Road",city:"Auckland",country:"New Zealand", status:1},
                 {id:1,firstName:"John", lastName:"Mason",streetAddress:"1/31 Pakira Road",city:"Auckland",country:"New Zealand", status:1},
                 {id:2,firstName:"John", lastName:"Mason",streetAddress:"1/31 Pakira Road",city:"Auckland",country:"New Zealand", status:1}
             ];                                     
        }  
    }
}) 

export const {getClients} =  ClientSlice.actions
export default ClientSlice.reducer

