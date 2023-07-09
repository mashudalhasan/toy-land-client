import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

const PurchaseSteps = () => {
  return (
    <section className="overflow-hidden py-10 bg-white sm:py-16 lg:py-24" data-aos="fade-up"
    data-aos-duration="2000">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Looking to enhance your collection?
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Explore our premium collections that await you.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
            />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-sky-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 1 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Sign up for free
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Start your journey by creating a free account to access
                exclusive benefits and features.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-sky-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 2 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Select your toys
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Explore our wide selection of toys and find the perfect ones
                that capture your imagination and bring joy to your collection.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-sky-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 3 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Own your dream toys
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Make your dream a reality by securely purchasing the toys
                you&apos;ve chosen. Enjoy the thrill of adding them to your
                collection and creating memorable moments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSteps;
