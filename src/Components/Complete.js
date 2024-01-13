import React, { useEffect } from "react";
import gsap, { Circ, Expo } from "gsap/all";
// import 'swiper/swiper-bundle.min.css';
import ghostImage from "./Resources/ghost-img.png";
import "boxicons/css/boxicons.min.css";
import ScrollReveal from "scrollreveal";
import Swiper from "swiper/bundle";
import "./Complete.css";
// import "./PreLoader.css";
// import { Power3 } from "gsap";

const Complete = () => {
  useEffect(() => {
    /* ========== menu icon navbar ========== */
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    const handleMenuIconClick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };

    menuIcon.addEventListener("click", handleMenuIconClick);

    /* ========== scroll sections active link ========== */
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("header nav a");

    const handleScroll = () => {
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((links) => {
            links.classList.remove("active");
            document
              .querySelector("header nav a[href*=" + id + "]")
              .classList.add("active");
          });
        }
      });

      /* ========== sticky navbar ========== */
      let header = document.querySelector(".header");
      header.classList.toggle("sticky", window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    /* ========== remove menu icon navbar when click navbar link (scroll) ========== */
    return () => {
      menuIcon.removeEventListener("click", handleMenuIconClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ========== swiper ========== */
  useEffect(() => {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    /* ========== dark light mode ========== */
    let darkModeIcon = document.querySelector("#darkMode-icon");

    const handleDarkModeClick = () => {
      darkModeIcon.classList.toggle("bx-sun");
      if (darkModeIcon.classList.contains("bx-sun")) {
        darkModeIcon.setAttribute("color", "yellow");
      } else {
        darkModeIcon.removeAttribute("color");
      }

      document.body.classList.toggle("dark-mode");
    };

    darkModeIcon.addEventListener("click", handleDarkModeClick);

    /* ========== scroll reveal ========== */
    ScrollReveal({
      distance: "80px",
      duration: 2000,
      delay: 200,
    });

    ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
    ScrollReveal().reveal(
      ".home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form",
      { origin: "bottom" }
    );
    ScrollReveal().reveal(".home-content h1, .about-img img", {
      origin: "left",
    });
    ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", {
      origin: "right",
    });

    // text disappear
    document.querySelectorAll(".reveal").forEach(function (elem) {
      var parent = document.createElement("div");
      parent.classList.add("parent");
      var child = document.createElement("span");
      child.classList.add("child");

      child.innerHTML = elem.innerHTML;
      parent.appendChild(child);

      elem.innerHTML = "";
      elem.appendChild(parent);
    });

    //gsap
    var tl = gsap.timeline();

    tl.from(".parent .child", {
      opacity: 0,
      duration: 2,
      ease: Circ.easeInOut,
    });
    tl.to(".parent .child", {
      opacity: 1,
      duration: 2,
      ease: Circ.easeInOut,
    });

    tl.to(".parent .child", {
      y: "-100%",
      duration: 1.5,
      delay: 1,
      ease: Expo.easeInOut,
    });

    return () => {
      darkModeIcon.removeEventListener("click", handleDarkModeClick);
    };
  }, []);
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          Portfolio.
        </a>

        <nav className="navbar">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="bx bx-moon" id="darkMode-icon" color="yellow"></div>
        <div className="bx bx-menu" id="menu-icon"></div>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, I am</h3>
          <h1>Shivam Sharma</h1>
          <p>
            I'm a web developer who loves to create beautiful and functional
            websites for people who want to make a difference in the world.
          </p>
          <p>
            Currently, I'm a student at Netaji Subhas University of Technology,
            where I'm studying Bachelor of Technology in Electronics and
            Communication Engineering Branch.
          </p>

          <div className="social-media">
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="#">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>

          <a href="#" className="btn">
            Download CV
          </a>
        </div>

        <div className="profession-container">
          <div className="profession-box">
            <div className="profession" style={{ "--i": 0 }}>
              <i className="bx bx-code-alt"></i>
              <h3>Web Developer</h3>
            </div>
            <div className="profession" style={{ "--i": 1 }}>
              <i className="bx bx-camera"></i>
              <h3>Student</h3>
            </div>
            <div className="profession" style={{ "--i": 2 }}>
              <i className="bx bx-palette"></i>
              <h3>Web Designer</h3>
            </div>
            <div className="profession" style={{ "--i": 3 }}>
              <i className="bx bx-video-recording"></i>
              <h3>Programmer</h3>
            </div>

            <div className="circle"></div>
          </div>

          <div className="overlay"></div>
        </div>

        <div className="home-img">
          <img src={ghostImage} alt="" />
          <div className="home-shadow"></div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img src="images/about.png" alt="" />
        </div>

        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3>
            Hi there, welcome to my website! I'm Cristian, a passionate web
            developer who enjoys learning new technologies and solving problems
            with code!
          </h3>
          <p>
            This website is my personal blog where I write about web development
            topics that interest me and inspire me.
          </p>
          <p>
            Thank you for visiting my website and getting to know me better. I
            hope you enjoyed reading my blog posts and found them useful and
            informative. If you want to read more of my posts, subscribe to my
            newsletter where I send weekly updates on web development trends and
            tips. If you have any feedback or suggestions, please let me know.
            I'd love to hear from you.
          </p>
          <a href="#" className="btn">
            Read More
          </a>
        </div>
      </section>

      <section className="services" id="services">
        <h2 className="heading">
          My <span>Projects</span>
        </h2>

        <div className="services-container">
          {/* Your services boxes go here */}
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <h2 className="heading">
          Latest <span>Designs</span>
        </h2>

        <div className="portfolio-container">
          {/* Your portfolio boxes go here */}
        </div>
      </section>

      <div className="testimonial-container">
        <h2 className="heading">
          My <span>Achievements</span>
        </h2>

        <div className="testimonial-wrapper">
          <div className="testimonial-box mySwiper">
            <div className="testimonial-content swiper-wrapper">
              <div className="testimonial-slide swiper-slide">
                <img src="images/testimonial1.jpg" alt="" />
                <h3>Jackson Levi</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Exercitationem dignissimos aliquid iure delectus corrupti
                  impedit, beatae aperiam ad iusto nostrum possimus cum pariatur
                  harum assumenda suscipit a, qui, tempora maxime nulla facere
                  quo ipsum tempore. Atque libero provident ad aut officia
                  pariatur voluptate quaerat delectus nesciunt, sequi eligendi
                  aperiam fugit unde nihil, iste similique illum. Dignissimos
                  enim officia consequuntur dolores.
                </p>
              </div>
              <div className="testimonial-slide swiper-slide">
                <img src="images/testimonial2.jpg" alt="" />
                <h3>Flora Ocean</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Exercitationem dignissimos aliquid iure delectus corrupti
                  impedit, beatae aperiam ad iusto nostrum possimus cum pariatur
                  harum assumenda suscipit a, qui, tempora maxime nulla facere
                  quo ipsum tempore. Atque libero provident ad aut officia
                  pariatur voluptate quaerat delectus nesciunt, sequi eligendi
                  aperiam fugit unde nihil, iste similique illum. Dignissimos
                  enim officia consequuntur dolores.
                </p>
              </div>
              <div className="testimonial-slide swiper-slide">
                <img src="images/testimonial3.jpg" alt="" />
                <h3>Julian Grayson</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Exercitationem dignissimos aliquid iure delectus corrupti
                  impedit, beatae aperiam ad iusto nostrum possimus cum pariatur
                  harum assumenda suscipit a, qui, tempora maxime nulla facere
                  quo ipsum tempore. Atque libero provident ad aut officia
                  pariatur voluptate quaerat delectus nesciunt, sequi eligendi
                  aperiam fugit unde nihil, iste similique illum. Dignissimos
                  enim officia consequuntur dolores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>

        <form action="#">{/* Your contact form goes here */}</form>
      </section>

      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2023 | All Rights Reserved.</p>
        </div>

        <div className="footer-iconTop">
          <a href="#home">
            <i className="bx bx-up-arrow-alt"></i>
          </a>
        </div>
      </footer>
      {/* <div id="whiteScreen"></div> */}
    </>
  );
};

export default Complete;
