import React from 'react';
import { useContext } from 'react';
import { StudentCtx } from '../context/Student';

const StudentForm = () => {
  const {
    studentStates,
    submitHandler,
    changeNameHandler
  } = useContext(StudentCtx);

  const { editMode, studentName } = studentStates;

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          value={studentName}
          onChange={changeNameHandler}
        />
        <button type='submit'>{editMode ? "Update Student" : "Add Student"}</button>
      </form>
    </div>
  );
};

export default StudentForm;
