import {
    BsGithub,
   
  } from "react-icons/bs";
const Project = () => {
  return (
    <>
        <div className="box mt-12 mb-12 relative w-full h-fit flex justify-center items-center z-10">
            <span className="block absolute top-0 left-0 right-0 bottom-0 z-10 pointer-events-none"></span>
            <div className="content relative w-5/6 h-fit p-5 shadow-md rounded-lg z-10">
              <div className="z-10 mt-5 mb-5 text-center  flex justify-center font-bold text-3xl sm:text-4xl">
                Project
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="w-full text-center">
                  <div className="flex justify-center items-center flex-wrap gap-2">
                    <div className="w-80 text-left h-fit border-2 rounded-md bg-base-100 transform hover:scale-110 transition-transform duration-500 hover:z-20">
                      <img
                        src="https://balitteknologikaret.co.id/wp-content/uploads/2023/03/Project-Adalah-Penjelasan-Jenis-Karakteristik-dan-Contoh.jpg"
                        alt=""
                      />
                      <p className="mt-2 ml-2 text-2xl font-medium">
                        Playground Pro
                      </p>
                      <div className="flex gap-1 flex-wrap m-3">
                        <p className="badge badge-primary">React Js</p>
                        <p className="badge badge-primary">TypeScript</p>
                        <p className="badge badge-primary">Chart Js</p>
                        <p className="badge badge-primary">Vite</p>
                        <p className="badge badge-primary">Leaflet JS</p>
                      </div>
                      <p className="mt-2 ml-2 text-md ">
                        ini deskripsi project ini deskripsi project ini
                        deskripsi project ini deskripsi project ini deskripsi
                        project ini deskripsi project
                      </p>
                      <div className="w-full flex justify-center mt-5 mb-5">
                        <div className="btn btn-outline flex justify-center w-5/6 rounded-full h-12">
                          <p>
                            <BsGithub />
                          </p>{" "}
                          Live Code
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="btn bg-gradient-to-r from-one via-two to-three text-black rounded-full h-12 mt-5">
                    <p>
                      <BsGithub />
                    </p>
                    View All Project
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Project