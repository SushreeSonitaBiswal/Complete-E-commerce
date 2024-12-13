/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (e.g., send to a backend API)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container">
      <h1><b><u>Contact Us</u></b></h1>
      <p>Have questions or feedback? We would love to hear from you! Please fill out the form below, and we will get back to you as soon as possible.</p>

      {submitted && <p style={{ color: 'green' }}>Thank you! Your message has been sent.</p>}

      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name"><b>Sign Up</b></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email"><b>Email</b></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="message"><b>Message</b></label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem', height: '150px' }}
          ></textarea>
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
          Submit
        </button>
      </form>

      <div style={{ marginTop: '2rem' }}>
        <h2><b><u>Contact Us</u></b></h2>
        <p><strong>Email:</strong> support@ecommerce.com</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Address:</strong> 123 E-Commerce Street, USBM , BBSR</p>
      </div>
    </div>
  );
};

export default ContactPage;
