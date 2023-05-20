import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const ProductDetails = ({ shop, closeModal }) => {
  const { name, picture, price, rating, category, description } = shop;

  return (
    <div>
      <Transition appear show={true} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-y-auto z-50"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-base lg:text-lg font-bold leading-6 text-gray-900"
                >
                  {name}
                </Dialog.Title>

                <div className="mt-2">
                  <img src={picture} alt={name} className="w-full rounded-md" />
                </div>

                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <p className="text-sm lg:text-base text-gray-500">
                      <span className="font-semibold text-gray-700">
                        Price:
                      </span>{" "}
                      ${price}
                    </p>
                    <div className="flex justify-center items-center gap-2">
                      <div className="badge badge-error font-medium text-xs lg:text-sm text-white">
                        {category}
                      </div>
                      <div className="badge badge-warning font-medium text-xs lg:text-sm text-white">
                        {rating}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm lg:text-base text-gray-500 mt-2">
                    <span className="font-semibold text-gray-700">
                      Description:
                    </span>{" "}
                    {description}
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-info border border-transparent rounded-md hover:bg-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ProductDetails;
