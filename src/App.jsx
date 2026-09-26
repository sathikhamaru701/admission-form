import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    school: "",
    className: "",
    subject: "",
    studentName: "",
    year: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    alert("Admission form submitted successfully!");
  };

  return (
    <div className="container">
      <div className="form-box">

        <h1>Student Admission Form</h1>

        <form onSubmit={handleSubmit}>

          {/* School */}
          <label>Choose a School</label>
          <select
            name="school"
            value={formData.school}
            onChange={handleChange}
            required
          >
            <option value="">Choose a school</option>
            <option value="ABC School">ABC School</option>
            <option value="XYZ School">XYZ School</option>
            <option value="Model School">Model School</option>
          </select>

          {/* Class */}
          <label>Class</label>
          <input
            type="text"
            name="className"
            placeholder="Enter class"
            value={formData.className}
            onChange={handleChange}
            required
          />

          {/* Subject */}
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          {/* Student Name */}
          <label>Name of the Student</label>
          <input
            type="text"
            name="studentName"
            placeholder="Enter student name"
            value={formData.studentName}
            onChange={handleChange}
            required
          />

          {/* Year */}
          <label>Year</label>
          <input
            type="number"
            name="year"
            placeholder="Enter year"
            value={formData.year}
            onChange={handleChange}
            required
          />

          {/* Gender */}
          <label>Gender</label>

          <div className="gender">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>

          {/* Address */}
          <label>Address</label>
          <textarea
            name="address"
            placeholder="Enter address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>

          {/* Phone */}
          <label>Phone No.</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          {/* Email */}
          <label>Email ID</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>

        </form>
      </div>
    </div>
  );
}

export default App;