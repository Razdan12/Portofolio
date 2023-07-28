
import Profil1 from "../assets/profil1.png";
import purple1 from "../assets/3D/Clay_Purple0002.png";
import segRed from "../assets/3D/Gon_3_Down_Standing_Outline0000.png";
import kotRed from "../assets/3D/Gon_4_Standing_Outline0000.png";
import platonic from "../assets/3D/Clay_Purple0094.png";
import torus from "../assets/3D/Torus_2x_Link0003.png";

const Hero = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2">
        <div className="sm:w-full h-full p-5 flex justify-center items-center">
          <div className="z-1 absolute left-0 top-0 blur-xl">
            <img
              src={purple1}
              alt="purple"
              className="transform hover:scale-110 transition-transform duration-500 opacity-50"
            />
          </div>
          <div className="w-full mb-5 z-10">
            <div className="text-center text-transparent bg-clip-text bg-gradient-to-r from-three via-two to-one flex justify-center font-bold text-4xl sm:text-5xl">
              Hello I'm Nur Cahyanto,
            </div>
            <p className="text-center text-4xl sm:text-5xl mt-2 ">
              Frontend Engineer
            </p>
            <p className="text-center">Frontend Engineer in Indonesia</p>
            <div className="flex justify-center gap-3 mt-5">
              <div className="btn bg-gradient-to-r from-one via-two to-three rounded-full text-white font bold transform hover:scale-110 transition-transform duration-500">
                Get in Touch
              </div>
              <div className="btn btn-outline rounded-full font bold transform hover:scale-110 transition-transform duration-500">
                View all work
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-full h-full p-5">
          <div className="z-1 relative w-full">
            <img className="w-32 absolute top-0 left-0 " src={segRed} alt="" />
            <img className="w-32 top-20 right-0 absolute" src={kotRed} alt="" />
            <img
              className="sm:inset-0 top-40 absolute blur-xl transform hover:scale-110 transition-transform duration-500"
              src={platonic}
              alt=""
            />
            <img className="w-16 top-90 right-0 absolute" src={torus} alt="" />
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
    </>
  );
};

export default Hero;
