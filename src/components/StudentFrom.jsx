import React from 'react'
import { useContext } from 'react';
import { StudentCtx } from '../context/Student';

const StudentFrom = () => {
  
    
    const {editMode,
          
           submitHandler,
           changeNameHandler,
           studentName
           
            } = useContext(StudentCtx)
     


 
    

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
