import React, { useEffect, useState } from 'react'
import Footer from '../components/Common/Footer'
import Haeder from '../components/Common/Haeder'
import Bread from '../components/Common/Bread'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../utils/config'
import Loding from '../components/Common/Loding'

const ProductSingle = () => {

  const {productId}=useParams();

  const [product, setProduct] = useState();

  useEffect(() => {

    axios.get(`${BASE_URL}/product/${productId}`)
      .then((respose) => {
        setProduct(respose.data.product)
        console.log(respose.data.product)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])

  if(!product) return <Loding/>;

  return (
    <>

    <Haeder/>
  
    
    <Bread page={"Product Detail"}/>
  
  <section className="ftco-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mb-5 ">
          <a href={product.images.url} className="image-popup prod-img-bg">
            <img
              src={product.images.url}
              className="img-fluid"
              alt="Colorlib Template"
            />
          </a>
        </div>
        <div className="col-lg-6 product-details pl-md-5 ">
          <h3>{product.title}</h3>
          <div className="rating d-flex">
            <p className="text-left mr-4">
              <a href="#" className="mr-2">
                5.0
              </a>
              <a href="#">
                <span className="ion-ios-star-outline" />
              </a>
              <a href="#">
                <span className="ion-ios-star-outline" />
              </a>
              <a href="#">
                <span className="ion-ios-star-outline" />
              </a>
              <a href="#">
                <span className="ion-ios-star-outline" />
              </a>
              <a href="#">
                <span className="ion-ios-star-outline" />
              </a>
            </p>
            <p className="text-left mr-4">
              <a href="#" className="mr-2" style={{ color: "#000" }}>
                100 <span style={{ color: "#bbb" }}>Rating</span>
              </a>
            </p>
            <p className="text-left">
              <a href="#" className="mr-2" style={{ color: "#000" }}>
                500 <span style={{ color: "#bbb" }}>Sold</span>
              </a>
            </p>
          </div>
          <p className="price">
            <span>${product.price}</span>
          </p>
          <p>
          {product.desc}
          </p>
        
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="form-group d-flex">
                <div className="select-wrap">
                  <div className="icon">
                    <span className="ion-ios-arrow-down" />
                  </div>
                  <select name="" id="" className="form-control">
                    <option value="">Small</option>
                    <option value="">Medium</option>
                    <option value="">Large</option>
                    <option value="">Extra Large</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-100" />
            <div className="input-group col-md-6 d-flex mb-3">
              <span className="input-group-btn mr-2">
                <button
                  type="button"
                  className="quantity-left-minus btn"
                  data-type="minus"
                  data-field=""
                >
                  <i className="ion-ios-remove" />
                </button>
              </span>
              <input
                type="text"
                id="quantity"
                name="quantity"
                className="quantity form-control input-number"
                defaultValue={1}
                min={1}
                max={100}
              />
              <span className="input-group-btn ml-2">
                <button
                  type="button"
                  className="quantity-right-plus btn"
                  data-type="plus"
                  data-field=""
                >
                  <i className="ion-ios-add" />
                </button>
              </span>
            </div>
            <div className="w-100" />
            <div className="col-md-12">
              <p style={{ color: "#000" }}>
              {product.stock+" "}
              piece available</p>
            </div>
          </div>
          <p>
            <Link to={`/product/${product._id}`} className="btn btn-black py-3 px-5 mr-2">
              Add to Cart
            </Link>
            <Link to={`/cart`}  className="btn btn-primary py-3 px-5">
              Buy now
            </Link>
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 nav-link-wrap">
          <div
            className="nav nav-pills d-flex text-center"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="nav-link  active mr-lg-1"
              id="v-pills-1-tab"
              data-toggle="pill"
              href="#v-pills-1"
              role="tab"
              aria-controls="v-pills-1"
              aria-selected="true"
            >
            Reviews
            </a>
            
          </div>
        </div>
        <div className="col-md-12 tab-wrap">
          <div className="tab-content bg-light" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-1"
              role="tabpanel"
              aria-labelledby="day-1-tab"
            >
            <div className="row p-4">
            <div className="col-md-7">
              <h3 className="mb-4">23 Reviews</h3>
              <div className="review">
                <div
                  className="user-img"
                  style={{ backgroundImage: "url(images/person_1.jpg)" }}
                />
                <div className="desc">
                  <h4>
                    <span className="text-left">Jacob Webb</span>
                    <span className="text-right">14 March 2018</span>
                  </h4>
                  <p className="star">
                    <span>
                      <i className="ion-ios-star-outline" />
                      <i className="ion-ios-star-outline" />
                      <i className="ion-ios-star-outline" />
                      <i className="ion-ios-star-outline" />
                      <i className="ion-ios-star-outline" />
                    </span>
                    <span className="text-right">
                      <a href="#" className="reply">
                        <i className="icon-reply" />
                      </a>
                    </span>
                  </p>
                  <p>
                    When she reached the first hills of the Italic
                    Mountains, she had a last view back on the skyline of
                    her hometown Bookmarksgrov
                  </p>
                </div>
              </div>
              <div className="review">
                <div
                  className="user-img"
                  style={{ backgroundImage: "url(images/person_2.jpg)" }}
                />
                <div className="desc">
                  <h4>
                    <span className="text-left">Jacob Webb</span>
                    <span className="text-right">14 March 2018</span>
                  </h4>
                  <p className="star">
                    <span>
                      <i className="ion-ios-star-outline" />
                      <i className="ion-ios-star-outline" />
                      <i className="ion-ios-star-outline" />
                      <i className="ion-ios-star-outline" />
                      <i className="ion-ios-star-outline" />
                    </span>
                    <span className="text-right">
                      <a href="#" className="reply">
                        <i className="icon-reply" />
                      </a>
                    </span>
                  </p>
                  <p>
                    When she reached the first hills of the Italic
                    Mountains, she had a last view back on the skyline of
                    her hometown Bookmarksgrov
                  </p>
                </div>
              </div>
              <div className="review">
                <div
                  className="user-img"
                  style={{ backgroundImage: "url(images/person_3.jpg)" }}
                />
                <div className="desc">
                  <h4>
                    <span className="text-left">Jacob Webb</span>
                    <span className="text-right">14 March 2018</span>
                  </h4>
                  <p className="star">
                    <span>
                      <i className="ion-ios-star-outline" />
                      <i className="ion-ios-star-outline" />
                      <i className="ion-ios-star-outline" />
                      <i className="ion-ios-star-outline" />
                      <i className="ion-ios-star-outline" />
                    </span>
                    <span className="text-right">
                      <a href="#" className="reply">
                        <i className="icon-reply" />
                      </a>
                    </span>
                  </p>
                  <p>
                    When she reached the first hills of the Italic
                    Mountains, she had a last view back on the skyline of
                    her hometown Bookmarksgrov
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="rating-wrap">
                <h3 className="mb-4">Give a Review</h3>
                <p className="star">
                  <span>
                    <i className="ion-ios-star-outline" />
                    <i className="ion-ios-star-outline" />
                    <i className="ion-ios-star-outline" />
                    <i className="ion-ios-star-outline" />
                    <i className="ion-ios-star-outline" />
                    (98%)
                  </span>
                  <span>20 Reviews</span>
                </p>
                <p className="star">
                  <span>
                    <i className="ion-ios-star-outline" />
                    <i className="ion-ios-star-outline" />
                    <i className="ion-ios-star-outline" />
                    <i className="ion-ios-star-outline" />
                    <i className="ion-ios-star-outline" />
                    (85%)
                  </span>
                  <span>10 Reviews</span>
                </p>
                <p className="star">
                  <span>
                    <i className="ion-ios-star-outline" />
                    <i className="ion-ios-star-outline" />
                    <i className="ion-ios-star-outline" />
                    <i className="ion-ios-star-outline" />
                    <i className="ion-ios-star-outline" />
                    (98%)
                  </span>
                  <span>5 Reviews</span>
                </p>
                <p className="star">
                  <span>
                    <i className="ion-ios-star-outline" />
                    <i className="ion-ios-star-outline" />
                    <i className="ion-ios-star-outline" />
                    <i className="ion-ios-star-outline" />
                    <i className="ion-ios-star-outline" />
                    (98%)
                  </span>
                  <span>0 Reviews</span>
                </p>
                <p className="star">
                  <span>
                    <i className="ion-ios-star-outline" />
                    <i className="ion-ios-star-outline" />
                    <i className="ion-ios-star-outline" />
                    <i className="ion-ios-star-outline" />
                    <i className="ion-ios-star-outline" />
                    (98%)
                  </span>
                  <span>0 Reviews</span>
                </p>
              </div>
            </div>
          </div>
            </div>
           
           
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</>

  )
}

export default ProductSingle