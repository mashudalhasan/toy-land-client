import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
  useTitle("Add Your Toy");
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const description = form.description.value;
    const picture = form.picture.value;

    const newToy = {
      name,
      sellerName,
      email,
      quantity,
      price,
      rating,
      category,
      description,
      picture,
    };

    console.log(newToy);

    // send data to the server
    fetch("https://toy-land-server-dusky.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F7FF] p-8 lg:p-24">
      <h2 className="text-3xl font-extrabold mb-8">Add Toy</h2>
      <form onSubmit={handleAddToy}>
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
        {/* form name and quantity row */}
        <div className="md:flex gap-6 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <label>
              <input
                type="text"
                name="name"
                placeholder="Enter Toy name"
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
                placeholder="Enter available quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form price and rating row */}
        <div className="md:flex gap-6 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label>
              <input
                type="text"
                name="price"
                placeholder="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label>
              <input
                type="text"
                name="rating"
                placeholder="4.3"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and description row */}
        <div className="md:flex gap-6 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label>
              <input
                type="text"
                name="category"
                placeholder="Enter category name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label>
              <input
                type="text"
                name="description"
                placeholder="description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Toy Photo</span>
            </label>
            <label>
              <input
                type="text"
                name="picture"
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer rounded-md bg-info py-3 px-5 text-base text-white font-semibold transition hover:bg-opacity-90"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddToy;
