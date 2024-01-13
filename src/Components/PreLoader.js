import React, { useEffect } from "react";
import "./PreLoader.css";
import gsap, { Circ, Expo } from "gsap/all";

export default function PreLoader() {
  useEffect(() => {
    var tl = gsap.timeline();

    tl.to(".main",{
      // height: "100%",
      top:0,
      duration:0.1,
      ease: Circ.easeInOut,
    })
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

    tl.to("#firstScreen",{
      height:0,
      duration:1,
      ease: Circ.easeInOut,
    })
    tl.to("#secondScreen",{
      height: "100%",
      top:0,
      duration:1,
      delay:-1.8,
      ease: Circ.easeInOut,
    })
    tl.to("#secondScreen",{
      height: 0,
      duration:0.5,
      delay:-0.9,
      ease: Circ.easeInOut,
    })
  });

  return (
    <>
      <div id="firstScreen">
        <div id="topHeading">
          <h5 className="reveal">The Portfolio</h5>
          <h5 className="reveal">&copy; 2024</h5>
        </div>
        <h1 className="reveal">
          <span>Shivam</span> <span className="designerFont">Sharma</span>{" "}
          <span>is</span> <span>a</span>
        </h1>
      </div>
      <div id="secondScreen"></div>
    </>
  );
}
