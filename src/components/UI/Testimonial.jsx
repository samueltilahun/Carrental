
import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../Assets/all-images/ava-1.jpg'
import ava02 from '../../Assets/all-images/ava-2.jpg'
import ava03 from '../../Assets/all-images/ava-3.jpg'
import ava04 from '../../Assets/all-images/ava-4.jpg'

const Testimonial = () => { 

  const settings = {
    dots: true,
    ininite: true,
    autoplay: true,
    speed: 3000,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breackpoint: 911,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breackpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
        },
      },
    ],
  };

  return ( <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p className="section__description">
            Work with us
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
            <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

            <div>
                <h6 className="mb-0 mt-3">Zekariyas T.</h6>
                <p className="section__description">Customer</p>
            </div>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p className="section__description">
            Work with us
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
            <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

            <div>
                <h6 className="mb-0 mt-3">Zekariyas T.</h6>
                <p className="section__description">Customer</p>
            </div>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p className="section__description">
            Work with us
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
            <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

            <div>
                <h6 className="mb-0 mt-3">Zekariyas T.</h6>
                <p className="section__description">Customer</p>
            </div>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p className="section__description">
            Work with us
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
            <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

            <div>
                <h6 className="mb-0 mt-3">Zekariyas T.</h6>
                <p className="section__description">Customer</p>
            </div>
        </div>
    </div>
  </Slider>
  )
}

export default Testimonial