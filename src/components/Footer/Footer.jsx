import React from 'react'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/footer.css'

const quickLInks = [
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/#',
    display:'Privacy Policy'
  },
  {
    path:'/cars',
    display:'Car Listing'
  },
  {
    path:'/blogs',
    display:'Blogs'
  },
  {
    path:'/contact',
    display:'Contact'
  }
]

const Footer = () => {

  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4' md='4' sm='6'>
            <div className="logo footer__logo">
                <h1>
                  <Link to='/home'>
                    <i class="ri-car-line"></i>
                    <span>Rent Car <br />Service</span>
                  </Link>
                  </h1>
              </div>

              <p className="footer__logo__content">
                This is a brand new car. Detail below.
              </p>
          </Col>

          <Col lg='2' md='4' sm='6'>
            <div className="mb-4">
              <h5 className="footer__link__title">Quick Links</h5>
              <ListGroup>
                {
                  quickLInks.map((item, index)=>(
                    <ListGroupItem key={index} className='p-0 mt-3 quick__link'>
                      <Link to={item.path}>{item.display}</Link>
                    </ListGroupItem>
                  ))
                }
              </ListGroup>
            </div>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <div className="mb-4">
              <h5 className="footer__link__title">Head Office</h5>
              <p className="office__info">123 Mexico st, Addis Ababa, Ethiopia</p>
              <p className="office__info">Phone : +251977054500</p>
              <p className="office__info">Email : samueltilahun0991@gmail.com</p>
              <p className="office__info">Office Time: 8am - 12pm</p>
            </div>
          </Col>

          <Col lg='3' md='4'>
            <div className='mb-4'>
              <h5 className="footer__link__title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder='Email' />
                <span><i class='ri-send-plane-line'></i></span>
              </div>
            </div>
          </Col>

          <Col lg='12'>
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year}, Developed by Samuel Tilahu. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer