import React, { useState } from 'react';

const classesData = [
    { className: 'Class 1', faculty: 'Jothi B', Subject: 'DSA',classroom: '212A', Time: '10-11 am', coordinates: { latitude: 123, longitude: 456 } },
    { className: 'Class 2', faculty: 'Sudha Rajesh',Subject: 'DBMS', classroom: '209B', Time: '11-12 am', coordinates: { latitude: 789, longitude: 101 } },
    { className: 'Class 3', faculty: 'Sudha Rajesh', Subject: 'Operating System',classroom: '209B', Time: '2-3 pm', coordinates: { latitude: 789, longitude: 101 } }
    // Add more classes here...
];

const calculateDistance = (coord1, coord2) => {
    const earthRadius = 6371; // Earth's radius in kilometers
    const latDiff = degToRad(coord2.latitude - coord1.latitude);
    const lonDiff = degToRad(coord2.longitude - coord1.longitude);

    const a =
        Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
        Math.cos(degToRad(coord1.latitude)) *
            Math.cos(degToRad(coord2.latitude)) *
            Math.sin(lonDiff / 2) * Math.sin(lonDiff / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadius * c;
    return distance;
};

const degToRad = (deg) => {
    return (deg * Math.PI) / 180;
};

const Attendance = () => {
    const [attendanceMarked, setAttendanceMarked] = useState(false);

    const handleMarkAttendance = (classInfo) => {
        const userCoordinates = { latitude: 789, longitude: 101 };
        const distance = calculateDistance(userCoordinates, classInfo.coordinates);

        if (distance <= 0.1) { // Assuming a distance threshold of 100 meters (0.1 km)
            setAttendanceMarked(true);
        } else {
            window.alert('Location Coordinates do not match. Attendance cannot be marked.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-2xl font-semibold mb-4 text-center">Attendance</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {classesData.map((classInfo, index) => (
                    <div key={index} className="bg-white rounded shadow-md p-4">
                        <h2 className="text-lg font-semibold mb-2">{classInfo.className}</h2>
                        <p className="mb-2">Faculty: {classInfo.faculty}</p>
                        <p className="mb-2">Classroom: {classInfo.classroom}</p>
                        <p className="mb-2">Subject: {classInfo.Subject}</p>
                        <p className="mb-2">Time: {classInfo.Time}</p>
                        <button
                            className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onClick={() => handleMarkAttendance(classInfo)}
                        >
                            Mark Attendance
                        </button>
                    </div>
                ))}
            </div>
            {attendanceMarked && (
                <div className="items-center bg-green-200 text-green-700 px-8 py-6 mt-4 rounded shadow">
                    Attendance marked successfully!
                </div>
            )}
        </div>
    );
};

export default Attendance;
