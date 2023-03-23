/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "./DropdownMenuStudents.css";

function DropdownMenuStudents(props) {
  const { setSelectedStudent, onSelect, errors, selectedStudent } = props;
  const [students, setStudents] = useState(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/all`)
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error(err));
  }, []);

  const checkStudentValue = (id) => {
    if (id !== "Choose student") {
      onSelect({ ...errors, missing_student: false });
    } else {
      onSelect({ ...errors, missing_student: null });
    }
  };

  return (
    <select
      value={selectedStudent}
      onChange={(e) => {
        setSelectedStudent(e.target.value);
        checkStudentValue(e.target.value);
      }}
      className="dropdown-container"
      name="students"
    >
      <option key={0} value="Choose student">
        Choose student
      </option>
      {students &&
        students.map((student) => {
          return (
            <option key={student.id} value={student.id}>
              {student.email}
            </option>
          );
        })}
    </select>
  );
}

export default DropdownMenuStudents;
