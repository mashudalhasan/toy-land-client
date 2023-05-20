import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ProductDetails from "../../Shared/ProductDetails/ProductDetails";

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
          onClick={openModal}
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
