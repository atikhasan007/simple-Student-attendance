import { createContext, useState } from "react";

// Create context
export const StudentCtx = createContext();

const StudentProvider = (props) => {
  const { children } = props;

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "md atik hasan"
    }
  ]);

  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);
  const [studentName, setStudentName] = useState("");



  const updateHandler = () =>{

    const updateStudentList = students.map(student =>{
       if(student.id === editableStudent.id){
        return {...student , name:studentName};
       }

       return student;
    })

    setStudents(updateStudentList);
    setEditMode(false);
    setEditableStudent(null);
    setStudentName("");
  }




        const changeNameHandler = (e) =>{
          setStudentName(e.target.value)
          
        }


      const submitHandler = (e)=>{
        e.preventDefault();
        if(studentName.trim() === ""){
          return alert(`Please Provide a valid name`)
        }
    
    
        editMode? updateHandler() : createHandler();
    
      }

      const createHandler = () =>{
        const newStudent = {
          id : Date.now() + "",
          name : studentName,
          isPresent: undefined,
    
        };
    
        setStudents([...students, newStudent]);
        setStudentName("");
    
      }

      const toggleList = (student) =>{

        const updateStudentList = students.map((item)=>{
          if(item.id===student.id) {
            return {...item, isPresent: !item.isPresent};
          }
          return item;
        })
        setStudents(updateStudentList);
      
       }
    
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



  const ctxValue = {
    students,
    setStudents,
    studentName,
    setStudentName,
    editMode,
    setEditMode,
    editableStudent,
    setEditableStudent,
    updateHandler,
    changeNameHandler,
    submitHandler,
    toggleList,
    editHandler,
    removeHandler,
    makeAbsentHandler,
    makePresentHandler,
  };

  return (
    <StudentCtx.Provider value={ctxValue}>
      {children}
    </StudentCtx.Provider>
  );
};

export default StudentProvider;
