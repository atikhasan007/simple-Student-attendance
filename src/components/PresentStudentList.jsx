import React, { useContext } from 'react';
import { StudentCtx } from '../context/Student';

const PresentStudentList = () => {
  const { studentStates, toggleList } = useContext(StudentCtx);
  const { students } = studentStates;

  return (
    <div className='list present-students'>
      <h2>Present Students</h2>
      <ul>
        {(students || [])
          .filter((item) => item.isPresent === true)
          .map((student) => (
            <li key={student.id}>
              <span>{student.name}</span>
              <button onClick={() => toggleList(student)}>Accidentally Added</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PresentStudentList;
