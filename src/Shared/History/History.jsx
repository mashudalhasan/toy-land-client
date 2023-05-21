import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { FaLongArrowAltLeft } from "react-icons/fa";

const History = () => {
  useTitle("Our History");

  return (
    <div className="w-3/4 mx-auto my-10">
      <h2 className="text-2xl lg:text-4xl text-center mb-4 font-bold">
        From a Dream to a Beloved Toy Destination
      </h2>
      <hr />
      <div className="mt-5">
        <div className="flex flex-col justify-center items-start gap-3">
          <p className="text-base text-gray-500">
            Toy Land began as a humble vision in the heart of its founder, John
            Stevens, who possessed an unwavering passion for bringing joy and
            imagination into the lives of children. What started as a small toy
            store in a local neighborhood quickly blossomed into a beloved
            destination for toy enthusiasts of all ages.
          </p>
          <p className="text-base text-gray-500">
            With a keen eye for quality and a deep understanding of what makes a
            toy truly special, Toy Land carefully curated a collection of
            captivating toys that captured the hearts and minds of children and
            parents alike. From classic toys that stood the test of time to
            innovative new creations that sparked the imagination, Toy Land
            became synonymous with fun, play, and boundless possibilities.
          </p>
          <p className="text-base text-gray-500">
            Through a relentless commitment to exceptional customer service, Toy
            Land fostered enduring relationships with its customers. The
            dedicated team at Toy Land understood that every interaction was an
            opportunity to create a magical experience, ensuring that each visit
            to the store or interaction online was met with warmth, enthusiasm,
            and expert guidance.
          </p>
          <p className="text-base text-gray-500">
            As Toy Land flourished, it expanded its reach beyond the local
            community and embraced the digital realm. With an engaging online
            presence and a seamless e-commerce platform, Toy Land brought the
            joy of toy shopping to customers far and wide. From small towns to
            bustling cities, families across the globe discovered the wonder and
            excitement that Toy Land had to offer.
          </p>
          <p className="text-base text-gray-500">
            Toy Land&apos;s success was not merely measured by its growth and
            popularity, but also by the countless smiles it brought to the faces
            of children everywhere. The toys sourced and carefully selected by
            Toy Land ignited imaginations, sparked creativity, and provided the
            foundation for countless adventures and cherished memories.
          </p>
          <p className="text-base text-gray-500">
            Today, Toy Land stands as a beacon of joy, a testament to the
            enduring power of play, and a symbol of the magic of childhood. The
            success of Toy Land can be traced back to the unwavering dedication
            to its core values: quality, imagination, and customer satisfaction.
          </p>
          <p className="text-base text-gray-500">
            With each passing year, Toy Land continues to evolve and adapt,
            always striving to deliver the very best in toys, customer service,
            and the enchantment that keeps generations coming back for more. Toy
            Land&apos;s story is not just one of success but a celebration of
            the belief that in the world of toys, dreams can come true, and
            happiness can be found in the simplest of moments.
          </p>
          <p className="text-base text-gray-500">
            The journey of Toy Land is a testament to the transformative power
            of a dream, the importance of fostering imagination, and the
            incredible impact that a single toy can have on a child&apos;s life.
            From its humble beginnings to its place as a beloved toy
            destination, Toy Land has left an indelible mark on the hearts of
            children and families, ensuring that the magic of playtime lives on
            for generations to come.
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

export default History;
