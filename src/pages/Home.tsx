import Layout from "../component/Layout";
import Profil1 from "../assets/profil1.png";
import purple1 from "../assets/3D/Clay_Purple0002.png";
import segRed from "../assets/3D/Gon_3_Down_Standing_Outline0000.png";
import kotRed from "../assets/3D/Gon_4_Standing_Outline0000.png";
import platonic from "../assets/3D/Clay_Purple0094.png";
import torus from "../assets/3D/Torus_2x_Link0003.png";
import spring from "../assets/3D/Spring_Fat_Tall0001.png";
import Foto from "../assets/image.png";

const Home = () => {
  return (
    <div data-theme="dark">
      <Layout id="home">
        <div className="min-h-screen bg-base-200 overflow-hidden">
          <div className="grid sm:grid-cols-2">
            <div className="sm:w-full h-full p-5 flex justify-center items-center">
              <div className="z-1 absolute left-0 top-0 blur-xl">
                <img
                  src={purple1}
                  alt="purple"
                  className="transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="w-full mb-5 z-10">
                <div className="text-center text-transparent bg-clip-text bg-gradient-to-r from-three via-two to-one flex justify-center font-bold text-4xl sm:text-5xl">
                  Hello I'm Nur Cahyanto,
                </div>
                <p className="text-center text-4xl sm:text-5xl mt-2 text-white">
                  Frontend Engineer
                </p>
                <p className="text-center text-white">
                  Frontend Engineer in Indonesia
                </p>
                <div className="flex justify-center gap-3 mt-5">
                  <div className="btn bg-gradient-to-r from-one via-two to-three rounded-full text-white font bold">
                    Get in Touch
                  </div>
                  <div className="btn btn-outline rounded-full text-white font bold">
                    View all work
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:w-full h-full p-5">
              <div className="z-1 relative w-full">
                <img
                  className="w-32 absolute top-0 left-0 "
                  src={segRed}
                  alt=""
                />
                <img
                  className="w-32 top-20 right-0 absolute"
                  src={kotRed}
                  alt=""
                />
                <img
                  className="sm:inset-0 top-40 absolute blur-xl transform hover:scale-110 transition-transform duration-500"
                  src={platonic}
                  alt=""
                />
                <img
                  className="w-16 top-90 right-0 absolute"
                  src={torus}
                  alt=""
                />
              </div>

              <div className="flex justify-center items-center z-10">
                  <img
                    src={Profil1}
                    alt="picture"
                    className="transition duration-150 grayscale hover:grayscale-0"
                  />
              </div>
            </div>
          </div>

          <div className="w-full h-16 bg-gradient-to-r from-one via-two to-three flex justify-center items-center ">
            <div className="w-full h-12 bg-white sm:skew-y-1 skew-y-3 flex justify-center items-center text-black font-medium sm:text-3xl text-xl">
              <p>Front End Engineer ✨ UI / UX Engineer </p>
            </div>
          </div>

          <div className="w-full mt-5 p-5">
            <div className="z-1 relative">
              <img
                className="w-32 top-0 right-0 absolute"
                src={kotRed}
                alt=""
              />
              <img className="w-32 top-0 left-0 absolute" src={segRed} alt="" />
              <img
                className="sm:w-52 w-32 sm:bottom-0 bottom-20 left-0 absolute"
                src={spring}
                alt=""
              />
            </div>
            <div className="z-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-three via-two to-one flex justify-center font-bold text-3xl sm:text-4xl">
              Service
            </div>
            <div className="z-10 flex justify-center">
              <div className="w-5/6 sm:flex justify-between items-center mt-5 sm:p-5 p-1 sm:bg-gradient-to-r from-three via-two to-one rounded-lg">
                <div className="sm:w-1/3 w-full m-3 h-32 rounded-lg  bg-one shadow-lg flex justify-center p-3">
                  <div className="text-center items-center text-white">
                    <p className="text-5xl">👨‍💻</p>
                    <p className="text-2xl font-medium mt-2">
                      Frontend Engineer
                    </p>
                  </div>
                </div>
                <div className="sm:w-1/3 w-full m-3 h-32 rounded-lg  bg-two shadow-lg flex justify-center p-3">
                  <div className="text-center items-center text-white">
                    <p className="text-5xl">👨‍💻</p>
                    <p className="text-2xl font-medium mt-2">
                      UI / UX Engineer
                    </p>
                  </div>
                </div>
                <div className="sm:w-1/3 w-full m-3 h-32 rounded-lg  bg-three shadow-lg flex justify-center p-3">
                  <div className="text-center items-center text-white">
                    <p className="text-5xl">👨‍💻</p>
                    <p className="text-2xl font-medium mt-2">Web Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-5 p-4 text-center">
            <div className="z-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-three via-two to-one flex justify-center font-bold text-3xl sm:text-4xl">
              About Me
            </div>
            <div className="mt-5 grid sm:grid-cols-2 justify-center">
              <div className="sm:w-full flex justify-center items-center">
              <div className="sm:w-full h-full p-5">
              <div className="z-1 relative w-full">
                
                <img
                  className="sm:inset-0 top-40 absolute blur-xl transform hover:scale-110 transition-transform duration-500"
                  src={platonic}
                  alt=""
                />
              
                
              </div>

              <div className="flex justify-center items-center z-10">
                  <img
                    src={Foto}
                    alt="picture"
                    className="transition grayscale-0 w-5/6"
                  />
              </div>
            </div>
              </div>

              <div className="sm:w-full bg-yellow-700">ini tulisan</div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
