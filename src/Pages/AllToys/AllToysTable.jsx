import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ProductDetails from "../../Shared/ProductDetails/ProductDetails";
import Swal from "sweetalert2";

const AllToysTable = ({ shop }) => {
  const { user } = useContext(AuthContext);
  const { name, picture, price, quantity, category } = shop;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={picture} alt="Toys" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{user?.displayName}</td>
      <td>{category}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <th>
        <button
          onClick={user ? openModal : handlePopUp}
          className="btn bg-info btn-xs border-none hover:bg-sky-500"
        >
          details
        </button>
        {isModalOpen && <ProductDetails shop={shop} closeModal={closeModal} />}
      </th>
    </tr>
  );
};

export default AllToysTable;
