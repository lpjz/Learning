import React, { useState } from "react";
import "./JoinNow.css";

const JoinNow = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [file, setFile] = useState(null);

  const handleNameChange = (e) => {
    const value = e.target.value;
    // ตรวจสอบว่าค่าที่พิมพ์เข้ามาเป็นตัวอักษร (ไม่ใช่ตัวเลขหรืออักษรพิเศษ)
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setName(value);
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("gender", gender);
    formData.append("age", age);
    formData.append("file", file);

    fetch("http://localhost:3030/register", {
      method: "POST",
      body: formData
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text);
          });
        }
        return response.text();
      })
      .then((data) => {
        alert(data); // แสดงข้อความจากเซิร์ฟเวอร์
        setName("");
        setGender("");
        setAge("");
        setFile(null);
      })
      .catch((error) => {
        alert(error.message); // แสดงข้อความ Error เช่น "You have already registered."
      });
  };

  return (
    <section className="join-now">
      <h2>Join Now</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={gender}
          onChange={handleGenderChange}
          required
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label htmlFor="age">Age:</label>
        <select
          id="age"
          name="age"
          value={age}
          onChange={handleAgeChange}
          required
        >
          <option value="" disabled>
            Select Age
          </option>
          {[...Array(37)].map((_, i) => (
            <option key={i} value={15 + i}>
              {15 + i}
            </option>
          ))}
        </select>

        <label htmlFor="file">Upload Picture Before Joining:</label>
        <input
          type="file"
          id="file"
          name="file"
          accept="image/*"
          onChange={handleFileChange}
          required
        />

        <button type="submit">Sign Up for Free</button>
      </form>
    </section>
  );
};

export default JoinNow;
