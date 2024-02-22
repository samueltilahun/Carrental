import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import '../../styles/about-section.css'
import aboutImg from '../../Assets/all-images/cars-img/bmw-offer.png'

const AboutSection = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="about__section__content">
                        <h4 className="section__subtitle">About Us</h4>
                        <h2 className="section__title">Welcome to car rent service</h2>
                        <p className="section__description">You will get the best car service with us. Choose whatever you like to rent. We are pleased to serve you with the best car.</p>

                    <div className="about__section__item d-flex align-items-center">
                        <p className="section__description d-flex align-items-center gab-2">
                            <i className="ri-checkbox-circle-line"></i>Reliable vehicles
                        </p>

                        <p className="section__description d-flex align-items-center gab-2">
                            <i className="ri-checkbox-circle-line"></i>Easy booking process
                        </p>
                    </div>

                    <div className="about__section__item d-flex align-items-center">
                        <p className="section__description d-flex align-items-center gab-2">
                            <i className="ri-checkbox-circle-line"></i>Competitive rates
                        </p>

                        <p className="section__description d-flex align-items-center gab-2">
                            <i className="ri-checkbox-circle-line"></i>Excellent customer service
                        </p>
                    </div>
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div className="about__img">
                        <img src={aboutImg} alt="" className="w-100" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default AboutSection