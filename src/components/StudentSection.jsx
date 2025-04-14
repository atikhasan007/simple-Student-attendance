import React, { useContext } from 'react';
import AbsentStudentList from "./AbsentStudentList";
import AllStudentList from "./AllStudentList";
import PresentStudentList from "./PresentStudentList";
import { StudentCtx } from '../context/Student';

const StudentSection = () => {
  const { studentStates, toggleList } = useContext(StudentCtx);
  const { students } = studentStates;

  return (
    <div className='student-section'>
      {/* list of all students */}
      <AllStudentList />

      {/* present list */}
      <PresentStudentList />

      {/* absent list */}
      <AbsentStudentList />
    </div>
  );
};

export default StudentSection;
