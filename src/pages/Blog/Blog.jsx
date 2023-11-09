
const Blog = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-4xl font-bold mb-6 text-center">Blog</h1>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">1. What is One way data binding?</h3>
        <p className="text-gray-700">
          One-way data binding is a way to keep the user interface synchronized
          with the data model, but only in one direction. This means that changes
          to the data model will be reflected in the user interface, but changes
          to the user interface will not be reflected in the data model. One-way
          data binding is often used to display data to the user and to control
          user interactions. It is a simple and efficient way to bind data to the
          user interface.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">2. What is NPM in node.js?</h3>
        <p className="text-gray-700">
          NPM stands for Node Package Manager. It is a package manager for
          JavaScript and the default package manager for Node.js. NPM is used to
          install, manage, and share packages or libraries of code for Node.js
          projects. In other words, NPM is the default package manager for Node.js
          and is included with the Node.js installer. NPM allows developers to
          easily install and manage the dependencies of their Node.js projects. It
          does this by providing a registry of Node.js packages, which are
          reusable modules of code that can be used to build Node.js applications.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">3. Difference between Mongodb database vs mySQL database.</h3>
        <p className="text-gray-700">
          MongoDB and MySQL are two popular database management systems (DBMS),
          but they have some key differences. MongoDB is a NoSQL (Not Only SQL)
          database, which means that it does not use the traditional relational
          database model. Instead, it stores data in JSON documents, which are
          flexible and can easily be scaled to handle large amounts of data.
          MongoDB is often used for applications that require high performance and
          scalability, such as real-time analytics, content management, and social
          networking. MySQL is a relational database management system (RDBMS),
          which means that it stores data in tables. Tables are made up of rows
          and columns, and each row represents a single record. MySQL is a good
          choice for applications that require ACID transactions and strict data
          integrity. It is also a popular choice for web applications because it
          is easy to use and administer.
        </p>
      </div>
    </div>
  );
};

export default Blog;
