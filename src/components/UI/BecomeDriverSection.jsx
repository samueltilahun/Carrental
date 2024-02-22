import React from 'react'
import '../../styles/become-driver.css'
import { Container, Row, Col } from 'reactstrap'
import driverImg from '../../Assets/all-images/toyota-offer-2.png'

const BecomeDriverSection = () => {
  return ( <section className='become__driver'>
    <Container>
        <Row>
            <Col lg='6' md='6' sm='12'>
                <img src={driverImg} alt="" className="w-100" />
            </Col>
            <Col lg='6' md='6' sm='12'>
                <h2 className="section__title become__driver__title">
                    Do You Want to Earn With Us? So Don't Be Late
                </h2>

                <button className="btn button__driver__btn mt-4">
                    Become a Driver
                </button>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default BecomeDriverSection