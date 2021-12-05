import React, { useState, useEffect } from "react";
import "./Main.css";
import hello from "../../assets/hello.svg";
import Chart from "../charts/Chart";
import AgeChart from "../charts/AgeChart";
const Main = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadAppointments();
  }, []);

  async function loadAppointments() {
    fetch("https://dyslexia-backend.herokuapp.com/getusers")
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  let male = users.filter((user) => user.gender === "Male");
  let female = users.filter((user) => user.gender === "Female");
  let youngUser = users.filter((user) => user.age <= 20);
  let averageUser = users.filter((user) => user.age > 20 && user.age < 30);
  let oldUser = users.filter((user) => user.age >= 30);
  console.log("Young: ", youngUser);
  // console.log(averageUser);
  console.log("Average: ", averageUser);
  console.log(users);
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello Ali Hassan</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>
        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Users</p>
              <span className="font-bold text-title">{users.length}</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Total Verbal Test</p>
              <span className="font-bold text-title">0 </span>
            </div>
          </div>
          <div className="card">
            <i
              className="fa fa-user-secret fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Total Assessment Form</p>
              <span className="font-bold text-title">0</span>
            </div>
          </div>
          <div className="card">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Users Sugestions</p>
              <span className="font-bold text-title">645</span>
            </div>
          </div>
        </div>
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Users Gender</h1>
                <p>Pie Chart</p>
              </div>
            </div>
            {male && female ? (
              <Chart maleCount={male.length} femaleCount={female.length} />
            ) : null}
          </div>
          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Users Statistics</h1>
                <p>
                  Dyslexia Aid users data analysis, Total users: {users.length}
                </p>
              </div>
            </div>
            <div className="charts__right__cards">
              <div className="card1">
                <h1>Male Users</h1>

                {male ? <h2>{male.length}</h2> : null}
              </div>
              <div className="card2">
                <h1>Female Users</h1>
                {female ? <h2>{female.length}</h2> : null}
              </div>
              <div className="card3">
                <h1>Users's Age</h1>
                <p>Less than 20</p>
                {male ? <h2>{youngUser.length}</h2> : null}
              </div>
              <div className="card4">
                <h1>Users's Age</h1>
                <h3>Less than 30</h3>
                {male ? <h2>{averageUser.length}</h2> : null}
              </div>
            </div>
            {youngUser && averageUser && oldUser ? (
              <AgeChart
                youngUser={youngUser.length}
                oldUser={oldUser.length}
                averageUser={averageUser.length}
              />
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
