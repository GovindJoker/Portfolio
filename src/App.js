import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Home from './page/Home';

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
