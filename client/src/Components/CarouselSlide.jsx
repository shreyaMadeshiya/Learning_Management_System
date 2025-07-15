// function CarouselSlide({image,title,description,slideNumber,totalSlides}){
//      return( 
//                <div id={`slide${slideNumber}`} className="carousel-item relative w-full">
//                       <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
//                         <img src={image} className="w-full" />
//                         <p className="text-xl-gray-200 ">
//                              {description}
//                         </p>
//                         <h3 className="text-2xl font-semibold">{title} </h3>
//                         <div className="absolute w-[50%] left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                           <a href={`#slide${(slideNumber==1?totalSlides : (totalSlides-1))}`} className="btn btn-circle">❮</a>
//                           <a href={`#slide${(slideNumber)% totalSlides+1}`} className="btn btn-circle">❯</a>
//                         </div>
//                      </div>
//                 </div>

//      )
// }
// export default CarouselSlide;

function CarouselSlide({ image, title, description, slideNumber, totalSlides }) {
  return (
    <div id={`slide${slideNumber}`} className="carousel-item relative w-full">
      <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
        <img src={image} alt={`${title} image`} className=" w-64 h-64 object-cover  max-w-md rounded-full shadow-lg" />
        
        <p className="text-xl text-gray-200 text-center">
          {description}
        </p>

        <h3 className="text-2xl font-semibold text-white text-center">
          {title}
        </h3>

        {/* Navigation buttons */}
        <div className="absolute w-[90%] left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <a
            href={`#slide${slideNumber === 1 ? totalSlides : slideNumber - 1}`}
            className="btn btn-circle bg-white text-black hover:bg-yellow-400"
          >
            ❮
          </a>
          <a
            href={`#slide${(slideNumber % totalSlides) + 1}`}
            className="btn btn-circle bg-white text-black hover:bg-yellow-400"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarouselSlide;
