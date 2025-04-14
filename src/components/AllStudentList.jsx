import React from 'react'
import { useContext } from 'react';
import { StudentCtx } from '../context/Student';

    const AllStudentList = () => {
        const {
          students,
          editHandler,
          removeHandler,
          makeAbsentHandler,
          makePresentHandler
        
        } = useContext(StudentCtx)
      
        
      

       


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
