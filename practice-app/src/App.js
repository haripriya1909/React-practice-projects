import {useEffect, useState} from "react";
import './App.css';
// fetch returns a Promise, you need to use 
// async/await or handle it using .then() to 
// wait for the response before trying to
//  access the JSON data. 
function App() {  
  const [advice,setAdvice] = useState("");
  const [count , setCount] = useState(0);  //ek aur state lekr
  //  jiski initial value 0 h suko baar 
  // baar increment krrhu using setCount
async function data()
{
  
  var res = await fetch("https://api.adviceslip.com/advice");
  var ans =await res.json();
  setAdvice(ans.slip.advice);
  setCount(c=>c+1);  //updating count jo ki har baar badhega
}

useEffect(function()
{
  data();
},[]);
  return (
    <>
    <h1>{advice}</h1>
    <button onClick={data}>click to get advice!</button>
    <p>the number of times advice is being printed is:- {count}</p>
    </>
  ); 
  }
export default App;


