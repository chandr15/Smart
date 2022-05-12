import React from 'react'
import logo from "../images/wm.png";
import shi from "../images/shiv.jpg";
import nik from "../images/nik.jpeg";
import adi from "../images/adi.jpeg";
import ani from "../images/ani.jpeg";
import jit from "../images/jit.jpeg";


const Team = () => {
    return (
        <>
            <div className="login-page">
    <section id="team" class="team section-bg">
      <div class="container">

        <div class="section-title">
          <span>Team</span>
          <h2>Team</h2>
          <p>Our Team of Developers and Tech Specialist's</p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src={shi} style={{height:"500px", width:"350px"}} alt="" />
              <h4>Shivam Sharma</h4>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src={adi} style={{height:"500px", width:"350px"}}alt="" />
              <h4>Aditi Chandra</h4>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src={ani} style={{height:"500px"}}alt="" />
              <h4>Aniket Kulshreshtha</h4>
            </div>
          </div>

        </div>

      </div>
      {/* REPEAT */}
      
      <div class="container">
      <center>
        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src={jit} style={{height:"500px"}} alt="" />
              <h4>Jitin Kumar Singh</h4>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src={nik}style={{height:"500px"}} alt="" />
              <h4>Nikit Bansal</h4>
            </div>
          </div>

        </div></center>
      </div>
    </section>
            </div>
        </>
    )
}

export default Team
