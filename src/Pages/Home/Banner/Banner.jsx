import { Link } from "react-router-dom";
import image from "../../../assets/—Pngtree—3d rendering of sport car_4397360.png";
import image1 from "../../../assets/ORVZE40.jpg";

const Banner = () => {
  return (
    <div className="hero lg:min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-0 justify-between">
        <img src={image1} className="w-full lg:max-w-lg h-auto" />
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Welcome to <br className="lg:hidden"/> Toy Land 🏎️
          </h1>
          <p className="py-6 text-gray-600">
            Experience boundless joy at Toy Land! Discover a world of
            captivating toys for endless playtime fun. Shop now and unleash the
            magic of childhood!
          </p>
          <Link
            className="group relative inline-block overflow-hidden border border-warning px-8 py-3 rounded"
            to="/login"
          >
            <span className="absolute inset-y-0 left-0 w-[2px] bg-warning transition-all group-hover:w-full group-active:bg-yellow-400"></span>

            <span className="relative text-sm font-medium text-warning transition-colors group-hover:text-white">
              Learn More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
