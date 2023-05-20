import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMyToys = () => {
  const { user } = useContext(AuthContext);
  const toys = useLoaderData();
  const { _id, name, price, quantity, description } = toys;

  const handleUpdateToy = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedToys = { name, price, quantity, description };
    console.log(updatedToys);

    // send data to the server
    fetch(`http://localhost:5000/toys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toys Updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F7FF] p-8 lg:p-24">
      <h2 className="text-3xl font-extrabold mb-8">Update: {name}</h2>
      <form onSubmit={handleUpdateToy}>
        {/* form seller name and email row */}
        <div className="md:flex gap-6 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <label>
              <input
                type="text"
                name="sellerName"
                defaultValue={user?.displayName}
                placeholder="Enter seller name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form price and quantity row */}
        <div className="md:flex gap-6 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <label>
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Enter available quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form description row */}
        <div className="md:flex gap-6 mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label>
              <input
                type="text"
                name="description"
                defaultValue={description}
                placeholder="description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer rounded-md bg-info py-3 px-5 text-base text-white font-semibold transition hover:bg-opacity-90"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateMyToys;
