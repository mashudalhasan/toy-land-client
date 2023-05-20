import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="w-11/12 lg:w-1/2 mx-auto my-10">
      <h2 className="text-xl lg:text-4xl text-center mb-3 font-bold">
        Frequently Asked Questions
      </h2>
      <hr />
      <div className="space-y-4 mt-8">
        <details
          className="group rounded-md border-s-4 border-info bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-500">
            An access token is a credential used by a client application to
            access protected resources, representing authorization granted for
            specific actions or data access.
          </p>
          <p className="mt-4 leading-relaxed text-gray-500">
            A refresh token is a token used to obtain a new access token when
            the original access token expires, allowing continuous access
            without re-authentication.
          </p>
          <p className="mt-4 leading-relaxed text-gray-500">
            Access tokens are typically stored in memory or client-side storage
            mechanisms like localStorage or sessionStorage. Refresh tokens, on
            the other hand, should be securely stored in a persistent storage
            mechanism such as HTTP-only secure cookies or secure storage
            provided by the operating system or a specific library/framework.
          </p>
        </details>

        <details className="group rounded-md border-s-4 border-info bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Compare SQL and NoSQL databases?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-500">
            SQL (Structured Query Language) and NoSQL (Not Only SQL) are two
            types of database management systems with distinct characteristics:
          </p>

          <p className="mt-4 leading-relaxed text-gray-500 whitespace-pre-line">
            <span className="font-semibold">SQL databases:</span>
            {"\n"}
            1. Relational databases that use structured tables with predefined
            schemas.{"\n"}
            2. Data is organized into rows and columns, and relationships
            between tables are defined through foreign keys.{"\n"}
            3. Support for ACID (Atomicity, Consistency, Isolation, Durability)
            properties, ensuring data integrity.
            {"\n"}
            4. Suitable for complex queries, data consistency, and transactions.
            {"\n"}
            5. Examples: MySQL, PostgreSQL, Oracle.
          </p>

          <p className="mt-4 leading-relaxed text-gray-500 whitespace-pre-line">
            <span className="font-semibold">NoSQL databases:</span>
            {"\n"}
            1. Non-relational databases that provide flexibility in handling
            unstructured or semi-structured data.{"\n"}
            2. Data is stored in various formats like key-value pairs,
            documents, wide-column stores, or graphs.{"\n"}
            3. No rigid schemas, allowing for easy scalability and accommodating
            evolving data structures.
            {"\n"}
            4. Better suited for handling large-scale, distributed systems and
            high-velocity data.
            {"\n"}
            5. Examples: MongoDB, Cassandra, Redis.
          </p>
        </details>

        <details className="group rounded-md border-s-4 border-info bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              What is express js? What is Nest JS?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-500 whitespace-pre-line">
            Express.js is a minimalist and flexible web application framework
            for Node.js. It provides a simple yet powerful set of features for
            building web applications and APIs. With Express.js, developers can
            handle HTTP requests, define routes, manage middleware, and create
            server-side logic efficiently. It is known for its lightweight
            nature and extensive ecosystem of plugins and middleware, making it
            popular for developing server-side applications and APIs in Node.js.
          </p>

          <p className="mt-4 leading-relaxed text-gray-500 whitespace-pre-line">
            Nest.js is a progressive, extensible, and opinionated framework for
            building efficient and scalable server-side applications. It is
            built on top of Express.js and uses TypeScript as its primary
            language. Nest.js incorporates object-oriented programming
            principles and modular architecture, providing a robust foundation
            for creating enterprise-level applications. It offers features like
            dependency injection, decorators, powerful modules system, and
            built-in support for creating RESTful APIs and real-time
            applications. Nest.js is designed to be highly maintainable,
            testable, and developer-friendly.
          </p>
        </details>

        <details className="group rounded-md border-s-4 border-info bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              What is MongoDB aggregate and how does it work?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-500 whitespace-pre-line">
            In MongoDB, the aggregate is a powerful operation used for
            processing and transforming data within a collection. It allows you
            to perform complex data manipulations, calculations, and
            aggregations on documents.
          </p>

          <p className="mt-4 leading-relaxed text-gray-500 whitespace-pre-line">
            The aggregation pipeline is a concept in MongoDB that consists of
            multiple stages, where each stage performs a specific operation on
            the data. These stages can include filtering, grouping, sorting,
            projecting, and performing various calculations using operators and
            functions.
          </p>

          <p className="mt-4 leading-relaxed text-gray-500 whitespace-pre-line">
            The aggregate operation takes an array of stages as input and
            processes the documents in the collection through each stage in
            sequence. The output of one stage serves as the input for the next
            stage, allowing for a series of transformations and computations to
            be applied.
          </p>

          <p className="mt-4 leading-relaxed text-gray-500 whitespace-pre-line">
            With the aggregation framework, you can perform tasks like grouping
            documents, calculating averages or sums, joining collections, and
            generating statistical reports. It provides a flexible and efficient
            way to analyze and manipulate data within MongoDB collections.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Blog;
