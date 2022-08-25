import React from "react";

const Home = (props) => {
  return (
    <>
      <div>
        <h1 className="mt-3">Welcome To Home Components</h1>
        <div className="container mt-5">
          <div className="row">
            <div className="col-8">
              <div className="main-cart">
                <div className="cart">
                  <div className="cart_wrapper item">
                    <div className="item-img">
                      <img src={require("../reduxImg/2.jpg")} alt="" />
                    </div>
                    <div className="item-data">
                      <h2>iPhone 11 pro</h2>

                      <div className="item-dealties">
                        <p>Brand:</p>
                        <span> Oppo</span>
                      </div>
                      <div className="item-dealties">
                        <p>Modal Number:</p>
                        <span>CPH2339</span>
                      </div>
                      <div className="item-dealties">
                        <p>Memory Storage:</p>
                        <span>128 GB</span>
                      </div>
                      <div className="item-dealties">
                        <p>CPU Speed: </p>
                        <span> 2.3 MHz</span>
                      </div>
                      <div className="item-price">
                        <h3>Price: </h3>
                        <h4>$2330</h4>
                      </div>
                      <div className="addbtn">
                        <button
                          onClick={() => {
                            props.autoToCartHandler({
                              name: "i phone",
                              price: 1250,
                            });
                          }}
                        >
                          {" "}
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
