import React from "react";
import "./App.css"
import Home from "./componenets/pages/Home";
import Contact from "./componenets/pages/Contact";
import About from "./componenets/pages/About";
import Navbar from "./componenets/layout/Navbar";
import NotFound from "./componenets/pages/NotFound";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AddUser from "./componenets/users/AddUser";
import EditUser from "./componenets/users/EditUser";
import ViewUser from "./componenets/users/ViewUser";

function App() {
  return (
    <>
<div className="App">
<BrowserRouter>
<Navbar/>
<Routes>
<Route exact path="/" element={<Home/>}></Route>
<Route exact path="/about" element={<About/>}></Route>
<Route exact path="/contact" element={<Contact/>}></Route>
<Route exact path="/users/add" element={<AddUser/>}></Route>
<Route exact path="/users/view/:id" element={<ViewUser/>}></Route>
<Route exact path="/users/edit/:id" element={<EditUser/>}></Route>
<Route  path="*" element={<NotFound/>}></Route>
</Routes>

</BrowserRouter>
</div>
    

    </>
  );
}

export default App;
