import React from 'react';
import CourseTile from '../components/CourseTile.js'

function CourseIndex(props) {
    return (
        <div>
            <h2>Courses</h2>
            select a course tile.... redirect to LessonsIndex 
            <CourseTile/>
            
        </div>
    );
}

export default CourseIndex;