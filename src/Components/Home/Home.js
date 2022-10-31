import React from 'react';
import './Home.css'
import signature from '../../img/signature-clipart.png'
import background from '../../img/1.jpg'
import background1 from '../../img/bg7.jpg'
import Button from 'react-bootstrap/Button'
import PopularCourses from '../PopularCourses/PopularCourses';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='d-flex py-5 bg-light align-items-center'>
                <div className='w-50   content text-start d-flex justify-content-end'>
                    <div className='w-75 '>
                        <h1 className='mb-4'>Welcome <span className='fw-light'>to Scrate Education</span></h1>
                        <p className=''>There are coffee shops, sports, restaurants and a multitude of great study spots. Whether you are a prospective student or already taking classes, feel free to explore and see what makes “the campus on the hill” so special.</p>
                        <p>
                            – <strong>John S. Hogvaer</strong>, <span>Founder</span>
                        </p>
                        <img className='w-50' src={signature} alt="signature" />
                    </div>
                </div>
                <div className='w-50 '>
                    <img className='rounded-3 w-100 ' src={background} alt="" />
                </div>
            </div>
            <div className='Trusted'>
                <div className="trusted-content w-50  text-light py-5">
                    <h1 className='fs-1 fw-light mb-3'>Trusted by Over <strong>6000+</strong> Students</h1>
                    <p>We have a fully qualified and very well educated teaching staff, continuous student counseling, and a very effective and enthusiastic student support staff.
                    </p>
                    <Link to='/courses'>
                        <Button variant='' className='mt-2 bnt-get-started py-3 px-5 rounded-5' >Get Started</Button>
                    </Link>
                </div>
            </div>
            <PopularCourses />
        </div>
    );
};

export default Home;