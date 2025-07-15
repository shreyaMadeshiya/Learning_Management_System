import AlbertEinstein from "../assets/Images/.AlbertEinsteinjpg";
import about from "../assets/Images/about.jpg";
import APJ from "../assets/Images/APJ.jpg";
import BillGates from "../assets/Images/BillGates.jpg";
import NelsonMandela from "../assets/Images/NelsonMandela.jpg";
import steveJobs from "../assets/Images/steveJobs.jpg";
import HomeLayout from "../Layouts/HomeLayout.jsx";
function AboutUs(){
   return(
       <HomeLayout>

        <div className="pl-20 pt-20 flex flex-col text-white">
            <div className="flex items-center gap-5 mx-10">
                <section className="w-1/2 space-y-10">
                   <h1 className="text-5xl text-yellow-500 font-semibold">
                        Affordable and quality education
                   </h1>
                   <p className="text=xl text-gray-400">
                      Our goal is to provide the Affordable and quality education to the world.
                      We are providing the platform for the aspiring teaachers and students to share 
                      their skills, creativity and knowledge to each other to empower and contribute
                      in the growth and wellness of mankind.
                   </p>
                </section>
                <div className="w-1/2">
                    <img 
                       id="test1"
                       style={{
                        filter:"drop-shadow(0px 10px 10px rgb(0,0,0))"
                       }}
                       alt="about main page"

                    className="drop-shadow-2xl" src={about}/>
                </div>
            </div>
            <div className="carousel m-auto w-1/2 my-16">
                 
            </div>

            <div className="carousel w-1/2 my-16 m-auto">
                <div id="slide1" className="carousel-item relative w-full">
                  <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                    <img src={APJ} className="w-40 rounded-full border-2 border-gray-400"/>
                    
                    <p className="text-xl-gray-200 ">
                         {"Failure will never overtake me if my determination to succeed is strong enough"}
                    </p>
                    <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
                    <div className="absolute w-[50%] flex justify-between transform-translate-y-12 left-5 right-5 top-1/2">
                      <a href="#slide5" className="btn btn-circle">❮</a>
                      <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                    <img src={BillGates} className="w-full" />
                     <p className="text-xl-gray-200 ">
                         {" 'Success is a lousy teacher. It seduces smart people into thinking they can't lose.'"}
                    </p>
                    <h3 className="text-2xl font-semibold">Bill Gates </h3>
                    <div className="absolute w-[50%] left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide1" className="btn btn-circle">❮</a>
                      <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                 </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                  <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                    <img src={NelsonMandela} className="w-full" />
                    <p className="text-xl-gray-200 ">
                         {"Education is the most powerful tool you can use to change the world"}
                    </p>
                    <h3 className="text-2xl font-semibold">Nelson Mandela </h3>
                    <div className="absolute w-[50%] left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide2" className="btn btn-circle">❮</a>
                      <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                 </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                  <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                    <img src={steveJobs} className="w-full" />
                     <p className="text-xl-gray-200 ">
                         {"Don't let the noise of others opinions drown out your own inner voice."}
                    </p>
                    <h3 className="text-2xl font-semibold">Steve Jobs </h3>
                    <div className="absolute w-[50%] left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide3" className="btn btn-circle">❮</a>
                      <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                 </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                  <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                    <img src={AlbertEinstein} className="w-full" />
                     <p className="text-xl-gray-200 ">
                         {"A person who never made a mistake never tried something new"}
                    </p>
                    <h3 className="text-2xl font-semibold">Albert Einstein </h3>
                    <div className="absolute w-[50%] left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide4" className="btn btn-circle">❮</a>
                      <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                 </div>
            </div>
            
            
 
  
      </div>
        </div>
       </HomeLayout>
   )
}

export default AboutUs;