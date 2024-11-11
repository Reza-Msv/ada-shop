import { IoIosRemove, IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";

import {
  decrease,
  increase,
  removeItem,
} from "../features/cartSlice/cartSlice";
import { useDispatch } from "react-redux";

const BasketCard = ({ product }) => {

  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between p-2">
      <img className="w-[80px] h-[80px]" src={product.img} alt="img" />
      <div className="flex flex-col gap-4">
        <p className="text-purple-700">{product.name}</p>
        <p className="text-gray-400">{product.price.toLocaleString()} تومان </p>
      </div>
      <div className="flex gap-2 items-center justify-between p-4">
        <button
          className="bg-purple-700 text-white p-1 rounded-lg"
          onClick={() => dispatch(increase(product))}
        >
          <IoMdAdd fontSize="1.4rem" />
        </button>
        <span>{product.quantity}</span>
        {product.quantity > 1 ? (
          <button
            className="text-purple-500 border-2 border-purple-700 rounded-lg p-1"
            onClick={() => dispatch(decrease(product))}
          >
            <IoIosRemove fontSize="1.4rem" />
          </button>
        ) : (
          <button
            className="text-white bg-purple-700 rounded-lg p-1"
            onClick={() => dispatch(removeItem(product))}
          >
            <MdDelete fontSize="1.4rem" />
          </button>
        )}
      </div>
    </div>
  );
};

export default BasketCard;
