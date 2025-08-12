'use client'
import DecryptedText from "../../reactbits/DecryptedText/DecryptedText";
import React, { useEffect } from "react";
import Xmark from "./xmark/xmark";
import "./Hero.css"; 

const HeroSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.10.42/build/spline-viewer.js";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="hero">
      <div className="spline-background">
        <spline-viewer
          loading-anim-type="spinner-big-dark"
          url="https://prod.spline.design/boF5suqo1PDIZ1FN/scene.splinecode"
        ></spline-viewer>
      </div>

      <div className="hero-content">
        <div className="ris"></div>
        <div className="hero-up">
          <div className="hero-up-left">
            <div className="hero-up-left-top">
              <DecryptedText className="hero-up-left-top-text" characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&()' text="ADAPTIVE CORPORATE WEBSITES" animateOn="view" revealDirection="left" speed={100} maxIterations={20} sequential={true}/>
              <DecryptedText className="hero-up-left-top-text" characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&()' text="LANDING PAGES AND ONLINE" animateOn="view" revealDirection="left" speed={100} maxIterations={20} sequential={true}/>
              <DecryptedText className="hero-up-left-top-text" characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&()' text="STORES." animateOn="view" revealDirection="left" speed={100} maxIterations={20} sequential={true}/>
            </div>
            <div className="hero-up-left-bottom">
              <Xmark animationDuration="5s"/>
              <Xmark animationDuration="5.1s"/>
              <Xmark animationDuration="5.2s"/>
            </div>
          </div>
          <div className="hero-up-right">
            <div className="hero-up-right-top">
              <Xmark animationDuration="5s"/>
              <Xmark animationDuration="5.1s"/>
              <Xmark animationDuration="5.2s"/>
            </div>
            <div className="hero-up-right-bottom">
              <DecryptedText className="hero-up-right-bottom-links" characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&()' text="github.com/Revellison" animateOn="view" revealDirection="left" speed={100} maxIterations={20} sequential={true}/>
              <DecryptedText className="hero-up-right-bottom-links" characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&()' text="x.com/Revell1s0n" animateOn="view" revealDirection="left" speed={100} maxIterations={20} sequential={true}/>
              <DecryptedText className="hero-up-right-bottom-links" characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&()' text="revellison@internet.ru" animateOn="view" revealDirection="left" speed={100} maxIterations={20} sequential={true}/>
            </div>
          </div>
        </div>
        
        <div className="hero-down">
<img src="/Revellison/double_dropdown.svg" alt="Листать дальше" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
