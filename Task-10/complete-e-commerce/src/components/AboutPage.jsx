/* eslint-disable no-unused-vars */
// const AboutPage = () => {
//     return <div>About Us Page</div>;
//   };
  
//   export default AboutPage;

import React from 'react';

const AboutPage = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1><b><u>About Us</u></b></h1>
      <p>
        Welcome to our e-commerce website! We are a company dedicated to bringing you the best products
        at the best prices. Our mission is to provide our customers with an easy and enjoyable shopping
        experience, offering a wide range of products to meet your needs.
      </p>
<br />
      <h2><b><u>Our Story</u></b></h2>
      <p>
        Founded in 2020, we started with a small team of passionate individuals who wanted to create
        an online shopping platform that could offer quality products at competitive prices. Over the
        years, we have grown and expanded our inventory to include a variety of categories, including
        electronics, fashion, home goods, and more!
      </p>

      <h2><b><u>Our Teams</u></b></h2><br />
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <img
            src="https://via.placeholder.com/150"
            alt="Team member 1"
            style={{
              borderRadius: '50%',
              width: '150px',
              height: '150px',
              objectFit: 'cover',
            }}
          />
          <h3>Sushree Sonita Biswal</h3>
          <p>CEO & Founder</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img
            src="https://via.placeholder.com/150"
            alt="Team member 2"
            style={{
              borderRadius: '50%',
              width: '150px',
              height: '150px',
              objectFit: 'cover',
            }}
          />
          <h3>Abhijit Malla</h3>
          <p>Marketing Director</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img
            src="https://via.placeholder.com/150"
            alt="Team member 3"
            style={{
              borderRadius: '50%',
              width: '150px',
              height: '150px',
              objectFit: 'cover',
            }}
          />
          <h3>Sudhansu Sekhar Panda</h3>
          <p>Lead Developer</p>
        </div>
      </div>
<br />
      <h2><b><u>Why Choose Us?</u></b></h2>
      <ul>
        <li>High-quality products at competitive prices.</li>
        <li>Fast and secure shipping.</li>
        <li>Excellent customer service.</li>
        <li>Wide variety of products to choose from.</li>
        <li>Safe and easy online shopping experience.</li>
      </ul>

      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us on our <a href="/contact">Contact Page</a>.</p>
    </div>
  );
};

export default AboutPage;

  
