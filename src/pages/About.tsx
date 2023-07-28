
import platonic from "../assets/3D/Clay_Purple0094.png";
import spring from "../assets/3D/Spring_Fat_Tall0001.png";
import Foto from "../assets/image.png";

const About = () => {
  return (
    <>
      <div className="w-full mt-5 p-4 text-center ">
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

          <div className="sm:w-full sm:text-left flex items-center mt-5">
            <div>
              <div className="text-5xl font-medium mb-5 relative">
                About{" "}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-three via-two to-one">
                  Nur Cahyanto
                </span>
                <img
                  className="sm:w-32 w-20 sm:bottom-0 bottom-0 right-0 absolute skew-x-12"
                  src={spring}
                  alt=""
                />
              </div>
              <div className="flex w-full h-full pr-5 mt-5">
                <p>
                  I am a dedicated frontend engineer with expertise in
                  developing robust application frontends using React Js, Vite,
                  Tailwind, Daisy Ui, as well as integrating Restful API and
                  GraphQL into projects. With a strong focus on user experience,
                  I excel in creating efficient UI/UX system designs using
                  Figma. I possess a comprehensive understanding of modern web
                  technologies and strive to deliver seamless user interfaces
                  that enhance user interactions. With a keen eye for detail and
                  a passion for crafting intuitive designs, I am committed to
                  delivering high-quality solutions that meet both functional
                  and aesthetic requirements. My ability to collaborate
                  effectively in cross-functional teams, combined with my
                  problem-solving skills, enables me to successfully translate
                  project requirements into innovative frontend solutions. I am
                  constantly seeking opportunities to expand my knowledge and
                  stay up-to-date with emerging trends in frontend development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
