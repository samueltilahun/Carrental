import React from 'react'

import HeroSlider from '../components/UI/HeroSlider'
import Helmet from '../components/Helmet/Helmet'

import { Container, Row, Col } from 'reactstrap'
import FindCarForm from '../components/UI/FindCarForm'
import '../styles/Find-car-form.css'
import AboutSection from '../components/UI/AboutSection'
import About from './About'
import ServicesList from '../components/UI/ServicesList'
import carData from '../Assets/data/carData'
import CarItem from '../components/UI/CarItem'  
import BecomeDriverSection from '../components/UI/BecomeDriverSection'
import Testimonial from '../components/UI/Testimonial' 
import BlogList from '../components/UI/BlogList'

const Home = () => {
  return (
    <Helmet title="Home">
      
      
      {/*  hero section  */}
      <section className="p-0 hero__slider__section">
        <HeroSlider/>

        <div className="hero__form">
          <Container>
            
            <Row className="form__row">
              <Col lg='4' md='4'>
                <div className="find__cars__left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg='8' md='8' sm='12'>
                <FindCarForm/>
              </Col>
            </Row>

          </Container>
        </div>

      </section>
      {/* About section */}
      <AboutSection/>

      {/* Services section */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center'>
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* Car offer section */}

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>
            {
              carData.slice(0,6 ).map(item=>(
                <CarItem item={item} key={item.id} />
              ))
            }
          </Row>
        </Container>
      </section>
      {/* become a driver section */}
        <BecomeDriverSection />

      {/*  Testimonial section */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-4 text-center'>
              <h6 className="section__subtitle">Our Clients Say</h6>
              <h4 className="section__title">Testimonials</h4>
            </Col>
            <Testimonial/>
          </Row>
        </Container>
      </section>

      {/* Blogs section */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center'>
              <h6 className="section__subtitle">Explore Our Blogs</h6>
              <h4 className="section__title">Our Latest Blogs</h4>
            </Col>
            <BlogList/>
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Home