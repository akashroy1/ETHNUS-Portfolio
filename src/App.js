import React, { useEffect } from "react";
import "./App.css";
import aboutImgMe from "./assets/images/about-img-me.jpg";
import profileImg from "./assets/images/profile-image.png";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  useEffect(() => {
    // Active Tab
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('section');
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector('.nav-items a[href*=' + id + ']')
            .classList.add('active');
        } else {
          document
            .querySelector('.nav-items a[href*=' + id + ']')
            .classList.remove('active');
        }
      });
    });
    
    // Switch theme
    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      themeBtn.classList.toggle("sun");

      localStorage.setItem("saved-theme", getCurrentTheme());
      localStorage.setItem("saved-icon", getCurrentIcon());
    });

    const getCurrentTheme = () =>
      document.body.classList.contains("dark-theme") ? "dark" : "light";
    const getCurrentIcon = () =>
      themeBtn.classList.contains("sun") ? "sun" : "moon";

    const savedTheme = localStorage.getItem("saved-theme");
    const savedIcon = localStorage.getItem("saved-icon");

    if (savedTheme) {
      document.body.classList[savedTheme === "dark" ? "add" : "remove"](
        "dark-theme"
      );
      themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
    }
  }, []);

  return (
    <div>
      <div className="scrollToTop-btn flex-center">
        <i className="fas fa-arrow-up"></i>
      </div>

      <div className="theme-btn flex-center">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
      </div>

      <header>
        <div className="nav-bar">
          <a href="/" className="logo">
            Akash
          </a>
          <div className="navigation">
            <div className="nav-items">
              <div className="nav-close-btn"></div>
              <a className="active" href="#home">
                Home
              </a>
              <a href="#about">About</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact Me</a>
            </div>
          </div>
          <div className="nav-menu-btn"></div>
        </div>
      </header>

      <section className="home flex-center" id="home">
        <div className="home-container">
          <div className="media-icons">
            <a
              href="https://linkedin.com/in/akashroy1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://instagram.com/roy__akash"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com/royaku6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/akashroy1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="info">
            <h2>Hi! I am Akash</h2>
            <h3>Web Developer | ML Enthusiastic</h3>
            <p>
              I am very much passionate about Web Development and Machine
              Learning
            </p>
            <a href="/" className="btn">
              Contact Me <i className="fas fas-arrow-circle"></i>
            </a>
          </div>
          <div className="home-img">
            <img src={profileImg} alt="" />
          </div>
        </div>
        <a href="#about" className="scroll-down">
          Scroll Down <i className="fas fa-arrow-down"></i>
        </a>
      </section>

      <section className="about section" id="about">
        <div className="container flex-center">
          <h1 className="section-title-01">About Me</h1>
          <h2 className="section-title-02">About Me</h2>
          <div className="content flex-center">
            <div className="about-img">
              <img src={aboutImgMe} alt="" />
            </div>
            <div className="about-info">
              <div className="description">
                <h3>I'm Akash Roy</h3>
                <h4>
                  A passionate <span>Web Developer</span> from{" "}
                  <span>India</span>
                </h4>
                <p>
                  I am a positive, enthusiastic and competent Web Developer who
                  has built up some skills, qualities and attributes that
                  guarantees my abilities.
                </p>
              </div>
              <a href="./assets/images/resume.pdf" className="btn">
                Download Resume <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="skills section" id="portfolio">
        <div className="container flex-center">
          <h1 className="section-title-01">Portfolio</h1>
          <h2 className="section-title-02">Portfolio</h2>
          <div className="content">
            <div className="skills-description">
              <h3>Education & Skills</h3>
            </div>
            <div className="skills-info education-all">
              <div className="education">
                <h4>
                  <label>Education</label>
                </h4>
                <ul className="edu-list">
                  <li className="item">
                    <span className="year">2020-2024</span>
                    <p>
                      <span>B.Tech in CSE</span> - Vellore Institute of
                      Technology, Vellore, India
                    </p>
                  </li>
                  <li className="item">
                    <span className="year">2018-2020</span>
                    <p>
                      <span>10+2 (Science)</span> - Hoomgarh Chandabila High
                      School
                    </p>
                  </li>
                </ul>
              </div>
              <div className="education">
                <h4>
                  <label>Skills</label>
                </h4>
                <ul className="bars">
                  <li className="bar">
                    <div className="info">
                      <span>HTML</span>
                      <span>95%</span>
                    </div>
                    <div className="line html"></div>
                  </li>
                  <li className="bar">
                    <div className="info">
                      <span>CSS</span>
                      <span>85%</span>
                    </div>
                    <div className="line css"></div>
                  </li>
                  <li className="bar">
                    <div className="info">
                      <span>JavaScript</span>
                      <span>85%</span>
                    </div>
                    <div className="line js"></div>
                  </li>
                </ul>
              </div>
              <div className="education">
                <h4>
                  <label>Achivements</label>
                </h4>
                <ul className="edu-list">
                  <li className="item">
                    <span className="year">2021</span>
                    <p>
                      <span>5 Star (Problem Solving)</span> - Hackerrank
                    </p>
                  </li>
                  <li className="item">
                    <span className="year">2021</span>
                    <p>
                      <span>Postman Student Expert</span> - Postman
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="skills-description">
              <h3>Work & Experience</h3>
            </div>
            <div className="skills-info">
              <div className="experience-card">
                <div className="upper">
                  <h3>Web & Graphic Designer</h3>
                  <h5>Part Time | Remote</h5>
                  <span>Nov'2020 - Jan'2021</span>
                </div>
                <div className="hr"></div>
                <h4>
                  <label>Eniacoder</label>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere consequuntur deleniti dolore.
                </p>
              </div>
              <div className="experience-card">
                <div className="upper">
                  <h3>Web Developer</h3>
                  <h5>Part-Time | Remote</h5>
                  <span>Feb'2022 - March'2022</span>
                </div>
                <div className="hr"></div>
                <h4>
                  <label>Salonize Home Salon</label>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus amet at velit.
                </p>
              </div>
              <div className="experience-card">
                <div className="upper">
                  <h3>Web Developer</h3>
                  <h5>Core Commitee Member</h5>
                  <span>Nov'2020-Present</span>
                </div>
                <div className="hr"></div>
                <h4>
                  <label>Skillship Vellore</label>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Pariatur sit fugiat ipsam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services section" id="skills">
        <div className="container flex-center">
          <h1 className="section-title-01">Skills</h1>
          <h2 className="section-title-02">Skills</h2>
          <div className="content">
            <ul className="service-list">
              <li className="service-container">
                <div className="service-card">
                  <i className="fas fa-file-code"></i>
                  <h3>Frontend Developemt</h3>
                  <div className="learn-more-btn">
                    Learn More <i className="fas fa-long-arrow-alt-right"></i>
                  </div>
                </div>
                <div className="service-modal flex-center">
                  <div className="service-modal-body">
                    <i className="fas fa-times modal-close-btn"></i>
                    <h3>UI/UX Consultancy</h3>
                    <h4>What is UI UX Consuling?</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ab numquam illo est minima officiis dolorem accusantium
                      repellat accusamus sed ullam.
                    </p>
                    <h4>What I provide</h4>
                    <ul>
                      <li>
                        <i className="fas fa-check-circle"></i>Lorem ipsum dolor
                        sit amet.
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Lorem ipsum dolor
                        sit.
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Lorem ipsum dolor
                        dolor sit amet.
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Lorem ipsum sit
                        amet.
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="service-container">
                <div className="service-card">
                  <i className="fas fa-regular fa-database"></i>
                  <h3>Backend Developemnt</h3>
                  <div className="learn-more-btn">
                    Learn More <i className="fas fa-long-arrow-alt-right"></i>
                  </div>
                </div>
                <div className="service-modal flex-center">
                  <div className="service-modal-body">
                    <i className="fas fa-times modal-close-btn"></i>
                    <h3>UI/UX Consultancy</h3>
                    <h4>What is UI UX Consuling?</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ab numquam illo est minima officiis dolorem accusantium
                      repellat accusamus sed ullam.
                    </p>
                    <h4>What I provide</h4>
                    <ul>
                      <li>
                        <i className="fas fa-check-circle"></i>Lorem ipsum dolor
                        sit amet.
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Lorem ipsum dolor
                        sit.
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Lorem ipsum dolor
                        dolor sit amet.
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Lorem ipsum sit
                        amet.
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="service-container">
                <div className="service-card">
                  <i className="fas fa-pencil-ruler"></i>
                  <h3>UI/UX Design</h3>
                  <div className="learn-more-btn">
                    Learn More <i className="fas fa-long-arrow-alt-right"></i>
                  </div>
                </div>
                <div className="service-modal flex-center">
                  <div className="service-modal-body">
                    <i className="fas fa-times modal-close-btn"></i>
                    <h3>UI/UX Consultancy</h3>
                    <h4>What is UI UX Consuling?</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ab numquam illo est minima officiis dolorem accusantium
                      repellat accusamus sed ullam.
                    </p>
                    <h4>What I provide</h4>
                    <ul>
                      <li>
                        <i className="fas fa-check-circle"></i>Lorem ipsum dolor
                        sit amet.
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Lorem ipsum dolor
                        sit.
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Lorem ipsum dolor
                        dolor sit amet.
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Lorem ipsum sit
                        amet.
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="service-container">
                <div className="service-card">
                  <i className="fas fa-align-left"></i>
                  <h3>Content Writting</h3>
                  <div className="learn-more-btn">
                    Learn More <i className="fas fa-long-arrow-alt-right"></i>
                  </div>
                </div>
                <div className="service-modal flex-center">
                  <div className="service-modal-body">
                    <i className="fas fa-times modal-close-btn"></i>
                    <h3>UI/UX Consultancy</h3>
                    <h4>What is UI UX Consuling?</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ab numquam illo est minima officiis dolorem accusantium
                      repellat accusamus sed ullam.
                    </p>
                    <h4>What I provide</h4>
                    <ul>
                      <li>
                        <i className="fas fa-check-circle"></i>Lorem ipsum dolor
                        sit amet.
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Lorem ipsum dolor
                        sit.
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Lorem ipsum dolor
                        dolor sit amet.
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Lorem ipsum sit
                        amet.
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="portfolio section" id="projects">
        <div className="container flex-center">
          <h1 className="section-title-01">Projects</h1>
          <h2 className="section-title-02">Projects</h2>
          <div className="content">
            <div className="portfolio-list">
              <div className="img-class-container">
                <div className="img-card">
                  <div className="overlay"></div>
                  <div className="info">
                    <h3>YouTube Analyser</h3>
                    <span>Python + Flask + React</span>
                  </div>
                  <img
                    src="https://picsum.photos/580/350"
                    alt=""
                  />
                </div>
                <div className="portfolio-model flex-center">
                  <div className="portfolio-model-body">
                    <i className="fas fa-times portfolio-close-btn"></i>
                    <h3>Reader.com</h3>
                    <span>Node.js + Express.js + MongoDB</span>
                    <img src="https://picsum.photos/580/350" alt="Portfolio" />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente esse ipsum possimus dicta, tempora aliquid
                      delectus quo! Itaque hic illo sed, rem est ducimus
                      doloribus quibusdam mollitia? At, beatae dolorem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="img-class-container">
                <div className="img-card">
                  <div className="overlay"></div>
                  <div className="info">
                    <h3>Reader.com</h3>
                    <span>Node.js + Express.js + MongoDB</span>
                  </div>
                  <img
                    src="https://picsum.photos/580/350"
                    alt=""
                  />
                </div>
                <div className="portfolio-model flex-center">
                  <div className="portfolio-model-body">
                    <i className="fas fa-times portfolio-close-btn"></i>
                    <h3>Web Design</h3>
                    <img src="https://picsum.photos/580/350" alt="Portfolio" />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente esse ipsum possimus dicta, tempora aliquid
                      delectus quo! Itaque hic illo sed, rem est ducimus
                      doloribus quibusdam mollitia? At, beatae dolorem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="img-class-container">
                <div className="img-card">
                  <div className="overlay"></div>
                  <div className="info">
                    <h3>One-Click Memer</h3>
                    <span>JavaScript + HTML + CSS</span>
                  </div>
                  <img
                    src="https://picsum.photos/580/350"
                    alt=""
                  />
                </div>
                <div className="portfolio-model flex-center">
                  <div className="portfolio-model-body">
                    <i className="fas fa-times portfolio-close-btn"></i>
                    <h3>Web Design</h3>
                    <img src="https://picsum.photos/580/350" alt="Portfolio" />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente esse ipsum possimus dicta, tempora aliquid
                      delectus quo! Itaque hic illo sed, rem est ducimus
                      doloribus quibusdam mollitia? At, beatae dolorem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="get-in-touch sub-section">
          <div className="container">
            <div className="content flex-center">
              <div className="contact-card flex-center">
                <div className="title">
                  <h4>Let's Talk</h4>
                  <h3>About Our</h3>
                  <h2>New Project</h2>
                </div>
                <div className="contact-btn">
                  <a href="/" className="btn">
                    Get In Touch <i className="fas fa-paper-plane"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="container flex-center">
          <h1 className="section-title-01">Contact Me</h1>
          <h2 className="section-title-02">Contact Me</h2>
          <div className="content">
            <div className="contact-left">
              <h2>Let's discuss something productive</h2>
              <ul className="contact-list">
                <li>
                  <h3 className="item-title">
                    <i className="fas fa-phone"></i>Phone
                  </h3>
                  <span>+91 8167282310</span>
                </li>
                <li>
                  <h3 className="item-title">
                    <i className="fas fa-envelope"></i>Email Address
                  </h3>
                  <span>
                    <a href="mailto:royaku6@gmail.com">royaku6@gmail.com</a>
                  </span>
                </li>
                <li>
                  <h3 className="item-title">
                    <i className="fas fa-map-marker-alt"></i>Official Address
                  </h3>
                  <span>Metaldoba, Hoomgarh, Paschim-Medinipur, 721157</span>
                </li>
              </ul>
            </div>

            <div className="contact-right">
              <form action="" className="contact-form">
                <div className="first-row">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="second-row">
                  <input type="email" placeholder="Email" />
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="third-row">
                  <textarea
                    name="message"
                    id=""
                    rows="7"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button type="submit" className="btn">
                  Send Message <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div className="about group">
            <h2>Akash</h2>
            <p>Web Developer</p>
            <a href="#about">About Me</a>
          </div>
          <div className="hr"></div>
          <div className="info group">
            <h3>More</h3>
            <ul>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="hr"></div>
          <div className="follow group">
            <h3>Follow</h3>
            <ul>
              <li>
                <a href="/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright group">
          <p> &#169; 2022 by Akash Roy. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
