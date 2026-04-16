import React from "react";
import "./App.css";
import Student from "./components/Student";
function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Student Information</h1>
      <Student name="Tarang mittal" course="Computer Science" marks="95" />
      <Student name="Anita Verma" course="Information Technology" marks="92" />
      <Student name="Rohan Gupta" course="Electronics" marks="78" />
    </div>
  );
}
export default App;


