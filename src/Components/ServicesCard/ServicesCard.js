import React from 'react';
import { Col, Card } from 'react-bootstrap';
import './ServicesCard.css'

const ServicesCard = (props) => {
    const { courseName, trainer, trainerImg, subject, totalSeat, totalLesson, price, courseThumbnail, rating } = props.course;
    return (
        <Col>
            <Card className='servicesCard'>
                <Card.Img variant="top" src={courseThumbnail} />
                <Card.Body className='text-start'>
                    <p className='m-0'><small>{subject}</small></p>
                    <Card.Title className='fw-bolder'>{courseName}</Card.Title>
                    <div className='d-flex justify-content-between'>
                        <div>{rating}</div>
                        <div className='price rounded-5'>${price}</div>
                    </div>
                </Card.Body>
                <Card.Footer className='card-footer d-flex justify-content-between'>
                    <p>{totalLesson} lesson</p>
                    <p>{totalSeat} Seats</p>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ServicesCard;