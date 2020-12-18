import React from 'react';
import LabContainer from './LabContainer.js'

function LessonShow(props) {
    return (
        <div>
            <h2>Lesson</h2>
            Text and Video (uri =/lessons/:id)
            <LabContainer/>
        </div>
    );
}

export default LessonShow;