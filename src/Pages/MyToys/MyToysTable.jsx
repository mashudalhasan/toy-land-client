import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ProductDetails from "../../Shared/ProductDetails/ProductDetails";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyToysTable = ({ shop }) => {
  const { user } = useContext(AuthContext);
  const { _id, name, picture, price, quantity, category } = shop;
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
        <div className="flex justify-center items-center gap-2">
          <button className="btn bg-info btn-xs border-none hover:bg-sky-500">
            <Link to={`/updateToys/${_id}`}>
              <FaEdit />
            </Link>
          </button>
          <button
            onClick={openModal}
            className="btn bg-info btn-xs border-none hover:bg-sky-500"
          >
            details
          </button>
          <button
            onClick={openModal}
            className="btn bg-error btn-xs border-none hover:bg-red-500"
          >
            <FaTrash />
          </button>
        </div>
        {isModalOpen && <ProductDetails shop={shop} closeModal={closeModal} />}
      </th>
    </tr>
  );
};

export default MyToysTable;
