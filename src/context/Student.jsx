import { createContext, useReducer } from "react";

const initState = {
  students: [],
  editMode: false,
  editableStudent: null,
  studentName: ""
};


const studentReducer = (state, action) => {
  switch (action.type) {
    case "change_student_name": {
      return {
        ...state,
        studentName: action.payload
      };
    }

    case "create_student": {
      const newStudent = {
        id: Date.now() + "",
        name: state.studentName,
        isPresent: undefined
      };
      return {
        ...state,
        students: [...state.students, newStudent],
        studentName: ""
      };
    }

    case "edit_student": {
      return {
        ...state,
        editMode: true,
        editableStudent: action.payload,
        studentName: action.payload.name
      };
    }

    case "update_student": {
      return {
        ...state,
        students: state.students.map((item) =>
          item.id === state.editableStudent.id
            ? { ...item, name: state.studentName }
            : item
        ),
        editMode: false,
        editableStudent: null,
        studentName: ""
      };
    }

    case "remove_student": {
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        )
      };
    }

    case "change_isPresent_status_of_a_student": {
      return {
        ...state,
        students: state.students.map((item) =>
          item.id === action.payload.id
            ? { ...item, isPresent: action.payload.isPresent }
            : item
        )
      };
    }

    default: {
      return state;
    }
  }
};








// context api create
export const StudentCtx = createContext();

const StudentProvider = ({ children }) => {
  const [studentStates, dispatch] = useReducer(studentReducer, initState);

  const changeNameHandler = (e) => {
    dispatch({ type: "change_student_name", payload: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (studentStates.studentName.trim() === "") {
      return alert("Please Provide a valid name");
    }

    dispatch({
      type: studentStates.editMode ? "update_student" : "create_student"
    });
  };

  const toggleList = (student) => {
    dispatch({
      type: "change_isPresent_status_of_a_student",
      payload: {
        id: student.id,
        isPresent: !student.isPresent
      }
    });
  };

  const makePresentHandler = (student) => {
    if (student.isPresent !== undefined) {
      return alert(
        `This student is already in the ${
          student.isPresent ? "Present List" : "Absent List"
        }`
      );
    }
    dispatch({
      type: "change_isPresent_status_of_a_student",
      payload: { id: student.id, isPresent: true }
    });
  };

  const makeAbsentHandler = (student) => {
    if (student.isPresent !== undefined) {
      return alert(
        `This student is already in the ${
          student.isPresent ? "Present List" : "Absent List"
        }`
      );
    }
    dispatch({
      type: "change_isPresent_status_of_a_student",
      payload: { id: student.id, isPresent: false }
    });
  };

  const editHandler = (id) => {
    dispatch({ type: "edit_student", payload:id });
  };

  const removeHandler = (id) => {
    dispatch({ type: "remove_student", payload: id });
  };

  const ctxValue = {
    studentStates,
    dispatch,
    changeNameHandler,
    submitHandler,
    toggleList,
    makePresentHandler,
    makeAbsentHandler,
    editHandler,
    removeHandler
  };

  return (
    <StudentCtx.Provider
     value={ctxValue}>
        {children}
     </StudentCtx.Provider>
  );
};

export default StudentProvider;
