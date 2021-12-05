import React, { useState } from "react";
import "../adminStyles/AdminStyles.css";

const DyslexiaTest = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [correct_option, setCorrect_option] = useState("");
  const [test, setTest] = useState([]);
  const [formValues, setFormValues] = useState([{ name: "" }]);

  let handleChange = (i, e) => {
    e.preventDefault();
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
    const getValues = formValues.map((a) => a.name);
    setOptions(getValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { name: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    let temp = {
      question: question,
      options: options,
      correct_option: correct_option,
    };
    setTest([...test, temp]);
    setFormValues([{ name: "" }]);
    setCorrect_option("");
    setQuestion("");
  };

  const handleDone = () => {
    fetch("https://dyslexia-backend.herokuapp.com/savequestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        test,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <main>
      <div className="row">
        <div className="col-md-12">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "25%", backgroundColor: "blue" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              25%
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label>Enter your Question: </label>
            <input
              type="text"
              name="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
            {formValues.map((element, index) => (
              <div className="form-inline" key={index}>
                <label>Enter your {index + 1} option: </label>
                <input
                  type="text"
                  name="name"
                  value={element.name || ""}
                  onChange={(e) => handleChange(index, e)}
                  required
                />
                {index ? (
                  <button
                    type="button"
                    className="button remove"
                    onClick={() => removeFormFields(index)}
                  >
                    Remove
                  </button>
                ) : null}
              </div>
            ))}
            <div>
              <button
                className="button add"
                type="button"
                onClick={() => addFormFields()}
              >
                Add Next Option
              </button>
            </div>
            <label>Enter your Correct option: </label>
            <input
              type="text"
              name="question"
              value={correct_option}
              onChange={(e) => setCorrect_option(e.target.value)}
              required
            />

            <div className="button-section">
              <button className="button submit" type="submit">
                Submit
              </button>
              <button onClick={handleDone}>Done</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default DyslexiaTest;
