import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decrease,
  increase,
  removeItem,
} from "../features/cartSlice/cartSlice";

import { productQuantity } from "../helper/helper";

import { MdOutlineShoppingCart } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";

const Card = ({ data }) => {
  const { id, name, img, price } = data;

  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  const quantity = productQuantity(state, id);

  return (
    <>
      <div className="bg-white rounded-xl shadow-md">
        <img
          className="h-[180px] w-[180px] p-2 rounded-lg mx-auto"
          src={img}
          alt={name}
        />
        <div>
          <p className="text-purple-700 text-right p-2">{name}</p>
          <p className="text-pink-700 text-left p-2">
            {price.toLocaleString()} تومان
          </p>
          <div className="bg-purple-100 text-purple-600 ">
            {!quantity ? (
              <button
                onClick={() => dispatch(addItem(data))}
                className="flex gap-16 items-center p-4"
              >
                خرید محصول
                <MdOutlineShoppingCart fontSize="1.4rem" />
              </button>
            ) : (
              <div className="flex gap-2 items-center justify-between p-4">
                <button
                  className="bg-purple-700 text-white p-1 rounded-lg"
                  onClick={() => dispatch(increase(data))}
                >
                  <IoMdAdd fontSize="1.4rem" />
                </button>
                <span>{quantity}</span>
                {quantity > 1 ? (
                  <button
                    className="text-purple-500 border-2 border-purple-700 rounded-lg p-1"
                    onClick={() => dispatch(decrease(data))}
                  >
                    <IoIosRemove fontSize="1.4rem" />
                  </button>
                ) : (
                  <button
                    className="text-white bg-purple-700 rounded-lg p-1"
                    onClick={() => dispatch(removeItem(data))}
                  >
                    <MdDelete fontSize="1.4rem" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
