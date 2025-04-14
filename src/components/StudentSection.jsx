import React from 'react'
import AbsentStudentList from "./AbsentStudentList";
import AllStudentList from "./AllStudentList";
import PresentStudentList from "./PresentStudentList";


const StudentSection = (props) => {

const  {students, setStudents, setEditMode, setEditableStudent} = props;

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
  )
}

export default StudentSection
