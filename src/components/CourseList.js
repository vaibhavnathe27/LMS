


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   FaUserGraduate,
//   FaClock,
//   FaCheckCircle,
//   FaPlus,
//   FaPlusCircle,
// } from 'react-icons/fa';
// import { Modal, Button, Form } from 'react-bootstrap';

// const cardColors = ['primary', 'success', 'danger', 'warning', 'info', 'secondary'];

// function CourseList() {
//   const [courses, setCourses] = useState([]);
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [newCourse, setNewCourse] = useState({
//     title: '',
//     description: '',
//     instructor: '',
//     duration: '',
//   });

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const courseRes = await axios.get('http://localhost:5000/api/courses');
//       setCourses(courseRes.data);

//       const enrollRes = await axios.get('http://localhost:5000/api/enrollments/me');
//       setEnrolledCourses(enrollRes.data.map(e => e.courseId._id));
//     } catch (err) {
//       console.error('Failed to fetch data:', err);
//     }
//   };

//   const handleEnroll = async (courseId) => {
//     try {
//       await axios.post('http://localhost:5000/api/enrollments', { courseId });
//       setEnrolledCourses([...enrolledCourses, courseId]);
//     } catch (err) {
//       alert(err.response?.data?.message || 'Error enrolling');
//     }
//   };

//   const handleAddCourse = async () => {
//     try {
//       await axios.post('http://localhost:5000/api/courses', newCourse);
//       setShowModal(false);
//       setNewCourse({ title: '', description: '', instructor: '', duration: '' });
//       fetchCourses();
//     } catch (err) {
//       console.error('Error adding course:', err);
//       alert('Failed to add course');
//     }
//   };

//   return (
//     <div className="container py-5" style={{ background: 'linear-gradient(to right, #fceabb, #f8b500)' }}>
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h2 className="fw-bold text-dark shadow-sm">📘 Course Catalog</h2>
//         <Button variant="success" onClick={() => setShowModal(true)}>
//           <FaPlusCircle className="me-2" />
//           Add Course
//         </Button>
//       </div>

//       <div className="row g-4">
//         {courses.map((course, index) => {
//           const color = cardColors[index % cardColors.length];
//           return (
//             <div className="col-md-6 col-lg-4" key={course._id}>
//               <div className={`card border-0 shadow h-100 bg-${color} text-white`}>
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="card-title fw-bold">{course.title}</h5>
//                   <p className="card-text">{course.description}</p>
//                   <div className="mt-auto">
//                     <p className="mb-1">
//                       <FaUserGraduate className="me-2" />
//                       <strong>Instructor:</strong> {course.instructor}
//                     </p>
//                     <p>
//                       <FaClock className="me-2" />
//                       <strong>Duration:</strong> {course.duration}
//                     </p>
//                     {enrolledCourses.includes(course._id) ? (
//                       <button className="btn btn-light text-success w-100 fw-semibold" disabled>
//                         <FaCheckCircle className="me-2" />
//                         Enrolled
//                       </button>
//                     ) : (
//                       <button className="btn btn-dark w-100 fw-semibold" onClick={() => handleEnroll(course._id)}>
//                         <FaPlus className="me-2" />
//                         Enroll Now
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Add Course Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Add New Course</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Course title"
//                 value={newCourse.title}
//                 onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 placeholder="Course description"
//                 rows={3}
//                 value={newCourse.description}
//                 onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Instructor</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Instructor name"
//                 value={newCourse.instructor}
//                 onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Duration</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="e.g., 4 weeks"
//                 value={newCourse.duration}
//                 onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
//           <Button variant="primary" onClick={handleAddCourse}>Add Course</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default CourseList;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  FaUserGraduate,
  FaClock,
  FaCheckCircle,
  FaPlus,
  FaPlusCircle,
} from 'react-icons/fa';
import { Modal, Button, Form } from 'react-bootstrap';

const cardColors = ['primary', 'success', 'danger', 'warning', 'info', 'secondary'];

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    instructor: '',
    duration: '',
  });

  useEffect(() => {
    fetchCourses();
  }, []);

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

  const handleEnroll = async (courseId) => {
    try {
      await axios.post('http://localhost:5000/api/enrollments', { courseId });
      await fetchCourses(); // Refresh both course and enrollment data
    } catch (err) {
      alert(err.response?.data?.message || 'Error enrolling');
    }
  };

  const handleAddCourse = async () => {
    try {
      await axios.post('http://localhost:5000/api/courses', newCourse);
      setShowModal(false);
      setNewCourse({ title: '', description: '', instructor: '', duration: '' });
      await fetchCourses(); // Refresh course list
    } catch (err) {
      console.error('Error adding course:', err);
      alert('Failed to add course');
    }
  };

  return (
    <div className="container py-5" style={{ background: 'linear-gradient(to right, #fceabb, #f8b500)' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-dark shadow-sm">📘 Course Catalog</h2>
        <Button variant="success" onClick={() => setShowModal(true)}>
          <FaPlusCircle className="me-2" />
          Add Course
        </Button>
      </div>

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
                      <button className="btn btn-dark w-100 fw-semibold" onClick={() => handleEnroll(course._id)}>
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

      {/* Add Course Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Course title"
                value={newCourse.title}
                onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Course description"
                rows={3}
                value={newCourse.description}
                onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Instructor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Instructor name"
                value={newCourse.instructor}
                onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., 4 weeks"
                value={newCourse.duration}
                onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleAddCourse}>Add Course</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CourseList;
