import React, { useState } from 'react';
import './App.css';
import StudentFrom from './components/StudentFrom';
import StudentSection from './components/StudentSection';
const App = () => {

  
  const [students, setStudents] = useState([
         {
           id:1 ,
           name:"md atik hasan"
         }
       ]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null)
  const [studentName, setStudentName] = useState("");




  return (
    <div className='App'>
      
        <StudentFrom 
        studentName={studentName}
        setStudentName={setStudentName}
        students={students}
        setStudents={setStudents}
        editMode = {editMode}
        setEditMode={setEditMode}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
        />

        <StudentSection 
        
         
         students={students}
         setStudents={setStudents}
         editMode = {editMode}
         setEditMode={setEditMode}
         editableStudent={editableStudent}
         setEditableStudent={setEditableStudent}
         
        />

     
    
    </div>
  )
}

export default App