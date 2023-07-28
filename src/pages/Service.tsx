import segRed from "../assets/3D/Gon_3_Down_Standing_Outline0000.png";
import kotRed from "../assets/3D/Gon_4_Standing_Outline0000.png";
import spring from "../assets/3D/Spring_Fat_Tall0001.png";

const Service = () => {
  return (
    <>
      <div className="w-full mt-5 p-5">
        <div className="z-1 relative">
          <img className="w-32 top-0 right-0 absolute" src={kotRed} alt="" />
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
            <div className="sm:w-1/3 w-full m-3 h-32 rounded-lg  bg-one shadow-lg flex justify-center p-3 transform hover:scale-110 transition-transform duration-500">
              <div className="text-center items-center text-white">
                <p className="text-5xl">👨‍💻</p>
                <p className="text-2xl font-medium mt-2">Frontend Engineer</p>
              </div>
            </div>
            <div className="sm:w-1/3 w-full m-3 h-32 rounded-lg  bg-two shadow-lg flex justify-center p-3 transform hover:scale-110 transition-transform duration-500">
              <div className="text-center items-center text-white">
                <p className="text-5xl">👨‍💻</p>
                <p className="text-2xl font-medium mt-2">UI / UX Engineer</p>
              </div>
            </div>
            <div className="sm:w-1/3 w-full m-3 h-32 rounded-lg  bg-three shadow-lg flex justify-center p-3 transform hover:scale-110 transition-transform duration-500">
              <div className="text-center items-center text-white">
                <p className="text-5xl">👨‍💻</p>
                <p className="text-2xl font-medium mt-2">Web Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
