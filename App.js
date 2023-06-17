import React from 'react';
import './App.css';

function App() {
  return (
    
    <div className="container">
      <h1 className="title">Admission Form</h1>
      <form className="form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="dob">DOB:</label>
        <input type="dob" id="dob" name="dob" />
        <label htmlFor="fathername">Father's Name:</label>
        <input type="text" id="fathername" name="fathername" />
        <label htmlFor="mothername">Mother's Name:</label>
        <input type="text" id="mothername" name="mothername" />
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" />
        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
    
  );
}


export default App;
