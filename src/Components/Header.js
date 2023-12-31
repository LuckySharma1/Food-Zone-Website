import { useState } from "react";
import FoodZoneLogo from "../assets/Images/Food_Zone_logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Title = () => (
  <a href="/">
    <img
      className="h-10 sm:h-16 md:h-24 lg:h-36 drop-shadow-lg scale-60 md:scale-80 lg:scale-100"
      src={FoodZoneLogo}
      alt="Food Zone Logo"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between items-center shadow-xl bg-gradient-to-r from-lime-500 via-lime-300 to-lime-500 rounded-lg m-4 sticky top-0 scroll-mx-0 z-50">
      <Title />
      <div className="nav font-semibold text-xs lg:text-lg md:text-md xl:text-2xl">
        <ul className="flex py-2 gap-1 md:gap-2 lg:gap-4 font-normal transition-all duration-150">
          <Link to="/">
            <li className="lg:px-2 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="px-2 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="px-2 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              Contact
            </li>
          </Link>
          <Link to="/instamart">
            <li className="px-2 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              Instamart
            </li>
          </Link>
          <Link to="/help">
            <li className="px-2 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              Help
            </li>
          </Link>
          <Link to="/cart">
            <li className="border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              <i className="fa-solid fa-cart-shopping px-2"></i>
              Cart - {cartItems.length} items
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex max-sm:pl-2 sm:gap-3 md:gap-6 lg:gap-12 justify-start items-center">

        {!isLoggedIn ? (
          <Link to="./login">
            <button
              onClick={() => {
                setIsLoggedIn(true);
              }}
              className="text-xs sm:text-sm md:text-md lg:text-2xl font-semibold mr-2 sm:mr-4"
            >
              <a
                href="#_"
                class="rounded relative inline-flex group items-center justify-center p-1 sm:p-2 lg:py-2 lg:m-1 cursor-pointer border-b-4 border-l-2 active:border-green-600 active:shadow-none shadow-lg bg-gradient-to-tr from-lime-600 to-lime-500 border-lime-700 text-white"
              >
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-16 group-hover:h-16 sm:group-hover:w-20 sm:group-hover:h-20 md:group-hover:w-24 md:group-hover:h-24 lg:group-hover:w-32 lg:group-hover:h-32 opacity-10"></span>
                <span class="relative flex justify-center items-center gap-2">
                  Login <HiOutlineArrowNarrowRight />
                </span>
              </a>
            </button>
          </Link>
        ) : (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
              }}
              className="text-xs sm:text-sm md:text-md lg:text-2xl font-semibold mr-2 sm:mr-4"
            >
              <a
                href="#_"
                class="rounded relative inline-flex group items-center justify-center p-1 sm:p-2 lg:px-3.5 lg:py-2 lg:m-1 cursor-pointer border-b-4 border-l-2 active:border-red-600 active:shadow-none shadow-lg bg-gradient-to-tr from-orange-600 to-orange-500 border-orange-700 text-white"
              >
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-16 group-hover:h-16 sm:group-hover:w-20 sm:group-hover:h-20 md:group-hover:w-24 md:group-hover:h-24 lg:group-hover:w-32 lg:group-hover:h-32 opacity-10"></span>
                <span class="relative flex justify-center items-center gap-2">
                  Logout <HiOutlineArrowNarrowRight />
                </span>
              </a>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
