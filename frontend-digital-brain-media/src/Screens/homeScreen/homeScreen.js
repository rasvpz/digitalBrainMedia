import React from 'react'
import banner from '../homeScreen/assest/img/1.png'
import img9 from '../homeScreen/assest/img/9.jpg'
import img10 from '../homeScreen/assest/img/10.jpg'
import img11 from '../homeScreen/assest/img/11.jpg'
import img12 from '../homeScreen/assest/img/12.jpg'
import img13 from '../homeScreen/assest/img/13.jpg'
import img15 from '../homeScreen/assest/img/15.jpg'  
import iconShirt from '../homeScreen/assest/img/iconShirt.png'
import iconPant from '../homeScreen/assest/img/iconPant.png'   
import iconShoes from '../homeScreen/assest/img/iconShoes.png'
const index = () => {
  return (
    <div>
         <div className="hero-area">
              <div className="welcome">

                <div className="single-welcome-slides" style={{height: "380px"}}>
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-12 col-lg-12">
                        <img src={banner} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="famie-benefits-area section-padding-100-0 pb-5">
              <div className="container">

                <div className="row justify-content-center">
                  <div className="col-12 col-sm-3 col-lg img-thumbnail">
                    <div className="single-benefits-area wow fadeInUp mb-50" data-wow-delay="100ms">
                      <img src="https://www.digitalbrain.co.in/wp-content/uploads/100-Value-for-the-money.png" style={{width:'100px', marginTop:'50px'}} alt="" />
                      <h5>100% value for the money</h5>
                    </div>
                  </div>

                  <div className="col-12 col-sm-3 col-lg  img-thumbnail">
                    <div className="single-benefits-area wow fadeInUp mb-50" data-wow-delay="300ms">
                      <img src="https://www.digitalbrain.co.in/wp-content/uploads/Delivery-Delay.png" style={{width:'100px', marginTop:'50px'}} alt="" />
                      <h5>Penalty enforcement in case of Delivery Delay</h5>
                    </div>
                  </div>

                  <div className="col-12 col-sm-3 col-lg img-thumbnail">
                    <div className="single-benefits-area wow fadeInUp mb-50" data-wow-delay="500ms">
                    <img src="https://www.digitalbrain.co.in/wp-content/uploads/SEO-Digital-Marketing-Services.png" style={{width:'100px', marginTop:'50px'}} alt="" />

                      <h5>SEO & Digital Marketing Services</h5>
                    </div>
                  </div>

                  <div className="col-12 col-sm-3 col-lg img-thumbnail">
                    <div className="single-benefits-area wow fadeInUp mb-50" data-wow-delay="700ms">
                    <img src="https://www.digitalbrain.co.in/wp-content/uploads/Coding-Version-Controls.png" style={{width:'100px', marginTop:'50px'}} alt="" />
                      <h5>Professional coding and version controls</h5>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div className="benefits-thumbnail mb-50">
                        <img src="img/bg-img/2.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

           

            <section className="farming-practice-area section-padding-50-40">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="section-heading text-center">
                      <p>Make the green world</p>
                      <h2><span>Farming Practices</span> To Preserve Land & Water</h2>
                      <img src="img/core-img/decor2.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="row">

                  <div className="col-12 col-sm-6 col-lg-4">
                    <div className="single-farming-practice-area mb-50 wow fadeInUp" data-wow-delay="100ms">
                      <div className="farming-practice-thumbnail">
                        <img src={img9} alt="" />
                      </div>
                      <div className="farming-practice-content text-center">
                        <div className="farming-icon">
                          <img src={iconShirt} alt="" />
                        </div>
                        <span>NEW ARRIVAL</span>
                        <h4>Stylish shirts for men</h4>
                        <p>Donec nec justo eget felis facilisis ferme ntum. Aliquam portitor mauris sit amet orci. donec salim...</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4">
                    <div className="single-farming-practice-area mb-50 wow fadeInUp" data-wow-delay="200ms">
                      <div className="farming-practice-thumbnail">
                        <img src={img10} alt="" />
                      </div>
                      <div className="farming-practice-content text-center">
                        <div className="farming-icon">
                          <img src={iconPant} alt="" />
                        </div>
                        <span>TENDZ OF THE MONTH</span>
                        <h4>Very unique style for fashion</h4>
                        <p>Donec nec justo eget felis facilisis ferme ntum. Aliquam portitor mauris sit amet orci. donec salim...</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4">
                    <div className="single-farming-practice-area mb-50 wow fadeInUp" data-wow-delay="300ms">
                      <div className="farming-practice-thumbnail">
                        <img src={img11} alt="" />
                      </div>
                      <div className="farming-practice-content text-center">
                        <div className="farming-icon">
                          <img src={iconShoes} alt="" />
                        </div>
                        <span>MOST SELLING PRODUCTS</span>
                        <h4>Sports items with variety</h4>
                        <p>Donec nec justo eget felis facilisis ferme ntum. Aliquam portitor mauris sit amet orci. donec salim...</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4">
                    <div className="single-farming-practice-area mb-50 wow fadeInUp" data-wow-delay="400ms">
                      <div className="farming-practice-thumbnail">
                        <img src={img12} alt="" />
                      </div>
                      <div className="farming-practice-content text-center">
                        <div className="farming-icon">
                          <img src="img/core-img/cereal.png" alt="" />
                        </div>
                        <span>MEN ACCESSORIES</span>
                        <h4>Imported leather items</h4>
                        <p>Donec nec justo eget felis facilisis ferme ntum. Aliquam portitor mauris sit amet orci. donec salim...</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4">
                    <div className="single-farming-practice-area mb-50 wow fadeInUp" data-wow-delay="500ms">
                      <div className="farming-practice-thumbnail">
                        <img src={img13} alt="" />
                      </div>
                      <div className="farming-practice-content text-center">
                        <div className="farming-icon">
                          <img src="img/core-img/sprout.png" alt="" />
                        </div>
                        <span>SMART PHONE</span>
                        <h4>With wide range selections</h4>
                        <p>Donec nec justo eget felis facilisis ferme ntum. Aliquam portitor mauris sit amet orci. donec salim...</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4">
                    <div className="single-farming-practice-area mb-50 wow fadeInUp" data-wow-delay="600ms">
                      <div className="farming-practice-thumbnail">
                        <img src={img15} alt="" />
                      </div>
                      <div className="farming-practice-content text-center">
                        <div className="farming-icon">
                          <img src="img/core-img/vegetable.png" alt="" />
                        </div>
                        <span>SPEAKERS & MICS</span>
                        <h4>Music for smart listening</h4>
                        <p>Donec nec justo eget felis facilisis ferme ntum. Aliquam portitor mauris sit amet orci. donec salim...</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>
    </div>
  )
}

export default index
