import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const StudentAttendanceForm = () => {

    const navigate = useNavigate();
   

    const handleSubmit = (e) => {
        e.preventDefault();
        
        navigate('/attendance'); 
    };

 

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full sm:w-1/2 md:w-1/3">
                <h1 className="text-2xl font-semibold mb-4 text-center">Student Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-medium mb-1">Name:</label>
                        <input type="text" id="name" name="name" className="w-full rounded border border-black focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3 py-2" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="regno" className="block font-medium mb-1">Registration Number:</label>
                        <input type="text" id="regno" name="regno" className="w-full rounded border border-black focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3 py-2" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="day" className="block font-medium mb-1">Day Order:</label>
                        <select id="day" name="day" className="w-full rounded border border-black focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3 py-2" required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="department" className="block font-medium mb-1">Department:</label>
                        <input type="text" id="department" name="department" className="w-full rounded border border-black focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3 py-2" required />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50" >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StudentAttendanceForm;
