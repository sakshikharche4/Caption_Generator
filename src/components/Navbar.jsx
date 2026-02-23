import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-evenly items-center py-4 shadow-md">
      
      <h2 className="font-bold text-gray-700 text-3xl tracking-wider">
        Caption DEV
      </h2>

      <div className="space-x-10 text-xl">
        <Link to="/" className="hover:text-blue-800 hover:font-semibold">
          Home
        </Link>

        <Link to="/categories" className="hover:text-blue-800 hover:font-semibold">
          Categories
        </Link>

        <Link to="/newsletter" className="hover:text-blue-800 hover:font-semibold">
          Newsletter
        </Link>

        <Link to="/blog" className="hover:text-blue-800 hover:font-semibold">
          Blog
        </Link>
      </div>

      <Link
        to="/generate"
        className="px-10 py-2 rounded-xl bg-linear-to-r from-purple-700 to-indigo-700 text-white text-xl font-semibold tracking-wide"
      >
        Get Started
      </Link>

    </div>
  );
};

export default Navbar;