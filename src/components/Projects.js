import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import moviedb from "./../images/moviedb.png";
import country from "./../images/country.png";
import menu from "./../images/menu.png";
import tour from "./../images/tours.png";
import tabs from "./../images/tabs.png";
import shortly from "./../images/shortly.png";
const Projects = () => {
  return (
    <div>
      <Header />
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-4/5 ml-8">
              <a
                href="https://folarmi.github.io/moviedb"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={moviedb}
                  alt=""
                  className="project-img rounded-lg transform transition duration-500 hover:scale-110"
                />
              </a>
              <p className="text-center uppercase mt-2 weight-500 text-3xl">
                Movie db
              </p>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-4/5 ml-8">
              <a
                href="https://fola-country-search.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={country}
                  alt=""
                  className="project-img rounded-lg transform transition duration-500 hover:scale-110"
                />
              </a>
              <p className="text-center uppercase mt-2 weight-500 text-3xl">
                country search
              </p>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-4/5 ml-8">
              <a
                href="https://my-menu.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={menu}
                  alt=""
                  className="project-img rounded-lg transform transition duration-500 hover:scale-110"
                />
              </a>
              <p className="text-center uppercase mt-2 weight-500 text-3xl">
                menus
              </p>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-4/5 ml-8">
              <a
                href="https://tours-delta.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={tour}
                  alt=""
                  className="project-img rounded-lg transform transition duration-500 hover:scale-110"
                />
              </a>
              <p className="text-center uppercase mt-2 weight-500 text-3xl">
                tours
              </p>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-4/5 ml-8">
              <a
                href="https://tabs-red.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={tabs}
                  alt=""
                  className="project-img rounded-lg transform transition duration-500 hover:scale-110"
                />
              </a>
              <p className="text-center uppercase mt-2 weight-500 text-3xl">
                tabs
              </p>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-4/5 ml-8">
              <a
                href="https://url-shortener-rho.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={shortly}
                  alt=""
                  className="project-img rounded-lg transform transition duration-500 hover:scale-110"
                />
              </a>
              <p className="text-center uppercase mt-2 weight-500 text-3xl">
                shortly
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
