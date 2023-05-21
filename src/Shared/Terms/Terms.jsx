import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Terms = () => {
  useTitle("Terms & Conditions");
  return (
    <div className="w-3/4 mx-auto my-10">
      <h2 className="text-2xl lg:text-4xl text-center mb-4 font-bold">
        Our Terms and Conditions
      </h2>
      <hr />
      <div className="mt-5">
        <div className="flex flex-col justify-center items-start gap-3">
          <p className="text-base text-gray-500">
            <span className="font-medium text-gray-600">
              Product Information:
            </span>{" "}
            We strive to provide accurate and detailed information about our
            toys, including descriptions, prices, and availability. However, we
            reserve the right to make changes or corrections if any inaccuracies
            occur.
          </p>
          <p className="text-base text-gray-500">
            <span className="font-medium text-gray-600">
              Pricing and Payments:
            </span>{" "}
            All prices listed on Toy Land&apos;s website are in the specified
            currency and are subject to change without prior notice. Payments
            must be made in full at the time of purchase, and we accept major
            credit cards and other specified payment methods.
          </p>
          <p className="text-base text-gray-500">
            <span className="font-medium text-gray-600">
              Shipping and Delivery:
            </span>{" "}
            We aim to process and ship orders promptly. Shipping costs and
            delivery times may vary depending on the destination and chosen
            shipping method. We are not responsible for any delays or damages
            that occur during transit. Customers may be responsible for customs
            duties, taxes, or other fees associated with international
            shipments.
          </p>
          <p className="text-base text-gray-500">
            <span className="font-medium text-gray-600">
              Returns and Exchanges:
            </span>{" "}
            We want you to be completely satisfied with your purchase. If for
            any reason you are not satisfied, please contact us within 15 days
            of receiving your order to initiate a return or exchange. Items must
            be unused, in their original packaging, and accompanied by the
            original receipt.
          </p>
          <p className="text-base text-gray-500">
            <span className="font-medium text-gray-600">
              Intellectual Property:
            </span>{" "}
            All content on the Toy Land website, including logos, images, text,
            and product descriptions, is protected by intellectual property
            rights. Users are prohibited from using, copying, or distributing
            any content without prior written permission.
          </p>
          <p className="text-base text-gray-500">
            <span className="font-medium text-gray-600">
              Limitation of Liability:
            </span>{" "}
            Toy Land shall not be liable for any indirect, incidental, or
            consequential damages arising from the use or inability to use our
            products or services. We make no warranties, express or implied,
            regarding the suitability or performance of the toys for any
            specific purpose.
          </p>
          <p className="text-base text-gray-500">
            <span className="font-medium text-gray-600">Governing Law:</span>{" "}
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of Bangladesh. Any disputes arising from
            these terms and conditions shall be subject to the exclusive
            jurisdiction of the courts of Bangladesh.
          </p>
          <p className="mt-8 text-base text-gray-500">
            By accessing and using the Toy Land website, you agree to comply
            with these Terms and Conditions. Please review them carefully before
            making any purchases. If you do not agree with any of the terms
            outlined, please refrain from using our website or placing orders.
          </p>
        </div>
      </div>
      <div className="mt-10 text-center">
        <Link to="/signup">
          <button className="inline-flex items-center gap-2 space-x-2 bg-info hover:bg-sky-500 text-gray-100 px-4 py-2 mt-12 rounded transition duration-150">
            <FaLongArrowAltLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Go back to Sign Up</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Terms;
