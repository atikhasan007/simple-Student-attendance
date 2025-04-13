import React from 'react'


    const AllStudentList = (props) => {
        const {
          students,
          setStudents,
          setEditMode,
          setEditableStudent,
          setStudentName
        } = props;
      
        
      

       

  const editHandler = (student) => {
    setEditMode(true);
    setEditableStudent(student);
    setStudentName(student.name)
 

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


  return (
    
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
      
    
  )
}

export default AllStudentList
