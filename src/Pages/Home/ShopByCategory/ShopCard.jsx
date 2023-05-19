import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ShopCard = ({ shop }) => {
  const { name, picture, price, rating, subCategory } = shop;

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Price: ${price}</p>
        <div className="card-actions justify-between">
          <div className="flex justify-center items-center gap-2">
            <div className="badge badge-outline">{subCategory}</div>
            <div className="badge badge-outline">{rating}</div>
          </div>
          <div>
            <Link to={`/`}>
              <button className="text-info transition hover:scale-150 hover:shadow-xl">
                <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
