import React from "react";
import hero from "../assets/images/mahmudul.jpg";
const Hero = () => {
  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center  ">
        <img src={hero} alt="" className="md:w-[500px] md:h-[500px]   rounded-full" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            I'm<span>  Md.Mahmudul Islam</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-white">
            MERN Stack Web Developer
          </h4>

          <button className="btn-primary mt-8">Contact Me</button>
          <div className="flex gap-5">
                <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5 ">

              <div

                className="text-white hover:text-white cursor-pointer "
              >
                <a href="https://github.com/MahmudulMahi" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </div>

            </div>
            <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5 ">

              <div

                className="text-white hover:text-white cursor-pointer "
              >
                <a href="https://www.linkedin.com/in/mahmudulmahi/" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>

              </div>

            </div>
            {/* ---------- */}
            <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
              <div className="text-white hover:text-white cursor-pointer">
                <a href="https://www.facebook.com/MahmudulMahi.SWE" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </div>
            </div>
            {/* ---------- */}
            <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5 ">

              <div

                className="text-white hover:text-white cursor-pointer "
              >
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </div>

            </div>
            {/* ---------- */}
     
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
