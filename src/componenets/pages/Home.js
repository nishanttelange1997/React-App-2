import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
import { FcReading,FcDeleteDatabase } from "react-icons/fc";
import { FaUserEdit } from "react-icons/fa";

function Home() {
const [users,setusers]=useState([]);;

useEffect(()=>
{
loadUsers();
},[])

const loadUsers=async ()=>
{
    const result= await axios.get("http://localhost:3004/users");
  setusers(result.data.reverse());
}

const deleteUser= async (id)=>
{
  await axios.delete(`http://localhost:3004/users/${id}`);
  loadUsers();
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
 {
users.map((data,i)=>(
<tr>
<td>{i+1}</td>
<td>{data.name}</td>
<td>{data.username}</td>
<td>{data.email}</td>

<td>
    <Link className="btn btn-outline-success btn-sm mx-1" to={`users/view/${data.id}`}><FcReading/></Link>
    <Link className="btn btn-outline-warning btn-sm mx-2" to={`users/edit/${data.id}`}><FaUserEdit/></Link>
    <Link className="btn btn-outline-danger btn-sm" to="" onClick={()=>deleteUser(data.id)}><FcDeleteDatabase/></Link>
</td> 

</tr>

))

 }
  </tbody>
  </table>
  </div> 
  </div>

  )
}

export default Home