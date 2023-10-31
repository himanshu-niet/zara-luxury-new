import React from 'react'
import Haeder from '../components/Common/Haeder'
import Footer from '../components/Common/Footer'
import Bread from '../components/Common/Bread'

const Cart = () => {
  return (
    <>
    <Haeder/>
    <Bread page={"Cart"}/>

  <section className="ftco-section ftco-cart">
    <div className="container">
      <div className="row">
        <div className="col-md-12 ">
          <div className="cart-list">
            <table className="table">
              <thead className="thead-primary">
                <tr className="text-center">
                  <th>&nbsp;</th>
                  <th>&nbsp;</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
              <tr className="text-center">
              <td className="product-remove">
                <a href="#">
                  <span className="ion-ios-close" />
                </a>
              </td>
              <td className="image-prod">
                <div
                  className="img"
                  style={{ backgroundImage: "url(images/product-4.jpg)" }}
                />
              </td>
              <td className="product-name">
                <h3>Nike Free RN 2019 iD</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries
                </p>
              </td>
              <td className="price">₹15.70</td>

              

              <td className="quantity">
              <div className="input-group d-flex  mb-3">
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
              </td>
              <td className="total">₹15.70</td>
            </tr>
                
                <tr className="text-center">
                  <td className="product-remove">
                    <a href="#">
                      <span className="ion-ios-close" />
                    </a>
                  </td>
                  <td className="image-prod">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/product-4.jpg)" }}
                    />
                  </td>
                  <td className="product-name">
                    <h3>Nike Free RN 2019 iD</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries
                    </p>
                  </td>
                  <td className="price">₹15.70</td>

                  

                  <td className="quantity">
                  <div className="input-group d-flex  mb-3">
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
                  </td>
                  <td className="total">₹15.70</td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row justify-content-start">
        <div className="col col-lg-5 col-md-6 mt-5 cart-wrap ">
          <div className="cart-total mb-3">
            <h3>Cart Totals</h3>
            <p className="d-flex">
              <span>Subtotal</span>
              <span>₹20.60</span>
            </p>
            <p className="d-flex">
              <span>Delivery</span>
              <span>₹0.00</span>
            </p>
            <p className="d-flex">
              <span>Discount</span>
              <span>₹3.00</span>
            </p>
            <hr />
            <p className="d-flex total-price">
              <span>Total</span>
              <span>₹17.60</span>
            </p>
          </div>
          <p className="text-center">
            <a href="/checkout" className="btn btn-primary py-3 px-4">
              Proceed to Checkout
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</>

  )
}

export default Cart