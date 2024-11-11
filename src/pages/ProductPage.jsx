import { useEffect, useState } from "react";

import Category from "../components/Category";
import SearchBox from "../components/SearchBox";
import Card from "../components/Card";

import { products } from "../constant/mockData";
import { useSelector } from "react-redux";

const ProductPage = () => {
  const [search, setSearch] = useState("");
  const [displayedProducts, setDisplayedProducts] = useState([]);

  const { itemsCounter } = useSelector((state) => state.cart);

  useEffect(() => {
    const filteredProducts = products.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setDisplayedProducts(filteredProducts.slice(0, 4));
  }, [search]);

  const handleAddProduct = () => {
    const filteredProducts = products.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setDisplayedProducts((prevProducts) =>
      filteredProducts.slice(0, prevProducts.length + 4)
    );
  };

  return (
    <div className="mb-12">
      <Category />
      
      <SearchBox search={search} setSearch={setSearch} />
        {itemsCounter > 0 && <p className="text-purple-600 pt-8">{itemsCounter} محصول در سبد شما قرار دارد</p>}
      <div className="mt-4 flex flex-wrap gap-4 items-center justify-center">
        {displayedProducts.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>

      {displayedProducts.length <
        products.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ).length && (
        <div className="flex justify-center">
          <button
            onClick={handleAddProduct}
            className="text-purple-500 border-2 border-purple-500 p-2 rounded-md my-12"
          >
            مشاهده‌ی بیشتر
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
