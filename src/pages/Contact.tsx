import {
  BsGithub,
  BsTelegram,
  BsLinkedin,
  BsEnvelope,
  BsSend,
} from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div className="w-full h-16 bg-gradient-to-r from-one via-two to-three flex justify-center items-center ">
        <div className="w-full h-12 bg-white sm:skew-y-1 skew-y-3 flex justify-center items-center text-black font-medium sm:text-3xl text-xl">
          <p>Front End Engineer ✨ UI / UX Engineer</p>
        </div>
      </div>

      <div className="w-full flex justify-center p-4">
        <div className="sm:w-5/6 w-full h-fit grid sm:grid-cols-2">
          <div className="p-5">
            <p className="text-4xl font-bold mb-4"> Contact Me</p>
            <div className="sm:w-5/6 gap-2">
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered input-warning w-full m-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered input-warning w-full m-2"
              />
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered input-warning w-full m-2"
              />
              <textarea
                className="textarea textarea-warning m-2 w-full"
                placeholder="Message"
              />

              <div className="flex w-full justify-end">
                <div >
                <a
                  href="https://wa.me/6285158693933"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-gradient-to-r from-one via-two to-three text-black rounded-full h-12 mt-5"
                >
                  <p>
                  <BsSend />
                  </p>
                  <p className="ml-2"> Send</p>
                </a>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 flex items-center">
            <div className="sm:text-2xl text-xl">
              <div >
                <a
                  href="https://github.com/Razdan12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex gap-3 items-center mb-5 cursor-pointer"
                >
                  <p>
                    <BsGithub />
                  </p>
                  <p className="ml-2">Razdan12</p>
                </a>
              </div>
              <div >
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex gap-3 items-center mb-5 cursor-pointer"
                >
                  <p>
                    <BsTelegram />
                  </p>
                  <p className="ml-2">Nurcahyanto</p>
                </a>
              </div>
              <div className="w-full flex gap-3 items-center mb-5 cursor-pointer">
                <BsEnvelope />
                <p>nurcahyanto804@gmail.com</p>
              </div>
              <div >
                <a
                  href="https://www.linkedin.com/in/nurcah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex gap-3 items-center mb-5 cursor-pointer"
                >
                  <p>
                    <BsLinkedin />
                  </p>
                  <p className="ml-2">Nur Cahyanto</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
