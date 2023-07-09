import useShop from "../../../hooks/useShop";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

const PopularToys = () => {
  const [shops] = useShop();

  // Sort the shops array by price in descending order
  const sortedShops = shops.sort((a, b) => b.price - a.price);

  // Slice the sorted array to show only the first 9 items
  const topNineToys = sortedShops.slice(0, 9);

  return (
    <section className="mb-10 overflow-hidden">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10">
        Our Premium Toys
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topNineToys.map((toy) => (
          <div
            key={toy._id}
            className="relative w-11/12 md:w-full mx-auto"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img src={toy.picture} alt="" className="rounded-2xl" />
            <p className="badge badge-error text-white font-medium absolute top-3 right-3">
              ${toy.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularToys;
