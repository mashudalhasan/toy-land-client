import Lottie from "lottie-react";
import redCar from "../../../assets/lotties/87459-sports-car.json";
import train from "../../../assets/lotties/129806-baby-toy-train.json";
import car from "../../../assets/lotties/9740-car-animation.json";
import car2 from "../../../assets/lotties/97973-car-in-motion.json";
import car3 from "../../../assets/lotties/79797-car-lottie-animation.json";
import bus from "../../../assets/lotties/114462-bus-transport.json";
import aeroPlane from "../../../assets/lotties/24596-an-aeroplane-toy.json";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  return (
    <div className="mb-10">
      <Marquee
        className="h-28 lg:h-40"
        speed={100}
        pauseOnHover={true}
      >
        <div className="flex justify-evenly items-center gap-3 md:gap-10">
          <Lottie
            animationData={redCar}
            loop={true}
            className="w-full h-24 lg:h-36"
          />
          <Lottie
            animationData={train}
            loop={true}
            className="w-full h-24 lg:h-36"
          />
          <Lottie
            animationData={car}
            loop={true}
            className="w-full h-24 lg:h-36"
          />
          <Lottie
            animationData={car2}
            loop={true}
            className="w-full h-24 lg:h-36"
          />
          <Lottie
            animationData={car3}
            loop={true}
            className="w-full h-24 lg:h-36"
          />
          <Lottie
            animationData={bus}
            loop={true}
            className="w-full h-24 lg:h-36"
          />
          <Lottie
            animationData={aeroPlane}
            loop={true}
            className="w-full h-24 lg:h-36"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Gallery;
