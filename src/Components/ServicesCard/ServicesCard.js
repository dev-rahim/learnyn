import React from 'react';
import { Col, Card } from 'react-bootstrap';
import Rating from 'react-rating'
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
                        <Rating className='Rating'
                            initialRating={rating}
                            readonly
                            emptySymbol={<p className='me-2'><i class="fa-regular fa-star"></i></p>}
                            fullSymbol={<p><i class="fa-solid fa-star"></i></p>} />
                        <div className='price rounded-5'>${price}</div>
                    </div>
                </Card.Body>
                <Card.Footer className='card-footer d-flex justify-content-between'>
                    <p><i class="fa-brands fa-readme"></i>    {totalLesson} lesson</p>
                    <p>{totalSeat} Seats  <i class="fa-solid fa-user-group"></i></p>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ServicesCard;