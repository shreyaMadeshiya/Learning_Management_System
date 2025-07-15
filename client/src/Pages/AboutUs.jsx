// import about from "../assets/Images/about.jpg";
// import CarouselSlide from "../Components/CarouselSlide.jsx";
// import { celebrities } from "../Constants/CelebrityData.js";
// import HomeLayout from "../Layouts/HomeLayout.jsx";
// function AboutUs(){
    
  
//   return(
//     <HomeLayout>

//         <div className="pl-20 pt-20 flex flex-col text-white">
//             <div className="flex items-center gap-5 mx-10">
//                 <section className="w-1/2 space-y-10">
//                    <h1 className="text-5xl text-yellow-500 font-semibold">
//                         Affordable and quality education
//                    </h1>
//                    <p className="text=xl text-gray-400">
//                       Our goal is to provide the Affordable and quality education to the world.
//                       We are providing the platform for the aspiring teaachers and students to share 
//                       their skills, creativity and knowledge to each other to empower and contribute
//                       in the growth and wellness of mankind.
//                    </p>
//                 </section>
//                 <div className="w-1/2">
//                     <img 
//                        id="test1"
//                        style={{
//                         filter:"drop-shadow(0px 10px 10px rgb(0,0,0))"
//                        }}
//                        alt="about main page"

//                     className="drop-shadow-2xl" src={about}/>
//                 </div>
//             </div>
//             <div className="carousel m-auto w-1/2 my-16">
//             {celebrities && celebrities.map(celebrity =>                                    
//                                                       (<CarouselSlide {...celebrity}
//                                                        key={celebrity.slideNumber}
//                                                        totalSlides={celebrity.length} 
//                                                        />))}
                
//             </div>

//         </div>
        
//        </HomeLayout>
//    )
// }

// export default AboutUs;

import about from "../assets/Images/about.jpg";
import CarouselSlide from "../Components/CarouselSlide.jsx";
import { celebrities } from "../Constants/CelebrityData.js";
import HomeLayout from "../Layouts/HomeLayout.jsx";

function AboutUs() {
  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
        <div className="flex flex-col md:flex-row items-center gap-5 mx-10">
          <section className="w-full md:w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and quality education
            </h1>
            <p className="text-xl text-gray-400">
              Our goal is to provide affordable and quality education to the world.
              We are providing a platform for aspiring teachers and students to share 
              their skills, creativity, and knowledge with each other to empower and contribute
              to the growth and wellness of mankind.
            </p>
          </section>
          <div className="w-full md:w-1/2">
            <img 
              id="test1"
              style={{ filter: "drop-shadow(0px 10px 10px rgb(0,0,0))" }}
              alt="Illustration representing affordable and quality education"
              className="drop-shadow-2xl"
              src={about}
            />
          </div>
        </div>

        <div className="carousel m-auto w-4/5 md:w-1/2 my-16">
          {celebrities && celebrities.map((celebrity) => (
            <CarouselSlide
              {...celebrity}
              key={celebrity.slideNumber}
              totalSlides={celebrities.length}
            />
          ))}
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;
