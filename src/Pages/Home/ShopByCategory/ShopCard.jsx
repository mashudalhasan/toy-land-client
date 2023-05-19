import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import ProductDetails from "../../../Shared/ProductDetails/ProductDetails";

const ShopCard = ({ shop }) => {
  const { _id, name, picture, price, rating, subCategory } = shop;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card w-11/12 md:w-96 bg-base-100 shadow-xl mx-auto">
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
            <button
              className="text-info transition hover:scale-150 hover:shadow-xl"
              onClick={openModal}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && <ProductDetails shop={shop} closeModal={closeModal} />}
    </div>
  );
};

export default ShopCard;
