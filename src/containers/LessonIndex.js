import React from 'react';
import LessonTile from '../components/LessonTile'

function LessonIndex(props) {
    return (
        <div>
            Lessons Index (url = /courses/:id)
            select lesson... redirect to LessonShow
            <LessonTile/>
        </div>
    );
}

export default LessonIndex;