import React from 'react';
import useCourses from '../../hooks/useCourses';
import ServicesCard from '../ServicesCard/ServicesCard';
import { Row } from 'react-bootstrap'
import './Courses.css'
const Courses = () => {
    const [courses] = useCourses()
    return (
        <div className='container'>
            <Row xs={1} md={4} className="g-4 ">
                {
                    courses.map(course => <ServicesCard course={course} />)
                }
            </Row>
        </div>
    );
};

export default Courses;