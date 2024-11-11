import { Toaster } from "react-hot-toast";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="font-yekan max-w-[800px] mx-auto">
      <Header />
      <div className="min-h-[500px]">{children}</div>
      <Toaster position="top-center"/>
    </div>
  );
};

export default Layout;
