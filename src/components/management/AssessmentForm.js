import React from "react";
import "../adminStyles/AdminStyles.css";

const AssessmentForm = () => {
  return (
    <main>
      <div className="main__container">
        <h1 style={{ paddingBottom: 15, color: "#343a40" }}>Assessment Form</h1>
        <h3 style={{ paddingBottom: 40 }}>
          Dashboard <span style={{ paddingLeft: 10, paddingRight: 10 }}>/</span>
          <span style={{ color: "#888" }}>Assessment Form</span>
        </h3>
      </div>
    </main>
  );
};

export default AssessmentForm;
