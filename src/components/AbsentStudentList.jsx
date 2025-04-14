import React, { useContext } from 'react'
import { StudentCtx } from '../context/Student'

const AbsentStudentList = () => {
    const {students, toggleList} = useContext(StudentCtx)
  return (
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
  )
}

export default AbsentStudentList
