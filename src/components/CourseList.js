

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { FaUserGraduate, FaClock, FaCheckCircle, FaPlus } from 'react-icons/fa';

const cardColors = ['primary', 'success', 'danger', 'warning', 'info', 'secondary'];

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courseRes = await axios.get('http://localhost:5000/api/courses');
        setCourses(courseRes.data);

        const enrollRes = await axios.get('http://localhost:5000/api/enrollments/me');
        setEnrolledCourses(enrollRes.data.map(e => e.courseId._id));
      } catch (err) {
        console.error('Failed to fetch data:', err);
      }
    };
    fetchCourses();
  }, []);

  const handleEnroll = async (courseId) => {
    try {
      await axios.post('http://localhost:5000/api/enrollments', { courseId });
      setEnrolledCourses([...enrolledCourses, courseId]);
    } catch (err) {
      alert(err.response?.data?.message || 'Error enrolling');
    }
  };

  return (
    <div className="container py-5" style={{ background: 'linear-gradient(to right, #fceabb, #f8b500)' }}>
      <h2 className="text-center mb-5 fw-bold text-dark shadow-sm">📘 Course Catalog</h2>
      <div className="row g-4">
        {courses.map((course, index) => {
          const color = cardColors[index % cardColors.length];
          return (
            <div className="col-md-6 col-lg-4" key={course._id}>
              <div className={`card border-0 shadow h-100 bg-${color} text-white`}>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{course.title}</h5>
                  <p className="card-text">{course.description}</p>

                  <div className="mt-auto">
                    <p className="mb-1">
                      <FaUserGraduate className="me-2" />
                      <strong>Instructor:</strong> {course.instructor}
                    </p>
                    <p>
                      <FaClock className="me-2" />
                      <strong>Duration:</strong> {course.duration}
                    </p>

                    {enrolledCourses.includes(course._id) ? (
                      <button className="btn btn-light text-success w-100 fw-semibold" disabled>
                        <FaCheckCircle className="me-2" />
                        Enrolled
                      </button>
                    ) : (
                      <button
                        className="btn btn-dark w-100 fw-semibold"
                        onClick={() => handleEnroll(course._id)}
                      >
                        <FaPlus className="me-2" />
                        Enroll Now
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CourseList;
