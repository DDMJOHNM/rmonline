import React,{useEffect} from 'react';
import {connect,ConnectedProps} from 'react-redux';
import { RootState } from '../redux/store';
import {ClientSlice} from '../redux/reducers/ClientReducer';
import {getClients} from '../redux/reducers/ClientReducer';
import { useAppSelector, useAppDispatch } from '../redux/hooks';



const mapState = (state: RootState) => ({
  practise: state.practise,
})

const mapDispatch = {
  getClients: () => ({ type: 'client/getClients' }),
}


const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

interface  Client {
  id: number
  firstName: string    
  lastName: string
  streetAddress: string
  city: string
  country:string
  status:number

}
interface Props extends PropsFromRedux {
  clients : Array<Client>
}



const ClientList  = (props:Props)=>{

  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(getClients())
  },[])

  return <div className="App">
       
    <table className="client-list">
      <thead>
      <tr>
        <th className="client-list__th">FirstName</th>
        <th className="client-list__th">LastName</th>
        <th className="client-list__th">Street Address</th>
        <th className="client-list__th">City</th>
        <th className="client-list__th">Country</th>
        <th className="client-list__th">Status</th>
      </tr>
     </thead>
     <tbody>
      {props.practise.clients.map((c,i)=>{
         return (
            <tr key={i}>
              <td>{c.firstName}</td>
              <td>{c.lastName}</td>
              <td>{c.streetAddress}</td>
              <td>{c.city}</td>
              <td>{c.country}</td>
              <td>{c.status}</td>
            </tr>
          );
        })}
     </tbody>
    </table>    
  </div>;
} 

export default connector(ClientList);

//TODO: 
//Routing
//JEST
//CSS grid 

//Exposes Helper Type Connected Props
//it can extract types of mapStateToProps and mapDispatchToProps from its first function
//This means that if you split the connect call into two steps, all of the "props from Redux" 
//can be inferred automatically without having to write them by hand



