import React, { useState } from 'react';
import './App.css';
import StudentFrom from './components/StudentFrom';
import AllStudentList from './components/AllStudentList'
import PresentStudentList from './components/PresentStudentList';
import AbsentStudentList from './components/AbsentStudentList';
const App = () => {

  
  const [students, setStudents] = useState([
         {
           id:1 ,
           name:"md atik hasan"
         }
       ]);
 
 

  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null)




  
 const toggleList = (student) =>{

  const updateStudentList = students.map((item)=>{
    if(item.id===student.id) {
      return {...item, isPresent: !item.isPresent};
    }
    return item;
  })
  setStudents(updateStudentList);

 }

  return (
    <div className='App'>
      
        <StudentFrom 
        students={students}
        setStudents={setStudents}
        editMode = {editMode}
        setEditMode={setEditMode}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
        />

      <div className='student-section'>
       
      {/* list of all students */}
      <AllStudentList
  students={students}
  setStudents={setStudents}
  setEditMode={setEditMode}
  setEditableStudent={setEditableStudent}
  
/>

{/* present list */}
     <PresentStudentList 
     
     students = {students}
     toggleList = {toggleList}
     />
       {/* absent list */}
       <AbsentStudentList 
       students = {students}
       toggleList = {toggleList}
       />
    
      </div>
    
    </div>
  )
}

export default App