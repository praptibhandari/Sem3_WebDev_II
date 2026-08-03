import React from "react";

const StudentCard = ({ name, rollNo, course }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "15px",
        margin: "10px",
        width: "250px",
        borderRadius: "10px",
      }}
    >
      <h2>{name}</h2>
      <p><strong>Roll No:</strong> {rollNo}</p>
      <p><strong>Course:</strong> {course}</p>
    </div>
  );
};

export default StudentCard;