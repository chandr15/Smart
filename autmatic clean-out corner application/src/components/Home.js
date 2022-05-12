import React from 'react'
import logo from "../images/wm.png";

const Home = () => {
    return (
        <>
            <div className="about-page">
            <section id="header" class="d-flex align-items-center">
      <div class="container-fluid nav_bg">
        <div class="row">
          <div class="col-10 mx-auto">
            <div class="row">
              <div
                class="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"
              >
                <h1>
                  Welcome to
                  <strong class="brand-name">Automatic Clean-out Corner</strong>
                </h1>
                <h2 class="my-3">Waste Management System of New Era</h2>
                <div class="mt-3">
                  <a href="/login" class="btn-get-started"> Login </a>
                </div>
              </div>
              <div class="col-lg-6 order-1 order-lg-2 header-img">
                <img
                  src={logo}
                  class="img-fluid animated"
                  alt="home img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
            </div>
        </>
    )
}

export default Home
