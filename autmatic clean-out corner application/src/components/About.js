import React from 'react'
import wm21 from "../images/wm21.png";
import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";
import p5 from "../images/p5.png";
import p6 from "../images/p6.png";


const About = () => {
    return (
        <>
            <div className="about-page">
            {/* <!-- ======= About Section ======= --> */}
    <section id="about" class="about">
      <div class="container">
      <div class="section-title">
          <span>Automatic Clean-out Corner</span>
          <h2>Automatic Clean-out Corner</h2>
          <p>An IOT based solution to garbage collection</p>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <img src={wm21} class="img-fluid" alt="" />
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 content">
            <h3>Managing our waste in a smarter manner is hugely important to the quality of our daily lives. </h3>
            <p class="font-italic">
            Automatic Clean-out Corner can contribute to improving inefficient waste management. Automatic Clean-out Corner help to create a cleaner, safer, more hygienic environment and   enhanced operational efficiency while reducing management costs, resources, and road-side emissions.


            </p>
            <ul>
              <li><i class="icofont-check-circled"></i> Enabling collection of garbage generation data</li>
              <li><i class="icofont-check-circled"></i> The waste segregation will be done with the help of Image Processing.</li>
              <li><i class="icofont-check-circled"></i>The waste level over the smart bin will be collected by sensors.</li>
              <li><i class="icofont-check-circled"></i>Once the high level of waste is detected, system will alert the authorities through GSM modules for immediate response.</li>
              <li><i class="icofont-check-circled"></i>An application will be developed for desired information.</li>

            </ul>
            <p>
            Automatic Clean-out Corner will ensure the cleanliness and greenish in the environment.
            </p>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End About Section --> */}


    {/* <!-- ======= Services Section ======= --> */}
    <section id="services" class="services section-bg">
      <div class="container">

        <div class="section-title">
          <span>Features</span>
          <h2>Features</h2>
          <p>Features of Automatic Clean-out Corner</p>
        </div>

        <div class="row">
        <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              {/* <div class="icon"><i class="bx bxl-dribbble"></i></div> */}
            <img src={p2} class="img-fluid" alt="" />
              <div class="icon"></div>
              <h4>Zero Touch Functionality</h4>
              <p>The Automatic Clean-out Corner is embedded with  Infrared Sensors. Once someone tries to throw the garbage, it will detect it and open and closed the led of the bin without any physical touch.</p>
            </div>
          </div>
        
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              {/* <div class="icon"><i class="bx bxl-dribbble"></i></div> */}
            <img src={p4} class="img-fluid" alt="" />
              <div class="icon"></div>
              <h4>Fill Level Control</h4>
              <p>The  communication module (allows notifications to be sent when the bin is ready to by emptied, or if there are any issues). They consist of IoT enabled sensors, which work as real-time indicators to determine if the bins are full or not, and help to customize the waste collection schedule accordingly.</p>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              {/* <div class="icon"><i class="bx bxl-dribbble"></i></div> */}
            <img src={p3} class="img-fluid" alt="" />
              <div class="icon"></div>
              <h4>Waste Compression</h4>
              <p>The When the waste inside a bin reaches a pre-set level, the trash compactor will be activated to compress the waste allowing the bin to hold up to eight times more waste and reduce the collection frequency by up to 80%. </p>
            </div>
          </div>
          </div>
          <br/><br/>
          <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              {/* <div class="icon"><i class="bx bxl-dribbble"></i></div> */}
            <img src={p1} class="img-fluid" alt="" />
              <div class="icon"></div>
              <h4>Ultrasonic Level Sensors</h4>
              <p>The smart Ultrasonic Level Sensors embedded inside the smart bin detects the fill-level of bins and send data to the cloud-based monitoring and data analytics platform.</p>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              {/* <div class="icon"><i class="bx bxl-dribbble"></i></div> */}
            <img src={p5} class="img-fluid" alt="" />
              <div class="icon"></div>
              <h4>Display Monitor</h4>
              <p>The Displays Monitor displays fill level of the dustbin, the Red light indicates that the dustbin is full and the user can’t use the dustbin until is being emptied by the authorities.</p>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
            <img src={p6} class="img-fluid" alt="" />
              <div class="icon"></div>
              <h4>Waste Segregation With Image Processing</h4>
              <p>Segregator using Image processing" proposes a smart waste sorting system for domestic level which consists of hardware and a software system based on image processing. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- End Services Section --> */}
            </div>
        </>
    )
}

export default About
