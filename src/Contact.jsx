import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name}, we will contact you at ${form.email}`);
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={form.name} 
          onChange={handleChange} 
          className="form-input"
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={form.email} 
          onChange={handleChange} 
          className="form-input"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
