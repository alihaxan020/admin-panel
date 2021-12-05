import React, { useState, useEffect } from "react";
import "../adminStyles/AdminStyles.css";
import User from "../../assets/user.png";
const UserMng = () => {
  const [arrayData, setArrData] = useState([]);
  useEffect(() => {
    loadAppointments();
  }, []);

  async function loadAppointments() {
    fetch("https://dyslexia-backend.herokuapp.com/getusers")
      .then((response) => response.json())
      .then((data) => setArrData(data.data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <main>
      <div className="main__container">
        <h1 style={{ paddingBottom: 15, color: "#343a40" }}>User Management</h1>
        <h3 style={{ paddingBottom: 40 }}>
          Dashboard <span style={{ paddingLeft: 10, paddingRight: 10 }}>/</span>
          <span style={{ color: "#888" }}>Users</span>
        </h3>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th style={{ paddingRight: 100 }} scope="col">
                Avatar
              </th>
              <th style={{ paddingRight: 130 }} scope="col">
                Name
              </th>
              <th style={{ paddingRight: 170 }} scope="col">
                Age
              </th>
              <th style={{ paddingRight: 100 }} scope="col">
                Gender
              </th>
              <th style={{ paddingRight: 200 }} scope="col">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {arrayData.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      height="50"
                      style={{ borderRadius: "50%", resizeMode: "cover" }}
                      width="50"
                      alt="avator"
                    />
                  ) : (
                    <img
                      src={User}
                      height="50"
                      style={{ borderRadius: "50%", resizeMode: "cover" }}
                      width="50"
                      alt="avator"
                    />
                  )}
                </td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default UserMng;
