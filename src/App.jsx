import React from 'react';
import './App.css';
import StudentFrom from './components/StudentFrom';
import StudentSection from './components/StudentSection';
import StudentProvider from './context/Student';

import { useReducer } from 'react';

const counterReducer = (state, action)=>{
  // if(action === "increase"){
  //    return state + 1;
  // }
  // else{
  //   return state - 1;
  // }



  switch(action.type){
    case  "increase" : {
      return state + action.payload;
    }
    case "decrease" : {
      return state - action.payload;


    }
      
  }
}

const App = () => {
  // return (
  //   <StudentProvider>
  //        <div className='App'> 
  //       <StudentFrom />
  //       <StudentSection />
  //   </div>
  //   </StudentProvider>
   
  // )



  const [counter, dispatch] = useReducer( counterReducer , 10);



  return (
    <div className='App'>
      <p>the value of counter is {counter}</p>

      <button onClick={()=>dispatch({type:"increase", payload: 10})}>increase by 10</button>
      <button onClick={()=>dispatch({type:"decrease", payload:5})}>decrease by 5</button>
    </div>
  )
}

export default App