import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Home from './page/Home';
// <!-- Animate.css -->
//   <link rel="stylesheet" href="assets/css/animate.css">
//   <!-- Icomoon Icon Fonts-->
//   <link rel="stylesheet" href="assets/css/icomoon.css">
//   <!-- Bootstrap  -->
//   <link rel="stylesheet" href="assets/css/bootstrap.css">

//   <!-- Theme style  -->
//   <link rel="stylesheet" href="assets/css/style.css"></link>
import './assets/css/animate.css'
import './assets/css/icomoon.css'
import './assets/css/bootstrap.css'
import './assets/css/style.css'

function App() {
  const [data,setData]=useState({
    name:'',
    age:'',
    email:''
  })
  const {name,age,email}=data
  const handleChange=(e)=>{
    setData({
      ...data,[e.target.name]:e.target.value
    })
  }
  const handleSubmit=()=>{
    let nData=JSON.stringify(data)
    // axios.post('http://localhost:3000/')
    let n=fetch('http://localhost:3000/',{
      headers:'test',
      body:nData
    }).then((req,res)=>{
      
    })
  }
  console.log(data)
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
