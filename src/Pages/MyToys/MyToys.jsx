import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";
import MyToysTable from "./MyToysTable";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [toys, setToys] = useState(myToys);
  const [sortOrder, setSortOrder] = useState("asc"); // State for sorting order

  const url = `https://toy-land-server-dusky.vercel.app/toys?email=${user?.email}`;

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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-land-server-dusky.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              setToys((prevToys) => prevToys.filter((toy) => toy._id !== id));
              setMyToys((prevToys) => prevToys.filter((toy) => toy._id !== id));
            }
          });
      }
    });
  };

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
            {myToys.map((shop) => (
              <MyToysTable
                key={shop._id}
                shop={shop}
                toys={toys}
                setToys={setToys}
                handleDelete={handleDelete}
              ></MyToysTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
