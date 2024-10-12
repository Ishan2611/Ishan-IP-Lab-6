import React, { useState } from 'react';

function Courses() {
  const [courses] = useState([
    { id: 1, name: 'Computer Science', description: 'Learn algorithms, data structures, and software engineering.' },
    { id: 2, name: 'Mechanical Engineering', description: 'Explore mechanics, thermodynamics, and material science.' },
    { id: 3, name: 'Business Administration', description: 'Develop skills in management, finance, and marketing.' }
  ]);

  const handleEnroll = (courseName) => {
    alert(`You have enrolled in ${courseName}`);
  };

  return (
    <div className="courses">
      <h2>Courses Offered</h2>
      <div className="course-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <button onClick={() => handleEnroll(course.name)} className="enroll-button">Enroll</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
