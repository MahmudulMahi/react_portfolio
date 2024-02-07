import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/BloodProject.jpg";
import project2 from "../assets/images/vtsweb.jpg";
import project3 from "../assets/images/bossres.jpg";
import project4 from "../assets/images/aggloToys.jpg";
import project5 from "../assets/images/423568326_764175218931908_2293458353246363854_n.jpg";


import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img:  project1,
      name: "Blood Donation Project",
      github_link: "https://github.com/MahmudulMahi",
      live_link: "https://blood-donation-frontend-visionarytechsolution.vercel.app/",
    },
    {
      img: project2,
      name: "Company website",
      github_link: "https://github.com/MahmudulMahi/-company-website",
      live_link: "https://vts-web-beta.vercel.app/",
    },
    {
      img: project3,
      name: "Restaurant Management System",
      github_link: "https://github.com/MahmudulMahi/restaurant-client",
      live_link: "https://bistro-boss-restaurant-c3449.web.app/",
    },
    {
      img: project4,
      name: "Agglo Toys ecommerce website",
      github_link:
        "https://github.com/MahmudulMahi/agglo-toys-client",
      live_link: "https://agglos-toys.web.app/",
    },
    {
      img: project5,
      name: "Car Management System",
      github_link:
        "https://github.com/MahmudulMahi/car-doctor-clients1",
      live_link: "https://beautiful-squirrel-0129a6.netlify.app/",
    }


  ];
  
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My  works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className=" w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="w-full h-[450px] p-4 bg-slate-700 rounded-xl">
                <div className="">
                <img  src={project_info.img} alt="" className="rounded-lg h-[300px]" />
                </div>
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
              
               
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Project;
