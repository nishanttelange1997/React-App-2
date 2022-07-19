
import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function AddUser() {
    const navigate=useNavigate(); 
    const[user,setUser]=useState({
  name:"",
  username:"",
  age:"",
  email:"",
  phone:"",
  website:""

    });

    const onInputChange=e=>
    {
     setUser({...user,[e.target.name]:e.target.value});
    }

 const onSubmit =async (e)=>
 {   e.preventDefault();
    await axios.post("http://localhost:3004/users",user);
    navigate("/");
 }

  return (
<div className="container">
<div className="w-75 mx-auto shadow p-5">
    <h2 className="text-center mb-4">ADD USER</h2>

    <form onSubmit={(e)=>onSubmit(e)}>
  <div className="from-group">
      <input type="text"
      className="form-control form-control-sm "
      placeholder="Enter Your Name"
      name="name"
      value={user.name}
      onChange={e=>onInputChange(e)}
      />
      </div>
      <br />
      <div className="from-group">
      <input type="text"
      className="form-control form-control-sm "
      placeholder="Enter Your User-Name"
      name="username"
      value={user.username}
      onChange={e=>onInputChange(e)}
      />
      </div>
      <br />
      <div className="from-group">
      <input type="number"
      className="form-control form-control-sm "
      placeholder="Enter Your Age"
      name="age"
      value={user.age}
      onChange={e=>onInputChange(e)}
      />
      </div>
      <br />

      <div className="from-group">
      <input type="email"
      className="form-control form-control-sm "
      placeholder="Enter Your Email-Id"
      name="email"
      value={user.email}
      onChange={e=>onInputChange(e)}
      />
      </div>
      <br />
      <div className="from-group">
      <input type="text"
      className="form-control form-control-sm "
      placeholder="Enter Your Phone Number"
      name="phone"
      value={user.phone}
      onChange={e=>onInputChange(e)}
      />
      </div>
      <br />
      <div className="from-group">
      <input type="text"
      className="form-control form-control-sm "
      placeholder="Enter Your website Name"
      name="website"
      value={user.website}
      onChange={e=>onInputChange(e)}
      />
      </div>
      <br />
     
      <button className=" btn btn-success mx-auto d-block">ADD-USER</button>

  

      

</form>


</div>
</div>
  )
}

export default AddUser