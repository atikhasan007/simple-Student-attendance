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



  switch(action){
    case  "increase" :
      return state + 1;
    case "decrease" :
      return state - 1;

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

      <button onClick={()=>dispatch("increase")}>increase by 1</button>
      <button onClick={()=>dispatch("decrease")}>decrease by 1</button>
    </div>
  )
}

export default App