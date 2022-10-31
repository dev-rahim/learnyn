import React from 'react';
import { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import ServicesCard from '../ServicesCard/ServicesCard';
import './PopularCourses.css'
const PopularCourses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('/coursesData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className="popular-Courses container">
                <div className="d-flex flex-column align-items-center">
                    <h2 ><span className='fw-light'>Our Popular</span> Courses</h2>
                    <p className='w-50 fw-lighter'>Suspendisse sodales arcu velit, non pretium massa accumsan non. Proin accumsan placerat mauris sit amet condimentum. Morbi luctus risus tincidunt urna hendrerit mollis.</p>
                </div>
                <Row xs={1} md={4} className="g-4">
                    {
                        courses.map(course => <ServicesCard course={course} />).slice(0, 4)
                    }
                </Row>
            </div>
        </div>
    );
};

export default PopularCourses;