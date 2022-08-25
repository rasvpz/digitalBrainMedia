import React from 'react'
import bannerProduct from './assest/img/bannerProduct.png'
import img9 from './assest/img/9.jpg'

const productScreen = () => {
  return (
    <div>
      <div className='container'>
      <div className="breadcrumb-area">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-12">
          <img src={bannerProduct} alt="" />
        </div>
      </div>
    </div>
  </div>

  <section className="our-products-area section-padding-100">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading text-center">
                  <p>Featured Products</p>
                  <h2><span>Our Product</span> Are Highest Quality</h2>
                  <img src="img/core-img/decor2.png" alt="" />
                </div>
              </div>
            </div>

            <div className="row">

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-product-area mb-20 img-thumbnail">
                  <div className="product-thumbnail">
                    <img src={img9} alt="" />
                    <span className="product-tags">Hot</span>
                    
                  </div>
                  <div className="product-desc text-center pt-4 pb-4">
                    <a href="#" className="product-title">Strawberry</a>
                    <h6 className="price">$17.99</h6>
                  </div>
                </div>
              </div>

          </div>
          </div>
      </section>

</div>
    </div>
  )
}

export default productScreen
