import Layout from "../component/Layout";

import Hero from "./Hero";
import Service from "./Service";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Layout id="home">
        <div className="min-h-screen bg-base-200 overflow-hidden">
          <div id="hero">
            <Hero />
          </div>

          <div className="w-full h-16 bg-gradient-to-r from-one via-two to-three flex justify-center items-center ">
            <div className="w-full h-12 bg-white sm:skew-y-1 skew-y-3 flex justify-center items-center text-black font-medium sm:text-3xl text-xl">
              <p>Front End Engineer ✨ UI / UX Engineer</p>
            </div>
          </div>

          <div id="service">
            <Service />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="project">
            <Project />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
