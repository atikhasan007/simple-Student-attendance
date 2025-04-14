import React from 'react';
import './App.css';
import StudentFrom from './components/StudentFrom';
import StudentSection from './components/StudentSection';
import StudentProvider from './context/Student';

const App = () => {
  return (
    <StudentProvider>
         <div className='App'> 
        <StudentFrom />
        <StudentSection />
    </div>
    </StudentProvider>
   
  )
}

export default App