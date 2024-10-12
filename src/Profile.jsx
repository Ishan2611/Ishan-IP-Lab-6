import React from 'react';

function Profile() {
  return (
    <div className="profile">
      <style>
        {`
          .profile {
            padding: 20px;
            background-color: #f4f4f4; /* Matches the background in App.css */
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            max-width: 800px; /* Limits width for better readability */
            margin: 20px auto; /* Centers the profile component */
          }

          .profile h2 {
            font-size: 28px;
            color: #2c2c2c; /* Darker color for main heading */
            margin-bottom: 20px;
            text-align: center; /* Center aligns the heading */
          }

          .profile-info {
            margin-top: 20px;
          }

          .profile-detail {
            margin-bottom: 20px;
          }

          .profile-detail h3 {
            font-size: 22px;
            color: #007bff; /* Blue color for subheadings */
            margin-bottom: 10px;
            text-decoration: underline; /* Adds underline for emphasis */
          }

          .profile-detail p {
            font-size: 16px;
            color: #555; /* Darker gray for paragraph text */
            line-height: 1.5; /* Improved line spacing for readability */
          }

          .profile-detail ul {
            padding-left: 20px;
            list-style-type: disc;
          }

          .profile-detail ul li {
            font-size: 16px;
            color: #555; /* Same dark gray for list items */
            margin-bottom: 5px;
          }
        `}
      </style>
      
      <h2>About VESIT</h2>
      <p>
        Established in 1984, VESIT has a long history of academic excellence and a commitment to student success. 
        Our college is dedicated to creating a supportive environment that fosters learning, innovation, and personal growth.
      </p>

      <div className="profile-info">
        <div className="profile-detail">
          <h3>Our Mission</h3>
          <p>
            To provide high-quality education and foster a collaborative learning environment that encourages critical thinking 
            and creativity. We aim to equip our students with the knowledge and skills necessary for their future careers.
          </p>
        </div>
        <div className="profile-detail">
          <h3>Our Vision</h3>
          <p>
            To be a globally recognized institution for education, research, and innovation, producing graduates who are 
            prepared to meet the challenges of a rapidly changing world.
          </p>
        </div>
        <div className="profile-detail">
          <h3>Core Values</h3>
          <ul>
            <li><strong>Integrity:</strong> We uphold the highest standards of ethics and transparency in all our endeavors.</li>
            <li><strong>Excellence:</strong> We strive for excellence in teaching, learning, and research.</li>
            <li><strong>Diversity:</strong> We celebrate diversity and promote inclusion in our community.</li>
            <li><strong>Innovation:</strong> We encourage innovation and adaptability in an ever-changing global landscape.</li>
          </ul>
        </div>
        <div className="profile-detail">
          <h3>Achievements</h3>
          <p>
            Over the years, VESIT has received numerous accolades for its academic programs and faculty. 
            Our graduates have gone on to achieve remarkable success in various fields, contributing positively to society.
          </p>
        </div>
        <div className="profile-detail">
          <h3>Student Support Services</h3>
          <p>
            We are committed to supporting our students through various services, including academic advising, counseling, 
            career services, and extracurricular activities. Our goal is to ensure that every student has access to the resources 
            they need to succeed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
