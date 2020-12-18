import React, { useEffect } from "react"
import CourseTile from '../components/CourseTile.js'
import { fetchingCourses } from '../actions'
import { useSelector, useDispatch } from 'react-redux'


function CourseIndex(props) {
    const dispatch = useDispatch();
    const courses = useSelector(state => state.courses)

    //fetch courses 
    useEffect(() => {
      const loadCourses = async () => {
       // setIsLoading(true); if we want to add loading bar
        await dispatch(fetchingCourses())
       // setIsLoading(false);
      }
      loadCourses()},[dispatch])

      const displayCourses = () => {
      return courses.map(course => <li>{course.name}</li>)
      }

    return (
        <div>
            <h2>Courses</h2>
            select a course tile.... redirect to LessonsIndex 
            <ul>{displayCourses()}</ul>
           
            <CourseTile/>
            
        </div>
    );
}

export default CourseIndex;