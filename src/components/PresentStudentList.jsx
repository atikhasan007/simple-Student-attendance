import React from 'react'

const PresentStudentList = (props) => {
    const {students,toggleList} = props;

      //derived State 
  const presentStudentList = students.filter((item)=> item.isPresent === true, 
);

  return (
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
  )
}

export default PresentStudentList
