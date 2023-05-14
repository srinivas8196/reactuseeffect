import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [ price, newprice] = useState(0);
  const [name , setname] = useState('loading..')
  const [email, setEmail]= useState("loading..")
  const [ gender, setgender] = useState('Loading..')
  // setTimeout(()=>{ console.log ("Hello world"),3000} )
  
  useEffect(
    ()=>{
     axios.get('https://randomuser.me/api/').then(res => {
      console.log(res.data.results[0])
      setname(res.data.results[0].name.first)
      setEmail(res.data.results[0].email)
      setgender(res.data.results[0].gender)
     })
    }, [])
  
//   const increment =()=>{
// setCount(count+1)
//   }
  
  
  return (
    <div className="App">
      count :{count} <br></br>
      <button onClick={() => {setCount (count+1)}}> + </button>
      <br></br>
      price: { price}
      <button onClick={()=> {newprice(price+1)}}> price+ </button>
    <br></br>
    Name : {name}
    <br></br>
    E-mail : {email}
    <br></br>
    Gender : {gender}
    </div>
  );
}

export default App;
