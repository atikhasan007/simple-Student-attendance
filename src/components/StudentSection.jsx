import React from 'react'
import AbsentStudentList from "./AbsentStudentList";
import AllStudentList from "./AllStudentList";
import PresentStudentList from "./PresentStudentList";
import { useContext } from 'react';
import { StudentCtx } from '../context/Student';


const StudentSection = () => {

const  {
    students, 
    toggleList} = useContext(StudentCtx);


  return (
    <div className='student-section'>
       
    {/* list of all students */}
    <AllStudentList/>

{/* present list */}
   <PresentStudentList />
     {/* absent list */}
     <AbsentStudentList />
  
    </div>
  )
}

export default StudentSection
