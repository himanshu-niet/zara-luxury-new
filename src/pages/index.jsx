import React from 'react'
import Haeder from '../components/Common/Haeder'
import Footer from '../components/Common/Footer'
import HomeProduct from '../components/Product/HomeProduct'

const Index = () => {
  return (
    <>
   <Haeder/>
    {/* END nav */}
    <section id="home-section" className="hero">
      <div className="home-slider owl-carousel">
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
                className="one-forth d-flex align-items-center "
                data-scrollax=" properties: { translateY: '70%' }"
              >
                <div className="text">
                  <span className="subheading">#New Arrival</span>
                  <div className="horizontal">
                    <h1 className="mb-4 mt-3">Shoes Collection 2019</h1>
                    <p className="mb-4">
                      A small river named Duden flows by their place and supplies
                      it with the necessary regelialia. It is a paradisematic
                      country.
                    </p>
                    <p>
                      <a href="#" className="btn-custom">
                        Discover Now
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                className="one-forth d-flex align-items-center "
                data-scrollax=" properties: { translateY: '70%' }"
              >
                <div className="text">
                  <span className="subheading">#New Arrival</span>
                  <div className="horizontal">
                    <h1 className="mb-4 mt-3">New Shoes Winter Collection</h1>
                    <p className="mb-4">
                      A small river named Duden flows by their place and supplies
                      it with the necessary regelialia. It is a paradisematic
                      country.
                    </p>
                    <p>
                      <a href="#" className="btn-custom">
                        Discover Now
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section ftco-no-pt ftco-no-pb">
      <div className="container">
        <div className="row no-gutters ftco-services">
          <div className="col-lg-4 text-center d-flex align-self-stretch ">
            <div className="media block-6 services p-4 py-md-5">
              <div className="icon d-flex justify-content-center align-items-center mb-4">
                <span className="flaticon-bag" />
              </div>
              <div className="media-body">
                <h3 className="heading">Free Shipping</h3>
                <p>
                  Far far away, behind the word mountains, far from the countries
                  Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center d-flex align-self-stretch ">
            <div className="media block-6 services p-4 py-md-5">
              <div className="icon d-flex justify-content-center align-items-center mb-4">
                <span className="flaticon-customer-service" />
              </div>
              <div className="media-body">
                <h3 className="heading">Support Customer</h3>
                <p>
                  Far far away, behind the word mountains, far from the countries
                  Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center d-flex align-self-stretch ">
            <div className="media block-6 services p-4 py-md-5">
              <div className="icon d-flex justify-content-center align-items-center mb-4">
                <span className="flaticon-payment-security" />
              </div>
              <div className="media-body">
                <h3 className="heading">Secure Payments</h3>
                <p>
                  Far far away, behind the word mountains, far from the countries
                  Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
<HomeProduct/>

    <section className="ftco-section ftco-choose ftco-no-pb ftco-no-pt">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-4">
            <div
              className="choose-wrap divider-one img p-5 d-flex align-items-end"
              style={{ backgroundImage: "url(images/choose-1.jpg)" }}
            >
              <div className="text text-center text-white px-2">
                <span className="subheading">Men's Shoes</span>
                <h2>Men's Collection</h2>
                <p>
                  Separated they live in Bookmarksgrove right at the coast of the
                  Semantics, a large language ocean.
                </p>
                <p>
                  <a href="#" className="btn btn-black px-3 py-2">
                    Shop now
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row no-gutters choose-wrap divider-two align-items-stretch">
              <div className="col-md-12">
                <div
                  className="choose-wrap full-wrap img align-self-stretch d-flex align-item-center justify-content-end"
                  style={{ backgroundImage: "url(images/choose-2.jpg)" }}
                >
                  <div className="col-md-7 d-flex align-items-center">
                    <div className="text text-white px-5">
                      <span className="subheading">Women's Shoes</span>
                      <h2>Women's Collection</h2>
                      <p>
                        Separated they live in Bookmarksgrove right at the coast
                        of the Semantics, a large language ocean.
                      </p>
                      <p>
                        <a href="#" className="btn btn-black px-3 py-2">
                          Shop now
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <div className="choose-wrap wrap img align-self-stretch bg-light d-flex align-items-center">
                      <div className="text text-center px-5">
                        <span className="subheading">Summer Sale</span>
                        <h2>Extra 50% Off</h2>
                        <p>
                          Separated they live in Bookmarksgrove right at the coast
                          of the Semantics, a large language ocean.
                        </p>
                        <p>
                          <a href="#" className="btn btn-black px-3 py-2">
                            Shop now
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="choose-wrap wrap img align-self-stretch d-flex align-items-center"
                      style={{ backgroundImage: "url(images/choose-3.jpg)" }}
                    >
                      <div className="text text-center text-white px-5">
                        <span className="subheading">Shoes</span>
                        <h2>Best Sellers</h2>
                        <p>
                          Separated they live in Bookmarksgrove right at the coast
                          of the Semantics, a large language ocean.
                        </p>
                        <p>
                          <a href="#" className="btn btn-black px-3 py-2">
                            Shop now
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    <section className="ftco-section testimony-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="services-flow">
              <div className="services-2 p-4 d-flex ">
                <div className="icon">
                  <span className="flaticon-bag" />
                </div>
                <div className="text">
                  <h3>Free Shipping</h3>
                  <p className="mb-0">
                    Separated they live in. A small river named Duden flows
                  </p>
                </div>
              </div>
              <div className="services-2 p-4 d-flex ">
                <div className="icon">
                  <span className="flaticon-heart-box" />
                </div>
                <div className="text">
                  <h3>Valuable Gifts</h3>
                  <p className="mb-0">
                    Separated they live in. A small river named Duden flows
                  </p>
                </div>
              </div>
              <div className="services-2 p-4 d-flex ">
                <div className="icon">
                  <span className="flaticon-payment-security" />
                </div>
                <div className="text">
                  <h3>All Day Support</h3>
                  <p className="mb-0">
                    Separated they live in. A small river named Duden flows
                  </p>
                </div>
              </div>
              <div className="services-2 p-4 d-flex ">
                <div className="icon">
                  <span className="flaticon-customer-service" />
                </div>
                <div className="text">
                  <h3>All Day Support</h3>
                  <p className="mb-0">
                    Separated they live in. A small river named Duden flows
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="heading-section  mb-5">
              <h2 className="mb-4">Our satisfied customer says</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in
              </p>
            </div>
            <div className="carousel-testimony owl-carousel">
              <div className="item">
                <div className="testimony-wrap">
                  <div
                    className="user-img mb-4"
                    style={{ backgroundImage: "url(images/person_1.jpg)" }}
                  >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left" />
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-4 pl-4 line">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Garreth Smith</p>
                    <span className="position">Marketing Manager</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap">
                  <div
                    className="user-img mb-4"
                    style={{ backgroundImage: "url(images/person_2.jpg)" }}
                  >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left" />
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-4 pl-4 line">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Garreth Smith</p>
                    <span className="position">Interface Designer</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap">
                  <div
                    className="user-img mb-4"
                    style={{ backgroundImage: "url(images/person_3.jpg)" }}
                  >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left" />
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-4 pl-4 line">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Garreth Smith</p>
                    <span className="position">UI Designer</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap">
                  <div
                    className="user-img mb-4"
                    style={{ backgroundImage: "url(images/person_1.jpg)" }}
                  >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left" />
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-4 pl-4 line">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Garreth Smith</p>
                    <span className="position">Web Developer</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap">
                  <div
                    className="user-img mb-4"
                    style={{ backgroundImage: "url(images/person_1.jpg)" }}
                  >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left" />
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-4 pl-4 line">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Garreth Smith</p>
                    <span className="position">System Analyst</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-gallery">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 heading-section text-center mb-4 ">
            <h2 className="mb-4">Follow Us On Instagram</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated they
              live in
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0">
        <div className="row no-gutters">
          <div className="col-md-4 col-lg-2 ">
            <a
              href="images/gallery-1.jpg"
              className="gallery image-popup img d-flex align-items-center"
              style={{ backgroundImage: "url(images/gallery-1.jpg)" }}
            >
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span className="icon-instagram" />
              </div>
            </a>
          </div>
          <div className="col-md-4 col-lg-2 ">
            <a
              href="images/gallery-2.jpg"
              className="gallery image-popup img d-flex align-items-center"
              style={{ backgroundImage: "url(images/gallery-2.jpg)" }}
            >
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span className="icon-instagram" />
              </div>
            </a>
          </div>
          <div className="col-md-4 col-lg-2 ">
            <a
              href="images/gallery-3.jpg"
              className="gallery image-popup img d-flex align-items-center"
              style={{ backgroundImage: "url(images/gallery-3.jpg)" }}
            >
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span className="icon-instagram" />
              </div>
            </a>
          </div>
          <div className="col-md-4 col-lg-2 ">
            <a
              href="images/gallery-4.jpg"
              className="gallery image-popup img d-flex align-items-center"
              style={{ backgroundImage: "url(images/gallery-4.jpg)" }}
            >
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span className="icon-instagram" />
              </div>
            </a>
          </div>
          <div className="col-md-4 col-lg-2 ">
            <a
              href="images/gallery-5.jpg"
              className="gallery image-popup img d-flex align-items-center"
              style={{ backgroundImage: "url(images/gallery-5.jpg)" }}
            >
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span className="icon-instagram" />
              </div>
            </a>
          </div>
          <div className="col-md-4 col-lg-2 ">
            <a
              href="images/gallery-6.jpg"
              className="gallery image-popup img d-flex align-items-center"
              style={{ backgroundImage: "url(images/gallery-6.jpg)" }}
            >
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span className="icon-instagram" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
   <Footer/>
  </>
  

  )
}

export default Index