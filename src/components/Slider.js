import slide1 from "../assets/slider1.jpeg"
import slide2 from "../assets/slider2.jpeg"
import slide3 from "../assets/slider3.jpeg"

function Slider() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide relative "
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators bg-gray-400 rounded-full  absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active "
          aria-current="true"
          aria-label="Slide 1"
          
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner shadow-inner  relative w-full overflow-hidden rounded-3xl">
        <div className="carousel-item active relative float-left w-full">
          <img
            src={slide1}
            className="block w-full "
            alt="..."
          />
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src={slide2}
            className="block w-full "
            alt="..."
          />
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src={slide3}
            className="block w-full "
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev absolute  top-32 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-gray-400 rounded-full bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-32 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat bg-gray-400 rounded-full"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
