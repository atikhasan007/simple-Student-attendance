import React, { useState } from 'react';
import './App.css';
import StudentFrom from './components/StudentFrom';
const App = () => {


  const [students, setStudents] = useState([
    {
      id:1 ,
      name:"md atik hasan"
    }
  ]);

  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null)

  //derived State 
  const presentStudentList = students.filter((item)=> item.isPresent === true, 
);

  






 

  const editHandler = (student) => {
     setEditMode(true);
     setEditableStudent(student);
  

  }


  const removeHandler = (studentId) =>{
    const updateStudentList = students.filter((student)=>student.id!==studentId);
    setStudents(updateStudentList);

  }


  const makePresentHandler = (student) => {
    if(student.isPresent !== undefined) {
      return alert(
        `this student is already in the ${
        student.isPresent===true ? "Present List":"Absent List "
        }`)

    };

    const updateStudentList = students.map((item)=>{
      if(item.id === student.id) {
        return { ...item, isPresent:true};
      }
      return item;
    });
   setStudents(updateStudentList);
  };
  const makeAbsentHandler = (student) => {
    if(student.isPresent !== undefined) {
      return alert(
        `this student is already in the ${
        student.isPresent===true ? "Present List":"Absent List "
        }`)

    };

    const updateStudentList = students.map((item)=>{
      if(item.id === student.id) {
        return { ...item, isPresent:false};
      }
      return item;
    });
   setStudents(updateStudentList);
  };

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
       
       <div className=' list all-students'>
        <h2>All Students</h2>
        <ul>
          {
            students.map((student)=>(
              <li key={student.id}>
                <span>
                  {student.name}
                  <button onClick={()=>editHandler(student)}>Edit</button>
                  <button onClick={()=> removeHandler(student.id)}>Delete</button>
                  <button onClick={()=> makePresentHandler(student)} >Make Present</button>
                  <button onClick={()=> makeAbsentHandler(student)}>Make Absent</button>
                </span>
              </li>
            ))
          }
        </ul>
       </div>
       <div className='list present-students'>
           <h2>Present Students</h2>
           {presentStudentList
           .map((student)=>(
            <li key={student.id}>
              <span>{student.name}</span>
              <button onClick={()=>toggleList(student)}>Accidentally Added</button>
            </li>
           ))
           }
        </div>
       <div className='list absent-students'>
          <h2>Absent Students</h2>
          {students.filter((item)=>item.isPresent===false).
          map((student)=>(
            <li key={student.id}>
              <span>{student.name}</span>
              <button onClick={()=> toggleList(student)}>Accidentally Added</button>

            </li>
          ))
          }
       </div>
    
      </div>
    
    </div>
  )
}

export default App