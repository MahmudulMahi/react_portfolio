import React from "react";
import aboutImg from "../assets/images/about.png";
const About = () => {
  const info = [
    { text: "Years experience", count: "01" },
    { text: "Completed Projects", count: "10" },
    { text: "Companies Work", count: "01" },
  ];
  return (
    <section id="about" className=" text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3 ">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I’m a Tech Enthusiast. I am a mature team worker and
                adaptable to all challenging situations. I have enriched
                myself with various skills like Problem Solving and Web
                Develop.I’ll try to stay up to date on new Technologies
                and learn them
              </p>
              <div className="flex mt-10 items-center gap-7 justify-center">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <div className="flex justify-center">
                <a href="./src\assets\Cv_For_Mahmudul.pdf" download>
                  <button className="btn-primary">Download CV</button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
