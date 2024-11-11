import { useDispatch, useSelector } from "react-redux";

import Category from "../components/Category";
import BasketCard from "../components/BasketCard";
import { checkout } from "../features/cartSlice/cartSlice";

import { MdPayment } from "react-icons/md";

import toast from "react-hot-toast";

const BasketPage = () => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClick = () => {
    const isSuccess = Math.random(Math.random(), Math.round()) < 0.5;

    if (isSuccess) {
      toast.success("خرید شما با موفقیت انجام شد.");
    } else {
      toast.error("خطا در فرآیند خرید! لطفا بعدا امتحان کنید.");
    }

    dispatch(checkout());
  };



  return (
    <div>
      <Category />
      {state.selectedItems.length ? (
        state.selectedItems.map((item) => (
          <div
            className="my-20 border-[1px] border-dashed rounded-md shadow-sm border-purple-300"
            key={item.id}
          >
            <BasketCard product={item} />
          </div>
        ))
      ) : (
        <h1 className="text-purple-700 text-3xl pt-[200px] text-center">
          سبد خرید شما خالی است!!
        </h1>
      )}

      {!!state.selectedItems.length && (
        <div className="flex justify-between mb-12">
          <div className="flex flex-col">
            <p className="text-pink-500">
              تکمیل و ادامه فرآیند خرید {state.itemsCounter} کالا
            </p>
            <p className="text-purple-500">
              مبلغ پرداخت سفارسی {Number(state.total.toLocaleString())} تومان
            </p>
          </div>

          <button
            className="flex items-center gap-12 bg-purple-700 text-white p-2 rounded-lg"
            onClick={handleClick}
          >
            تکمیل و پرداخت
            <MdPayment />
          </button>
        </div>
      )}
    </div>
  );
};

export default BasketPage;
