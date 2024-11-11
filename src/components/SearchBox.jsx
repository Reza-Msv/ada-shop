import { BsFillBasket3Fill } from "react-icons/bs";

const SearchBox = ({ search, setSearch }) => {
  return (
    <div className="bg-purple-100 flex justify-between px-4 w-full py-6 mt-6 rounded-lg shadow-md shadow-purple-200">
      <input
        className=" bg-purple-100 px-4 outline-none placeholder-purple-800 w-full"
        type="text"
        placeholder="جستوجوکنید.. "
        value={search}
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
      />
      <BsFillBasket3Fill className="text-purple-700" />
    </div>
  );
};

export default SearchBox;
