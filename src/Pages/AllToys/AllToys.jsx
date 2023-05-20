import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllToysTable from "./AllToysTable";
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";

const AllToys = () => {
  const shops = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // State for sorting order

  const handlePriceSort = () => {
    // Toggle the sorting order when Price button is clicked
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredShops = shops.filter((shop) =>
    shop.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const sortedShops = [...filteredShops];

  sortedShops.sort((a, b) => {
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
      <div className="flex justify-center items-center gap-2 w-11/12 mx-auto">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="rounded-md bg-info text-white font-semibold px-2 lg:px-8 py-3 transition hover:bg-sky-500 active:bg-sky-500">
          Search
        </button>
      </div>
      <div className="overflow-x-auto w-full mt-5">
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
            {sortedShops.map((shop) => (
              <AllToysTable key={shop._id} shop={shop}></AllToysTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
