import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { FaLongArrowAltLeft } from "react-icons/fa";

const About = () => {
  useTitle("About Us");
  return (
    <div className="w-3/4 mx-auto my-10">
      <h2 className="text-2xl lg:text-4xl text-center mb-4 font-bold">
        About Us
      </h2>
      <hr />
      <div className="mt-5">
        <div className="flex flex-col justify-center items-start gap-3">
          <p className="text-base text-gray-500">
            At Toy Land, we believe in the power of play and the magic of
            childhood. Our mission is to bring joy, imagination, and endless
            possibilities into the lives of children and families worldwide.
          </p>
          <p className="text-base text-gray-500">
            With a deep passion for toys and a commitment to exceptional
            quality, we have curated a remarkable collection of toys that
            inspire creativity, spark imagination, and foster development. From
            classic favorites to the latest innovations, we handpick each toy
            with care, ensuring that it meets our stringent standards for
            safety, durability, and play value.
          </p>
          <p className="text-base text-gray-500">
            We understand the importance of finding the perfect toy, whether
            it&apos;s for a special occasion or simply to bring a smile to a
            child&apos;s face. That&apos;s why our team of toy enthusiasts is
            dedicated to providing a seamless and enjoyable shopping experience.
            Our user-friendly website and knowledgeable customer service
            representatives are here to assist you every step of the way,
            helping you find the ideal toy that will captivate and delight.
          </p>
          <p className="text-base text-gray-500">
            At Toy Land, we value the trust and satisfaction of our customers
            above all else. We strive to build long-lasting relationships by
            offering exceptional products, competitive prices, and a commitment
            to customer service excellence. We continuously update our inventory
            to ensure that we bring you the latest trends and timeless classics,
            so you can always find the perfect toy that will create
            unforgettable moments of joy and laughter.
          </p>

          <p className="mt-8 text-base text-gray-500">
            Join us on this exciting journey as we celebrate the wonder of
            childhood and the limitless potential of play. Experience the magic
            of Toy Land and discover a world where dreams come to life, one toy
            at a time.
          </p>
        </div>
      </div>
      <div className="mt-10 text-center">
        <Link to="/">
          <button className="inline-flex items-center gap-2 space-x-2 bg-info hover:bg-sky-500 text-gray-100 px-4 py-2 mt-12 rounded transition duration-150">
            <FaLongArrowAltLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Go back to Home</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
