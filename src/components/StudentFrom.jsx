import React, { useState, useEffect } from 'react'

const StudentFrom = (props) => {
    const [studentName, setStudentName] = useState("");
    
    const {editMode, 
         students,
          setStudents,
           editableStudent, 
           setEditMode,
           setEditableStudent,
            } = props;
     
      const changeNameHandler = (e) =>{
        setStudentName(e.target.value)
    
      }


      useEffect(()=>{
        if(editableStudent){
            setStudentName(editableStudent.name);
        }
      }, [editableStudent])
      
    
      const submitHandler = (e)=>{
        e.preventDefault();
        if(studentName.trim() === ""){
          return alert(`Please Provide a valid name`)
        }
    
    
        editMode? updateHandler() : createHandler();
    
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
    

  return (
    <div>
        <form onSubmit={submitHandler}>
        <input type='text' value={studentName} onChange={changeNameHandler}/>
        <button type='submit'>{editMode?"Update Student":"Add Students"}</button>
      </form>
      
    </div>
  )
}

export default StudentFrom;
