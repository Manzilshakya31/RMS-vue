import { Input } from "@mui/material";

const Heropage = () => {
  return (
    <div>
      {/* <div id="preloader">
        <i className="circle-preloader"></i>
        <img src="img/core-img/salad.png" alt="" />
      </div> */}

      <div className="search-wrapper">
        <div className="close-btn">
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="#" method="post">
                <Input
                  type="search"
                  name="search"
                  placeholder="Type any keywords..."
                />
                <button type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <header className="header-area">
        <div className="top-header-area">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-between">
              <div className="col-12 col-sm-6">
                <div className="breaking-news">
                  <div id="breakingNewsTicker" className="ticker">
                    <ul>
                      <li>
                        <a href="#">Hello World!</a>
                      </li>
                      <li>
                        <a href="#">Welcome to Colorlib Family.</a>
                      </li>
                      <li>
                        <a href="#">Hello Delicious!</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="top-social-info text-right">
                  <a href="#">
                    <i className="fa fa-pinterest" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-dribbble" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-behance" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="delicious-main-menu">
          <div className="classNamey-nav-container breakpoint-off">
            <div className="container">
              <nav
                className="classNamey-navbar justify-content-between"
                id="deliciousNav"
              >
                <a className="nav-brand" href="index.html">
                  <img src="img/core-img/logo.png" alt="" />
                </a>

                <div className="classNamey-navbar-toggler">
                  <span className="navbarToggler">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>

                <div className="classNamey-menu">
                  <div className="classNameycloseIcon">
                    <div className="cross-wrap">
                      <span className="top"></span>
                      <span className="bottom"></span>
                    </div>
                  </div>

                  <div className="classNameynav">
                    <ul>
                      <li className="active">
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="#">Pages</a>
                        <ul className="dropdown">
                          <li>
                            <a href="index.html">Home</a>
                          </li>
                          <li>
                            <a href="about.html">About Us</a>
                          </li>
                          <li>
                            <a href="blog-post.html">Blog Post</a>
                          </li>
                          <li>
                            <a href="receipe-post.html">Receipe Post</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                          <li>
                            <a href="elements.html">Elements</a>
                          </li>
                          <li>
                            <a href="#">Dropdown</a>
                            <ul className="dropdown">
                              <li>
                                <a href="index.html">Home</a>
                              </li>
                              <li>
                                <a href="about.html">About Us</a>
                              </li>
                              <li>
                                <a href="blog-post.html">Blog Post</a>
                              </li>
                              <li>
                                <a href="receipe-post.html">Receipe Post</a>
                              </li>
                              <li>
                                <a href="contact.html">Contact</a>
                              </li>
                              <li>
                                <a href="elements.html">Elements</a>
                              </li>
                              <li>
                                <a href="#">Dropdown</a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="index.html">Home</a>
                                  </li>
                                  <li>
                                    <a href="about.html">About Us</a>
                                  </li>
                                  <li>
                                    <a href="blog-post.html">Blog Post</a>
                                  </li>
                                  <li>
                                    <a href="receipe-post.html">Receipe Post</a>
                                  </li>
                                  <li>
                                    <a href="contact.html">Contact</a>
                                  </li>
                                  <li>
                                    <a href="elements.html">Elements</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Mega Menu</a>
                        <div className="megamenu">
                          <ul className="single-mega cn-col-4">
                            <li className="title">Catagory</li>
                            <li>
                              <a href="index.html">Home</a>
                            </li>
                            <li>
                              <a href="about.html">About Us</a>
                            </li>
                            <li>
                              <a href="blog-post.html">Blog Post</a>
                            </li>
                            <li>
                              <a href="receipe-post.html">Receipe Post</a>
                            </li>
                            <li>
                              <a href="contact.html">Contact</a>
                            </li>
                            <li>
                              <a href="elements.html">Elements</a>
                            </li>
                          </ul>
                          <ul className="single-mega cn-col-4">
                            <li className="title">Catagory</li>
                            <li>
                              <a href="index.html">Home</a>
                            </li>
                            <li>
                              <a href="about.html">About Us</a>
                            </li>
                            <li>
                              <a href="blog-post.html">Blog Post</a>
                            </li>
                            <li>
                              <a href="receipe-post.html">Receipe Post</a>
                            </li>
                            <li>
                              <a href="contact.html">Contact</a>
                            </li>
                            <li>
                              <a href="elements.html">Elements</a>
                            </li>
                          </ul>
                          <ul className="single-mega cn-col-4">
                            <li className="title">Catagory</li>
                            <li>
                              <a href="index.html">Home</a>
                            </li>
                            <li>
                              <a href="about.html">About Us</a>
                            </li>
                            <li>
                              <a href="blog-post.html">Blog Post</a>
                            </li>
                            <li>
                              <a href="receipe-post.html">Receipe Post</a>
                            </li>
                            <li>
                              <a href="contact.html">Contact</a>
                            </li>
                            <li>
                              <a href="elements.html">Elements</a>
                            </li>
                          </ul>
                          <div className="single-mega cn-col-4">
                            <div className="receipe-slider owl-carousel">
                              <a href="#">
                                <img src="img/bg-img/bg1.jpg" alt="" />
                              </a>
                              <a href="#">
                                <img src="img/bg-img/bg6.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="receipe-post.html">Receipies</a>
                      </li>
                      <li>
                        <a href="receipe-post.html">4 Vegans</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>

                    <div className="search-btn">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section className="hero-area">
        <div className="hero-slides owl-carousel">
          {/* <div className="single-hero-slide bg-img" style="background-image: url(img/bg-img/bg1.jpg);"> */}
          <div className="single-hero-slide bg-img">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div
                    className="hero-slides-content"
                    data-animation="fadeInUp"
                    data-delay="100ms"
                  >
                    <h2 data-animation="fadeInUp" data-delay="300ms">
                      Delicios Homemade Burger
                    </h2>
                    <p data-animation="fadeInUp" data-delay="700ms">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras tristique nisl vitae luctus sollicitudin. Fusce
                      consectetur sem eget dui tristique, ac posuere arcu
                      varius.
                    </p>
                    <a
                      href="#"
                      className="btn delicious-btn"
                      data-animation="fadeInUp"
                      data-delay="1000ms"
                    >
                      See Receipe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="single-hero-slide bg-img" style="background-image: url(img/bg-img/bg6.jpg);"> */}
          <div className="single-hero-slide bg-img">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div
                    className="hero-slides-content"
                    data-animation="fadeInUp"
                    data-delay="100ms"
                  >
                    <h2 data-animation="fadeInUp" data-delay="300ms">
                      Delicios Homemade Burger
                    </h2>
                    <p data-animation="fadeInUp" data-delay="700ms">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras tristique nisl vitae luctus sollicitudin. Fusce
                      consectetur sem eget dui tristique, ac posuere arcu
                      varius.
                    </p>
                    <a
                      href="#"
                      className="btn delicious-btn"
                      data-animation="fadeInUp"
                      data-delay="1000ms"
                    >
                      See Receipe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="single-hero-slide bg-img" style="background-image: url(img/bg-img/bg7.jpg);"> */}
          <div className="single-hero-slide bg-img">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div
                    className="hero-slides-content"
                    data-animation="fadeInUp"
                    data-delay="100ms"
                  >
                    <h2 data-animation="fadeInUp" data-delay="300ms">
                      Delicios Homemade Burger
                    </h2>
                    <p data-animation="fadeInUp" data-delay="700ms">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras tristique nisl vitae luctus sollicitudin. Fusce
                      consectetur sem eget dui tristique, ac posuere arcu
                      varius.
                    </p>
                    <a
                      href="#"
                      className="btn delicious-btn"
                      data-animation="fadeInUp"
                      data-delay="1000ms"
                    >
                      See Receipe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="top-catagory-area section-padding-80-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="single-top-catagory">
                <img src="img/bg-img/bg2.jpg" alt="" />

                <div className="top-cta-content">
                  <h3>Strawberry Cake</h3>
                  <h6>Simple &amp; Delicios</h6>
                  <a href="receipe-post.html" className="btn delicious-btn">
                    See Full Receipe
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="single-top-catagory">
                <img src="img/bg-img/bg3.jpg" alt="" />

                <div className="top-cta-content">
                  <h3>Chinesse Noodles</h3>
                  <h6>Simple &amp; Delicios</h6>
                  <a href="receipe-post.html" className="btn delicious-btn">
                    See Full Receipe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### Top Catagory Area End ##### -->

    <!-- ##### Best Receipe Area Start ##### --> */}
      <section className="best-receipe-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h3>The best Receipies</h3>
              </div>
            </div>
          </div>

          <div className="row">
            {/* <!-- Single Best Receipe Area --> */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-best-receipe-area mb-30">
                <img src="img/bg-img/r1.jpg" alt="" />
                <div className="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Sushi Easy Receipy</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Single Best Receipe Area --> */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-best-receipe-area mb-30">
                <img src="img/bg-img/r2.jpg" alt="" />
                <div className="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Homemade Burger</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Single Best Receipe Area --> */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-best-receipe-area mb-30">
                <img src="img/bg-img/r3.jpg" alt="" />
                <div className="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Vegan Smoothie</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Single Best Receipe Area --> */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-best-receipe-area mb-30">
                <img src="img/bg-img/r4.jpg" alt="" />
                <div className="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Calabasa soup</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Single Best Receipe Area --> */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-best-receipe-area mb-30">
                <img src="img/bg-img/r5.jpg" alt="" />
                <div className="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Homemade Breakfast</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Single Best Receipe Area --> */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-best-receipe-area mb-30">
                <img src="img/bg-img/r6.jpg" alt="" />
                <div className="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Healthy Fruit Desert</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### Best Receipe Area End ##### -->

    <!-- ##### CTA Area Start ##### --> */}
      {/* <section className="cta-area bg-img bg-overlay" style="background-image: url(img/bg-img/bg4.jpg);"> */}
      <section className="cta-area bg-img bg-overlay">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              {/* <!-- Cta Content --> */}
              <div className="cta-content text-center">
                <h2>Gluten Free Receipies</h2>
                <p>
                  Fusce nec ante vitae lacus aliquet vulputate. Donec
                  scelerisque accumsan molestie. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia Curae; Cras
                  sed accumsan neque. Ut vulputate, lectus vel aliquam congue,
                  risus leo elementum nibh
                </p>
                <a href="#" className="btn delicious-btn">
                  Discover all the receipies
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### CTA Area End ##### -->

    <!-- ##### Small Receipe Area Start ##### --> */}
      <section className="small-receipe-area section-padding-80-0">
        <div className="container">
          <div className="row">
            {/* <!-- Small Receipe Area --> */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-small-receipe-area d-flex">
                {/* <!-- Receipe Thumb --> */}
                <div className="receipe-thumb">
                  <img src="img/bg-img/sr1.jpg" alt="" />
                </div>
                {/* <!-- Receipe Content --> */}
                <div className="receipe-content">
                  <span>January 04, 2018</span>
                  <a href="receipe-post.html">
                    <h5>Homemade italian pasta</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                  <p>2 Comments</p>
                </div>
              </div>
            </div>

            {/* <!-- Small Receipe Area --> */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-small-receipe-area d-flex">
                {/* <!-- Receipe Thumb --> */}
                <div className="receipe-thumb">
                  <img src="img/bg-img/sr2.jpg" alt="" />
                </div>
                {/* <!-- Receipe Content --> */}
                <div className="receipe-content">
                  <span>January 04, 2018</span>
                  <a href="receipe-post.html">
                    <h5>Baked Bread</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                  <p>2 Comments</p>
                </div>
              </div>
            </div>

            {/* <!-- Small Receipe Area --> */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-small-receipe-area d-flex">
                {/* <!-- Receipe Thumb --> */}
                <div className="receipe-thumb">
                  <img src="img/bg-img/sr3.jpg" alt="" />
                </div>
                {/* <!-- Receipe Content --> */}
                <div className="receipe-content">
                  <span>January 04, 2018</span>
                  <a href="receipe-post.html">
                    <h5>Scalops on salt</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                  <p>2 Comments</p>
                </div>
              </div>
            </div>

            {/* <!-- Small Receipe Area --> */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-small-receipe-area d-flex">
                {/* <!-- Receipe Thumb --> */}
                <div className="receipe-thumb">
                  <img src="img/bg-img/sr4.jpg" alt="" />
                </div>
                {/* <!-- Receipe Content --> */}
                <div className="receipe-content">
                  <span>January 04, 2018</span>
                  <a href="receipe-post.html">
                    <h5>Fruits on plate</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                  <p>2 Comments</p>
                </div>
              </div>
            </div>

            {/* <!-- Small Receipe Area --> */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-small-receipe-area d-flex">
                {/* <!-- Receipe Thumb --> */}
                <div className="receipe-thumb">
                  <img src="img/bg-img/sr5.jpg" alt="" />
                </div>
                {/* <!-- Receipe Content --> */}
                <div className="receipe-content">
                  <span>January 04, 2018</span>
                  <a href="receipe-post.html">
                    <h5>Macaroons</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                  <p>2 Comments</p>
                </div>
              </div>
            </div>

            {/* <!-- Small Receipe Area --> */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-small-receipe-area d-flex">
                {/* <!-- Receipe Thumb --> */}
                <div className="receipe-thumb">
                  <img src="img/bg-img/sr6.jpg" alt="" />
                </div>
                {/* <!-- Receipe Content --> */}
                <div className="receipe-content">
                  <span>January 04, 2018</span>
                  <a href="receipe-post.html">
                    <h5>Chocolate tart</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                  <p>2 Comments</p>
                </div>
              </div>
            </div>

            {/* <!-- Small Receipe Area --> */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-small-receipe-area d-flex">
                {/* <!-- Receipe Thumb --> */}
                <div className="receipe-thumb">
                  <img src="img/bg-img/sr7.jpg" alt="" />
                </div>
                {/* <!-- Receipe Content --> */}
                <div className="receipe-content">
                  <span>January 04, 2018</span>
                  <a href="receipe-post.html">
                    <h5>Berry Desert</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                  <p>2 Comments</p>
                </div>
              </div>
            </div>

            {/* <!-- Small Receipe Area --> */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-small-receipe-area d-flex">
                {/* <!-- Receipe Thumb --> */}
                <div className="receipe-thumb">
                  <img src="img/bg-img/sr8.jpg" alt="" />
                </div>
                {/* <!-- Receipe Content --> */}
                <div className="receipe-content">
                  <span>January 04, 2018</span>
                  <a href="receipe-post.html">
                    <h5>Zucchini Grilled on peper</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                  <p>2 Comments</p>
                </div>
              </div>
            </div>

            {/* <!-- Small Receipe Area --> */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-small-receipe-area d-flex">
                {/* <!-- Receipe Thumb --> */}
                <div className="receipe-thumb">
                  <img src="img/bg-img/sr9.jpg" alt="" />
                </div>
                {/* <!-- Receipe Content --> */}
                <div className="receipe-content">
                  <span>January 04, 2018</span>
                  <a href="receipe-post.html">
                    <h5>Chicken Salad</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                  <p>2 Comments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### Small Receipe Area End ##### -->

    <!-- ##### Quote Subscribe Area Start ##### --> */}
      <section className="quote-subscribe-adds">
        <div className="container">
          <div className="row align-items-end">
            {/* <!-- Quote --> */}
            <div className="col-12 col-lg-4">
              <div className="quote-area text-center">
                <span>"</span>
                <h4>
                  Nothing is better than going home to family and eating good
                  food and relaxing
                </h4>
                <p>John Smith</p>
                <div className="date-comments d-flex justify-content-between">
                  <div className="date">January 04, 2018</div>
                  <div className="comments">2 Comments</div>
                </div>
              </div>
            </div>

            {/* <!-- Newsletter --> */}
            <div className="col-12 col-lg-4">
              <div className="newsletter-area">
                <h4>Subscribe to our newsletter</h4>
                {/* <!-- Form --> */}
                {/* <div className="newsletter-form bg-img bg-overlay" style="background-image: url(img/bg-img/bg1.jpg);"> */}
                <div className="newsletter-form bg-img bg-overlay">
                  <form action="#" method="post">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Subscribe to newsletter"
                    />
                    <button type="submit" className="btn delicious-btn w-100">
                      Subscribe
                    </button>
                  </form>
                  <p>
                    Fusce nec ante vitae lacus aliquet vulputate. Donec sceleri
                    sque accumsan molestie. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Adds --> */}
            <div className="col-12 col-lg-4">
              <div className="delicious-add">
                <img src="img/bg-img/add.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### Quote Subscribe Area End ##### -->

    <!-- ##### Follow Us Instagram Area Start ##### --> */}
      <div className="follow-us-instagram">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5>Follow Us Instragram</h5>
            </div>
          </div>
        </div>
        {/* <!-- Instagram Feeds --> */}
        <div className="insta-feeds d-flex flex-wrap">
          {/* <!-- Single Insta Feeds --> */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta1.jpg" alt="" />
            {/* <!-- Icon --> */}
            <div className="insta-icon">
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* <!-- Single Insta Feeds --> */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta2.jpg" alt="" />
            {/* <!-- Icon --> */}
            <div className="insta-icon">
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* <!-- Single Insta Feeds --> */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta3.jpg" alt="" />
            {/* <!-- Icon --> */}
            <div className="insta-icon">
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* <!-- Single Insta Feeds --> */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta4.jpg" alt="" />
            {/* <!-- Icon --> */}
            <div className="insta-icon">
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* <!-- Single Insta Feeds --> */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta5.jpg" alt="" />
            {/* <!-- Icon --> */}
            <div className="insta-icon">
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* <!-- Single Insta Feeds --> */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta6.jpg" alt="" />
            {/* <!-- Icon --> */}
            <div className="insta-icon">
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* <!-- Single Insta Feeds --> */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta7.jpg" alt="" />
            {/* <!-- Icon --> */}
            <div className="insta-icon">
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ##### Follow Us Instagram Area End ##### -->

    <!-- ##### Footer Area Start ##### --> */}
      <footer className="footer-area">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12 h-100 d-flex flex-wrap align-items-center justify-content-between">
              {/* <!-- Footer Social Info --> */}
              <div className="footer-social-info text-right">
                <a href="#">
                  <i className="fa fa-pinterest" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-dribbble" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-behance" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
              {/* <!-- Footer Logo --> */}
              <div className="footer-logo">
                <a href="index.html">
                  <img src="img/core-img/logo.png" alt="" />
                </a>
              </div>
              {/* <!-- Copywrite -->
                    <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p> */}
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- ##### Footer Area Start ##### -->

    <!-- ##### All Javascript Files ##### --> */}
      {/* <!-- jQuery-2.2.4 js --> */}
      <script src="js/jquery/jquery-2.2.4.min.js"></script>
      {/* <!-- Popper js --> */}
      <script src="js/bootstrap/popper.min.js"></script>
      {/* <!-- Bootstrap js --> */}
      <script src="js/bootstrap/bootstrap.min.js"></script>
      {/* <!-- All Plugins js --> */}
      <script src="js/plugins/plugins.js"></script>
      {/* <!-- Active js --> */}
      <script src="js/active.js"></script>
    </div>
  );
};

export default Heropage;
