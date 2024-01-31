import React from "react";
import express from "../assets/images/1_XP-mZOrIqX7OsFInN2ngRQ.png"
import mongo from "../assets/images/2016-06-27_1940.webp"
import tailwind from "../assets/images/download.png"


const Skills = () => {
 
  return (
    <section id="skills" className="py-10 bg-gray-800 relative ">
      <div className="mt-8 text-gray-100 text-center w-7/12 mx-auto">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="grid grid-cols-4 justify-items-center items-center justify-center mt-12 gap-10 flex-wrap">
         
            <div             
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) 86%,#ddd 86%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center ">
                  <ion-icon name="logo-html5"></ion-icon>
                 
                </div>
              </div>
              <p className="text-xl mt-3">HTML 5</p>
              <p className="text-xl mt-3">Advance</p>
              
            </div>
            {/* --------- */}
  
            {/* -------- */}
            <div             
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) 86%,#ddd 86%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center ">
                  <ion-icon name="logo-css3"></ion-icon>
                 
                </div>
              </div>
              <p className="text-xl mt-3">CSS 3</p>
              <p className="text-xl mt-3">Advance</p>
              
            </div>
            {/* ------- */}
            <div             
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) 86%,#ddd 86%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center ">
                  <img className="w-12 h-12" src={tailwind} alt="" />
                 
                </div>
              </div>
              <p className="text-xl mt-3">Tailwind CSS</p>
              <p className="text-xl mt-3">Advance</p>
              
            </div>
            {/* ------- */}
            <div             
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) 76%,#ddd 76%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center ">
                  <ion-icon name="logo-javascript"></ion-icon>
                 
                </div>
              </div>
              
              <p className="text-xl mt-3">Javascript</p>
              <p className="text-xl mt-3">Intermediate</p>
            </div>
            {/* --------- */}
            <div             
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) 70%,#ddd 70%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center ">
                  <ion-icon name="logo-react"></ion-icon>
                 
                </div>
              </div>
             
              <p className="text-xl mt-3">React</p>
              <p className="text-xl mt-3">Intermediate</p>
            </div>
            {/* ---------- */}
            <div             
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) 60%,#ddd 60%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center ">
                  <ion-icon name="logo-nodejs"></ion-icon>
                 
                </div>
              </div>
              
              <p className="text-xl mt-3">Node Js</p>
              <p className="text-xl mt-3">Expect</p>
            </div>
            {/* --------- */}
            <div             
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) 60%,#ddd 60%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center ">
             
                  <img className="w-12 h-12" src={express} alt="" />
               
                 
                </div>
              </div>
             
              <p className="text-xl mt-3">Express Js</p>
              <p className="text-xl mt-3">Expect</p>
            </div>
            {/* ---------- */}
            <div             
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) 60%,#ddd 60%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center ">
                  <img className="w-12 h-12" src={mongo} alt="" />
                 
                </div>
              </div>
           
              <p className="text-xl mt-3">MongoDb</p>
              <p className="text-xl mt-3">Expect</p>
            </div>
            {/* -------- */}
    
        </div>
      </div>
    </section>
  );
};

export default Skills;
