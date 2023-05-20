import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";
import MyToysTable from "./MyToysTable";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // State for sorting order

  const url = `http://localhost:5000/toys?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);

  const handlePriceSort = () => {
    // Toggle the sorting order when Price button is clicked
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortedToys = [...myToys]; // Create a copy of the original shops array
  sortedToys.sort((a, b) => {
    // Sort the array based on price field and sorting order
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);
    if (sortOrder === "asc") {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });

  const SortIcon = sortOrder === "asc" ? FaSortAlphaDown : FaSortAlphaUp;

  return (
    <div className="my-10">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Toy Name</th>
              <th>Seller</th>
              <th>Category</th>
              <th>
                <button
                  className="flex items-center gap-1 uppercase"
                  onClick={handlePriceSort}
                >
                  Price{" "}
                  <span>
                    <SortIcon className="text-base" />
                  </span>
                </button>
              </th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                myToys.map(shop => <MyToysTable key={shop._id} shop={shop}></MyToysTable>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
