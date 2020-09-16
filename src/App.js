import React from "react";
import "./styles.css";
import ParentComment from "./components/ParentComment";

export default function App() {
  return (
    <div className="App">
      <h1>Building a Nested Comment box</h1>
      <ParentComment />
    </div>
  );
}
