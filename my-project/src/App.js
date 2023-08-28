import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentAttendanceForm from './StudentAttendanceForm';
import Attendance from './Attendance';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StudentAttendanceForm />} />
                <Route path="/attendance" element={<Attendance />} />
            </Routes>
        </Router>
    );
}

export default App;


