import { FaArrowRight } from "react-icons/fa";
import { useContext, useState } from "react";
import ProductDetails from "../../../Shared/ProductDetails/ProductDetails";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const ShopCard = ({ shop }) => {
  const { user } = useContext(AuthContext);
  const { name, picture, price, rating, category } = shop;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePopUp = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Login to View Details!",
      showDenyButton: true,
      denyButtonText: "Cancel",
      showConfirmButton: false,
      footer:
        '<a href="/login" class="text-sky-800">Go for <span class="font-semibold underline">Login</span></a>',
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card w-11/12 md:w-96 bg-base-100 shadow-md mx-auto">
      <figure>
        <img src={picture} alt="Toys" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-xs badge-info px-2 py-2 text-white font-semibold">
            NEW
          </div>
        </h2>
        <p>Price: ${price}</p>
        <div className="card-actions justify-between">
          <div className="flex justify-center items-center gap-2">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{rating}</div>
          </div>
          <div>
            <button
              className="text-info transition hover:scale-150 hover:shadow-xl"
              onClick={user ? openModal : handlePopUp}
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
