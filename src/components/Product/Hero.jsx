import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section id="home-section" className="hero">
    <div className="home-slider owl-carousel">

    <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                <SwiperSlide>
                <div className="slider-item js-fullheight">
        <div className="overlay" />
        <div className="container-fluid p-0">
          <div
            className="row d-md-flex no-gutters slider-text align-items-center justify-content-end"
            data-scrollax-parent="true"
          >
            <img
              className="one-third order-md-last img-fluid"
              src="images/bg_1.png"
              alt=""
            />
            <div
              className="one-forth d-flex align-items-center ftco-animate"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <div className="text">
                <span className="subheading">#New Arrival</span>
                <div className="horizontal">
                  <h1 className="mb-4 mt-3">Women's Collection </h1>
                  <p className="mb-4">
                    A small river named Duden flows by their place and supplies it
                    with the necessary regelialia. It is a paradisematic country.
                  </p>
                  <p>
                    <Link to={"/products?category=womens"} className="btn-custom">
                      Discover Now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></SwiperSlide>

                <SwiperSlide>
                <div className="slider-item js-fullheight">
                <div className="overlay" />
                <div className="container-fluid p-0">
                  <div
                    className="row d-flex no-gutters slider-text align-items-center justify-content-end"
                    data-scrollax-parent="true"
                  >
                    <img
                      className="one-third order-md-last img-fluid"
                      src="images/bg_2.png"
                      alt=""
                    />
                    <div
                      className="one-forth d-flex align-items-center ftco-animate"
                      data-scrollax=" properties: { translateY: '70%' }"
                    >
                      <div className="text">
                        <span className="subheading">#New Arrival</span>
                        <div className="horizontal">
                          <h1 className="mb-4 mt-3">Men's Winter Collection</h1>
                          <p className="mb-4">
                            A small river named Duden flows by their place and supplies it
                            with the necessary regelialia. It is a paradisematic country.
                          </p>
                          <p>
                          <Link to={"/products?category=mens"}  className="btn-custom">
                              Discover Now
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                </SwiperSlide>
                  
                  
                  </Swiper>
      
  
    </div>
  </section>
  
  )
}

export default Hero