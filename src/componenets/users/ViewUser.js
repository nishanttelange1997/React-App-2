import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link,useParams} from "react-router-dom";
import {FcUpLeft } from "react-icons/fc";
import { FaUserEdit } from "react-icons/fa";

function ViewUser() {
const [users,setusers]=useState({});
let {id}=useParams();

useEffect(()=>
{
loadUsers();
},[])

const loadUsers=async ()=>
{
    const result= await axios.get(`http://localhost:3004/users/${id}`);
  setusers(result.data);
}
  return (
    <div className='container'>
    <div className='py-6 '><h1 className='text-center m-3'>HOME PAGE</h1>
    <table className="table border shadow">

  <thead className='table-dark'>
    <tr>
    <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th >Action</th>
    </tr>
  </thead>
  <tbody>
 
<tr>
<td>{id}</td>
<td>{users.name}</td>
<td>{users.username}</td>
<td>{users.email}</td>

<td>

     
    <Link className="btn btn-outline-primary btn-sm mx-2" to="/"><FcUpLeft/></Link>
 
    <Link className="btn btn-outline-warning btn-sm mx-2" to={`/users/edit/${users.id}`}><FaUserEdit/></Link>
 
</td> 

</tr>
  </tbody>
  </table>
  </div> 
  </div>

  )
}

export default ViewUser