import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import image from "../../../assets/advisor.jpg";
import './Advisor.css'

const Advisor = () => {
    const [name, setName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [time , setTime] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

          // Validate form fields
        if (!name || !studentId || !time || !date) {
            // Display an error message if any of the fields is empty
            alert('All fields are required!');
            return;
        }

        // Validate student ID
        // if (!/^\d{7}$/.test(studentId)) {
        //     // Display an error message if the student ID is not 7 digits
        //     alert('Student ID must be 7 digits!');
        //     return;
        // }
        fetch('http://ec2-54-178-198-102.ap-northeast-1.compute.amazonaws.com:3000/advisor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            student_id: studentId,
            date: date,
          })
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setName('');
          setStudentId('');
          setTime('');
          setDate('');
          alert('Appointment Requested Successfully');
        })
        .catch(error => {
          console.error(error);
          alert('Error: Appointment Request Failed');
        });
      }
      

  return (
    <div className='app-advisor'>
        <div className="major-advisor" style={{backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            width: "100%",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "-1",
            backgroundAttachment: "fixed",
            opacity: "0.7"
      }}>    
    </div>

    <div className="major-content_advisor">
        <div className="major-header_advisor">
            <h1>Online Advising Request</h1>
            <p>Fill out the form below to request an online advising appointment. You will receive an email confirmation with a link to join the meeting.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="studentId">Student ID</label>
                <input type="number" id="studentId" value={studentId} onChange={(e) => setStudentId(e.target.value)} />

                <label htmlFor="time">Time</label>
                <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} />

                <label htmlFor="date">Date</label>
                <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />

                <button type="submit">Submit</button>
            </div>
        </form>
        </div>

        <div className="btn">
                <button className="btn1">
                <NavLink className="btn-link"
                            exact
                            to="/"
                        >
                            Back Home
                        </NavLink>
                </button>
            </div>

            <div className="major-footer_advisor">
                <h1>America University of Kuwait</h1>
                <p>P.O.BOX 3323, Safat 13034, Kuwait</p>
                <p>Phone: +965 2224 0000</p>
            </div>
    </div>
  )
}

export default Advisor