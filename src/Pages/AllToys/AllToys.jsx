import { useLoaderData } from "react-router-dom";
import AllToysTable from "./AllToysTable";

const AllToys = () => {
  const shops = useLoaderData();
//   console.log(toys);

  return (
    <div className="my-10">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead >
            <tr>
              <th></th>
              <th>Toy Name</th>
              <th>Seller</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {shops.map((shop) => (
              <AllToysTable key={shop._id} shop={shop}></AllToysTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
