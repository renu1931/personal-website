import React from "react";

import website1 from "../image/website1.jpg";
import website4 from "../image/website4.jpg";
import website7 from "../image/website7.jpg";
import website5 from "../image/website5.jpg";
import website8 from "../image/website8.jpg";
import website9 from "../image/website9.jpg";
import website10 from "../image/website10.jpg";

import web1 from "../image/web1.jpg";
import web2 from "../image/web2.jpg";
import web3 from "../image/web3.jpg";
import web4 from "../image/web4.jpg";
import web5 from "../image/web5.jpg";
import web6 from "../image/web6.jpg";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

// ..
AOS.init({
  offset: 120,
  visibility: "hidden",
  duration: 1000,
  once: false,
});

function Mywebsite() {
  return (
    /*header start*/
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark pl-5 ">
        <a className="navbar-brand" href="https:hgcdvsfdnsfhv">
          <img
            src={website1}
            className="rounded-pill"
            alt="mypic"
            height="70px"
          />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className=" navbar-collapse collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <div className="nav_div">
              <ul class="nav ">
                <li>
                  <a className="navbar-brand" href="https:hgcdvsfdnsfhv">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https:hgcdvsfdnsfhv">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https:hgcdvsfdnsfhv">
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https:hgcdvsfdnsfhv">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https:hgcdvsfdnsfhv">
                    Blogs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mr-5" href="https:hgcdvsfdnsfhv">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </nav>
      {
        /*home section start */
        <div className="container-fluid">
          <div className="row">
            <div className="column">
              <img
                src={website4}
                className="img-fluid  mb-5 pb-5"
                alt="mypic"
              />
            </div>
          </div>
        </div>
        /*home section complete */
      }
      {
        /*about section start */
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <h2 className="pb-2">ABOUT ME</h2>
              <h5 className="pb-2">UI/UX Designer & Web Developer</h5>
              <p className="about-para" data-aos="fade-right">
                Hello! I’m <span className="name">Renu Singroha</span> from
                Hisar(Haryana), India. I code and create web elements for
                amazing people around the world. I like work with new people.
                New people are new experiences. Web Developer with over 1 years
                of experience. Experienced with all stages of the development
                cycle for dynamic web projects. Having an in-depth knowledge
                including advanced HTML5, CSS3, Bootstrap5, React, JavaScript I
                aim to make a difference through my creative solution.
              </p>
              <p className="about-2-para pb-3" data-aos="fade-right">
                Now, I’m working on a professional, visually sophisticated and
                technologically proficient, responsive and multi-functional
                react theme. If you are interested to work with me, click below
                button and contact with me right now, so we can talk about your
                project.
              </p>
              <p>
                <i className="bi bi-facebook pr-5"></i>
                <i className="bi bi-twitter pr-5"></i>
                <i className="bi bi-whatsapp pr-5"></i>
                <i className="bi bi-google pr-5"></i>
                <i className="bi bi-instagram pr-5"></i>
              </p>
              <button type="button" className="btn btn-dark  ">
                Contact ME
                <hr />
              </button>
            </div>

            <div className="col-sm-4">
              <img
                src={website7}
                className="img-thumbnail mb-5"
                data-aos="fade-left"
                alt="about_pic"
              />
            </div>
          </div>
        </div>

        /*about section complete */
      }

      {
        /*service section start*/

        <div
          className="container-fluid pl-5 pr-5  mt-5 pt-5 "
          data-aos="flip-down"
          style={{ backgroundColor: "#e6e7e0" }}
        >
          <h3 className="service text-center pt-3  mt-5">SERVICE</h3>
          <h1 className="service-h1 text-center pb-5">what i can do</h1>
          <div className="row pl-5 pr-5">
            <div className="col-sm-4">
              <i
                className="icon fa fa-laptop p-4 text-center rounded-circle border border-secondary"
                data-aos="zoom-in-down"
              ></i>
              <h4
                className=" service-h4 text-center pb-3"
                data-aos="zoom-in-down"
              >
                web design
              </h4>
              <p className="text-center pb-5 mb-5" data-aos="zoom-out-up">
                "A designer knows he has achieved perfection not when there is
                nothing left to add, but when there is nothing left to take
                away. " -- Renu Singroha, devloper and designer
              </p>
            </div>
            <div className="col-sm-4">
              <i
                className="icon fa fa-gears  p-4 rounded-circle border border-secondary"
                data-aos="zoom-in-down"
              ></i>
              <h4
                className="service-h4 text-center pb-3"
                data-aos="zoom-in-down"
              >
                Web Devlopment
              </h4>
              <p className="text-center" data-aos="zoom-out-up">
                “As the web development industry has become so huge in the last
                two decades, it has brought the attention of many people who are
                constantly sharing their own opinion.
              </p>
            </div>
            <div className=" col-sm-4">
              <i
                class="icon fa fa-tablet p-4 rounded-circle border border-secondary"
                data-aos="zoom-in-down"
              ></i>
              <h4
                className="service-h4  text-center pb-3"
                data-aos="zoom-in-down"
              >
                Responsive Design
              </h4>
              <p className="text-center" data-aos="zoom-out-up">
                “The public is more familiar with bad design than good design.
                It is, in effect, conditioned to prefer bad design, because that
                is what it lives with. The new becomes threatening, the old
                reassuring.”
              </p>
            </div>
            <div className=" col-sm-4">
              <i
                className="icon fa fa-rocket p-4 rounded-circle border border-secondary"
                data-aos="zoom-in-down"
              ></i>
              <h4
                className="service-h4  text-center pb-3"
                data-aos="zoom-in-down"
              >
                Branding Identity
              </h4>
              <p className="text-center pb-5 mb-5" data-aos="zoom-out-up">
                “ A brand for a company is like a reputation for a person. You
                earn reputation by trying to do hard things well ” ... Md Rizwan
                Web devloper And Designer
              </p>
            </div>
            <div className="col-sm-4">
              <i
                className="icon  fa fa-pencil p-4 rounded-circle border border-secondary"
                data-aos="zoom-in-down"
              ></i>
              <h4
                className="service-h4  text-center pb-3"
                data-aos="zoom-in-down"
              >
                Creative Design
              </h4>
              <p className="text-center" data-aos="zoom-out-up">
                “ Where do new ideas come from? The answer is simple:
                differences. Creativity comes from unlikely juxtapositions.
                ”Miss Seema
              </p>
            </div>
            <div className=" col-sm-4">
              <i
                className="icon fa fa-life-ring p-4 rounded-circle border border-secondary"
                data-aos="zoom-in-down"
              ></i>
              <h4
                className="service-h4  text-center pb-3"
                data-aos="zoom-in-down"
              >
                Support
              </h4>
              <p className="text-center" data-aos="zoom-out-up">
                “To give real service you must add something which cannot be
                bought or measured with money, and that is sincerity and
                integrity.”
              </p>
            </div>
          </div>
        </div>

        /*service section complete*/
      }

      {/*task div start*/}
      <div
        className="container mt-5 mb-5"
        style={{ textAlign: "center", position: "relative" }}
      >
        <div className="row">
          <div className="col-sm-6">
            <img
              src={website5}
              className="img-task mt-5 mb-5"
              data-aos="zoom-out"
              alt="task_pic"
            />
            <div className="task-text-div " data-aos="zoom-in">
              <p className="task-p">
                "PROBLEMS ARE THE PART OF{" "}
                <span className="task-life">lIFE</span> AND FACING THEM WITH
                SMILE IS THE ART OF LIFE"
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <h3 className="task-h3 mt-5 pt-5">SAD REALITY</h3>
            <p className="task-para">
              in school they tech you a lesson and give you a test,
            </p>
            <h3 className="task-h3"> BUT IN REAL LIFE</h3>
            <p className="task-para">
              {" "}
              IT GIVES YOU A TEST AND THEN TECH YOU A BEST LESSONS
            </p>

            <h3 className="task-h ">REALITY OF LIFE</h3>
            <p className="task-para">
              When you give importance to people, they think that you are always
              free. But they don't understand that you make yourself available
              for the<span className="task-everytime"> EVERYTIME</span>
            </p>
          </div>
        </div>
      </div>
      {/*task div complete*/}

      {/*reward section start */}
      <section className="reward-section pl-5 py-5">
        <div className="container-fluid pl-5">
          <div className="row">
            <div
              className="reward-main-div col-sm-3 mt-5 pt-5"
              style={{ textAlign: "center" }}
            >
              <i
                className="fa fa-users"
                style={{
                  fontSize: "40px",
                  textAlign: "center",
                  color: "white",
                  paddingBottom: "10px",
                }}
              ></i>
              <h3
                className="text-center"
                style={{ fontSize: "30px", padding: "10px", color: "white" }}
              >
                250
              </h3>
              <h4
                className="text-center"
                style={{ fontSize: "30px", color: "white" }}
              >
                Happy Clients
              </h4>
            </div>
            <div
              className="reward-main-div col-sm-3 mt-5 pt-5"
              style={{ textAlign: "center", color: "white" }}
            >
              <i
                className="fa fa-thumbs-up"
                style={{
                  fontSize: "40px",
                  textAlign: "center",
                  color: "white",
                  paddingBottom: "10px",
                }}
              ></i>
              <h3
                className="text-center"
                style={{ fontSize: "30px", padding: "10px", color: "white" }}
              >
                750
              </h3>
              <h4
                className="text-center"
                style={{ fontSize: "30px", color: "white" }}
              >
                Project Completed
              </h4>
            </div>
            <div
              className="reward-main-div col-sm-3 mt-5 pt-5"
              style={{ textAlign: "center", color: "white" }}
            >
              <i
                className="fa fa-pencil"
                style={{
                  fontSize: "40px",
                  textAlign: "center",
                  color: "white",
                  paddingBottom: "10px",
                }}
              ></i>
              <h3
                className="text-center"
                style={{ fontSize: "30px", padding: "10px", color: "white" }}
              >
                1100
              </h3>
              <h4
                className="text-center"
                style={{ fontSize: "30px", color: "white" }}
              >
                Code of Line
              </h4>
            </div>
            <div
              className="reward-main-div col-sm-3 mt-5 pt-5"
              style={{ textAlign: "center", color: "white" }}
            >
              <i
                className="fa fa-trophy"
                style={{
                  fontSize: "40px",
                  textAlign: "center",
                  color: "white",
                  paddingBottom: "10px",
                }}
              ></i>
              <h3
                className="text-center"
                style={{ fontSize: "30px", padding: "10px", color: "white" }}
              >
                200
              </h3>
              <h4
                className="text-center"
                style={{ fontSize: "30px", color: "white" }}
              >
                Award Achieved
              </h4>
            </div>
          </div>
        </div>
      </section>
      {/*reward section start */}

      {/*portfolio section start */}
      <div className="container">
        <h3 className="text-center mt-5 pt-5">Portfolio</h3>
        <h1 className="text-center mt-3 mb-5 pb-3">WORK I HAVE DONE</h1>
        <div className="row">
          <div className="col-sm-4" data-aos="zoom-in">
            <img src={web1} alt="portfolip-pic1" className="portfolio-img" />
          </div>
          <div className="col-sm-4" data-aos="zoom-in">
            <img src={web2} alt="portfolip-pic2" className="portfolio-img" />
          </div>
          <div className="col-sm-4" data-aos="zoom-in">
            <img src={web3} alt="portfolip-pic3" className="portfolio-img" />
          </div>
          <div className="col-sm-4" data-aos="zoom-in">
            <img src={web4} alt="portfolip-pic4" className="portfolio-img1" />
          </div>
          <div className="col-sm-4" data-aos="zoom-in">
            <img src={web5} alt="portfolip-pic5" className="portfolio-img1" />
          </div>
          <div className="col-sm-4" data-aos="zoom-in">
            <img src={web6} alt="portfolip-pic6" className="portfolio-img1" />
          </div>
        </div>
      </div>

      {/*portfolio section complete */}
      {/*blog start */}
      <div
        className="container pt-5 "
        style={{ backgroundColor: "black", marginBottom: "10rem" }}
      >
        <h3 className="blog-h3 pt-5  text-center" style={{ color: "white" }}>
          BLOGS
        </h3>
        <h1 className="pt-1  mb-4 pb-4 text-center" style={{ color: "white" }}>
          LATEST NEWS
        </h1>

        <div className="row">
          <div className="col-sm-4 mb-5" data-aos="fade-left">
            <img src={website9} alt="portfolip-pic2" className="img-fluid " />
            <div className="bg-white">
              <h4 className="pt-5 pl-4 pb- 2">
                The best of web design and web design inspiration
              </h4>

              <p className="text-center pl-2 pt-3">
                Having an in-depth knowledge including advanced HTML5, CSS3,
                Bootstrap5, React, JavaScript I aim to make a difference through
                my creative solution...
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <a href="hsejr" className="pl-2">
                  Read MORE...
                </a>

                <p className="pr-2">31/03/2022</p>
              </p>
            </div>
          </div>
          <div className="col-sm-4 mb-5" data-aos="zoom-out">
            <img src={website8} alt="portfolip-pic2" className="img-fluid" />
            <div className="bg-white">
              <h4 className="pt-5 pl-4 pb- 4">
                The best of web design and web design inspiration
              </h4>

              <p className="text-center pl-2 pt-3">
                Having an in-depth knowledge including advanced HTML5, CSS3,
                Bootstrap5, React, JavaScript I aim to make a difference through
                my creative solution...
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: "30px 20px",
                }}
              >
                <a href="hsejr" className="pl-2">
                  Read MORE...
                </a>

                <p className="pr-2">31/03/2022</p>
              </p>
            </div>
          </div>
          <div className="col-sm-4 mb-5" data-aos="fade-right">
            <img src={website10} alt="portfolip-pic2" className="img-fluid" />
            <div className="bg-white">
              <h4 className="pt-5 pl-4 pb- 2">
                The best of web design and web design inspiration
              </h4>

              <p className="text-center pl-2 pt-3">
                Having an in-depth knowledge including advanced HTML5, CSS3,
                Bootstrap5, React, JavaScript I aim to make a difference through
                my creative solution...
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: "30px 20px",
                }}
              >
                <a href="hsejr" className="pl-2">
                  Read MORE...
                </a>

                <p className="pr-2">31/03/2022</p>
              </p>
            </div>
          </div>
          <div style={{ marginLeft: "35rem" }}>
            <button
              style={{
                backgroundColor: "white",
                border: "none",
                borderRadius: "5px",
                marginBottom: "3rem",

                color: "black",
                padding: "10px",
              }}
            >
              view more
            </button>
          </div>
        </div>
      </div>

      {/*blog complete */}

      {/*slider start */}
      <div
        className="container "
        style={{
          marginTop: "20rem",

          backgroundColor: "#e6e7e0",
        }}
      >
        <div className="row ">
          <div className="col-sm-6 ">
            <div
              className="slider-div"
              style={{
                width: "100%",
                height: "500px",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                position: "absolute",
                boxShadow: "1px 2px 10px 5px white",
                animation: "slider 10s infinite linear",
              }}
            ></div>
          </div>
          <div className="col-sm-6">
            <div
              className="slider-div"
              style={{
                width: "100%",
                height: "500px",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                position: "absolute",
                boxShadow: "1px 2px 10px 5px white",
                animation: "slider 10s infinite linear",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/*slider complete */}
      {/*contact start */}
      <div className="container" style={{ marginTop: "20rem" }}>
        <h4 className="pt-5 text-center">CONTACT</h4>
        <h1 className="pt-1 pb-5 mb-4 text-center">GET IN TOUCH</h1>
        <div className="row">
          <div className="col-sm-6">
            <p className="p-2" style={{ fontSize: "20px" }}>
              Name...<br></br>
            </p>
            <input
              type="text"
              style={{
                border: "none",
                borderBottom: "2px solid black",
                width: "100%",
                outline: "none",
                marginBottom: "2rem",
              }}
            ></input>
          </div>
          <div className="col-sm-6">
            <p className="p-2" style={{ fontSize: "20px" }}>
              Email...<br></br>
            </p>
            <input
              type="text"
              style={{
                border: "none",
                borderBottom: "2px solid black",
                width: "100%",
                outline: "none",
              }}
            ></input>
          </div>
          <div className="col-sm-12">
            <p className="p-2 mb-5 pb-3" style={{ fontSize: "20px" }}>
              How can we help you.....<br></br>
            </p>
            <input
              type="text"
              style={{
                border: "none",
                borderBottom: "2px solid black",
                width: "100%",
                outline: "none",
                marginBottom: "5rem",
              }}
            ></input>
          </div>
          <div
            className="col-sm-12"
            style={{
              textAlign: "center",
            }}
          >
            <button
              type="button"
              style={{
                padding: "10px 20px",
                border: "none",
                backgroundColor: "black",
                color: "whitesmoke",
                borderRadius: "2px",
                marginBottom: "5rem",
              }}
            >
              {" "}
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
      {/*contact finish */}
      {/*footer start */}

      <div
        className="container-fluid pt-5 "
        style={{ backgroundColor: "#343a40" }}
      >
        <div
          className="row pt-5"
          style={{
            tectAlign: "center",
            paddingLeft: "10rem",
            marginRight: "10rem",
            justifyContent: "space-evenly",
          }}
        >
          <div
            className="col-sm-3 "
            style={{ borderBottom: "2px solid white" }}
          >
            <h5 style={{ textAlign: "center", color: "white" }}>
              Renu Singroha
            </h5>
            <p
              style={{
                color: "white",
                textAlign: "center",
                paddingBottom: "2rem",
              }}
            >
              web designer and developer
            </p>
          </div>

          <div className="col-sm-3" style={{ borderBottom: "2px solid white" }}>
            <h5 style={{ textAlign: "center", color: "white" }}>Phone No.</h5>
            <p
              style={{
                color: "white",
                textAlign: "center",
                paddingBottom: "2rem",
              }}
            >
              (+91)7206954253
            </p>
          </div>
          <div className="col-sm-3" style={{ borderBottom: "2px solid white" }}>
            <h5 style={{ textAlign: "center", color: "white" }}>Email</h5>
            <p
              style={{
                color: "white",
                textAlign: "center",
                paddingBottom: "2rem",
              }}
            >
              renudalal1931@gmail.com
            </p>
          </div>
          <div className="col-sm-3" style={{ borderBottom: "2px solid white" }}>
            <h5 style={{ textAlign: "center", color: "white" }}>Address</h5>
            <p
              style={{
                color: "white",
                textAlign: "center",
                paddingBottom: "2rem",
              }}
            >
              Gill Telecom Service Hisar, Haryana, India
            </p>
          </div>

          <div className="col-sm-12">
            <h6
              style={{
                color: "white",
                marginTop: "6rem",
                textAlign: "center",
                marginBottom: "1rem",
              }}
            >
              Renu © 2022. All Right Reserved, Designed By Renu-Singroha.
            </h6>
          </div>
        </div>
      </div>
      {/*footer complete */}
    </div>
  );
}

export default Mywebsite;
