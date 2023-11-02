import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Carousels = () => {
  return (
    <>
      <Carousel>
        <div>
          <img src={process.env.PUBLIC_URL + "/images/adds/slide1.jpg"} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/images/adds/slide2.jpg"} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/images/adds/slide3.jpg"} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </>
  );
};
export default Carousels;
