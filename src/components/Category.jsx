import { Link, useLocation } from "react-router-dom";

import { BsFillBasket3Fill } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
const Category = () => {
  const { pathname } = useLocation();

  const { itemsCounter } = useSelector((state) => state.cart);

  return (
    <div className="flex justify-end gap-4">
      <Link to="/ada-shop/products">
        <button
          className={`px-4 py-2 flex  items-center gap-2 rounded-lg text-white font-semibold ${
            pathname === "/ada-shop/products"
              ? "bg-purple-700"
              : "bg-purple-100 text-purple-800"
          } transition-colors duration-300`}
        >
          محصولات
          <BsFillBasket3Fill />
        </button>
      </Link>

      <Link to="/ada-shop/basket">
        <button
          className={`px-4 py-2 flex items-center gap-2 rounded-lg text-white font-semibold relative ${
            pathname === "/ada-shop/basket"
              ? "bg-purple-700"
              : "bg-purple-100 text-purple-800"
          } transition-colors duration-300`}
        >
          سبد خرید
          <MdOutlineShoppingCart />
          {itemsCounter >= 1 && (
            <span className=" text-pink-600 absolute top-2 left-5  text-[10px]">
              {itemsCounter}
            </span>
          )}
        </button>
      </Link>
    </div>
  );
};

export default Category;
