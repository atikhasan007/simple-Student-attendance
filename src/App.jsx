import React, { useState } from 'react'
import './App.css'
const App = () => {

  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([
    {
      id:1 ,
      name:"md atik hasan"
    }
  ]);

  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null)


  const submitHandler = (e)=>{
    e.preventDefault();
    if(studentName.trim() === ""){
      return alert(`Please Provide a valid name`)
    }


    editMode? updateHandler() : createHandler();

  }

  const changeNameHandler = (e) =>{
    setStudentName(e.target.value)

  }


  const createHandler = () =>{
    const newStudent = {
      id : Date.now() + "",
      name : studentName,
      isPresent: undefined,

    };

    setStudents([...students, newStudent]);
    setStudentName("");

  }

  const editHandler = (student) => {
     setEditMode(true);
     setEditableStudent(student);
     setStudentName(student.name);

  }

  const updateHandler = () =>{

    const updateStudentList = students.map(student =>{
       if(student.id === editableStudent.id){
        return {...student , name:studentName};
       }

       return student;
    })

    setStudents(updateStudentList);
    setEditMode(false);
    setEditableStudent(null);
    setStudentName("");
  }

  const removeHandler = (studentId) =>{
    const updateStudentList = students.filter((student)=>student.id!==studentId);
    setStudents(updateStudentList);

  }



  return (
    <div className='App'>
      <form onSubmit={submitHandler}>
        <input type='text' value={studentName} onChange={changeNameHandler}/>
        <button type='submit'>{editMode?"Update Student":"Add Students"}</button>
      </form>



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
                  <button >Make Present</button>
                  <button>Make Absent</button>
                </span>
              </li>
            ))
          }
        </ul>
       </div>
       <div className='list present-students'>
           <h2>Present Students</h2>
        </div>
       <div className='list absent-students'>
          <h2>Absent Students</h2>
       </div>
    
      </div>
    
    </div>
  )
}

export default App
