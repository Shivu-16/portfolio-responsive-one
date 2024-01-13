import React from "react";
import "./Home.css";
import "boxicons";
import myImage from './Resources/home.png';

export default function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello,I am</h3>
          <h1>Shivam Sharma</h1>
          <p>
            Lorem myisanloe hikhbqlkebvak edasblinaslkend zk.,ved eads gloqwjbea
            ewgukzd ewdbjk ewguskafzj ewdlshqebil efwdsjbb vkqvajkilrs ewlsibl
            lbin;{" "}
          </p>
          <div className="social-media">
            <a href="#">
              <box-icon
                type="logo"
                animation="tada-hover"
                name="whatsapp"
                color="#25D366"
              ></box-icon>
            </a>
            <a href="#">
              <box-icon
                name="facebook-circle"
                animation="tada-hover"
                type="logo"
                color="#1877F2"
              ></box-icon>
            </a>
            <a href="#">
              <box-icon
                name="instagram-alt"
                animation="tada-hover"
                type="logo"
                color="#E4405F"
              ></box-icon>
            </a>
            <a href="#">
              <box-icon
                name="linkedin-square"
                animation="tada-hover"
                type="logo"
                color="#0077B5"
              ></box-icon>
            </a>
            <a href="#">
              <box-icon
                name="twitter"
                animation="tada-hover"
                type="logo"
                color="#1DA1F2"
              ></box-icon>
            </a>
          </div>

          <a href="/" className="btn">
            Download CV
          </a>
        </div>

        <div className="profession-container">
          <div className="profession-box">
            <div className="profession" style={{"--i":'0'}}>
              <box-icon className="icon" name="code-alt" color="#754ef9" size="3.8rem"></box-icon>
              <h3>Web Developer</h3>
            </div>
            <div className="profession" style={{"--i":'1'}}>
              <box-icon className="icon" name="palette" color="#754ef9" size="3.8rem"></box-icon>
              <h3>Web Designer</h3>
            </div>
            <div className="profession" style={{"--i":'2'}}>
              <box-icon className="icon" name="camera" color="#754ef9" size="3.8rem"></box-icon>
              <h3>VideoGrapher</h3>
            </div>
            <div className="profession" style={{"--i":'3'}}>
              <box-icon className="icon" name="game" color="#754ef9" size="3.8rem"></box-icon>
              <h3>Programmer</h3>
            </div>

            <div className="circle"></div>
          </div>

          <div className="overlay"></div>
          
        </div>

        <div className="home-img">
          <img src={myImage} alt="none"></img>
        </div>
      </section>
    </>
  );
}
