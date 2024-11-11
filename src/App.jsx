import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import ProductPage from "./pages/ProductPage.jsx";
import BasketPage from "./pages/BasketPage.jsx";
import NotFoundPage from "./pages/404.jsx";

const router = createBrowserRouter([
  {
    path: "/ada-shop",
    element: <Navigate to="/ada-shop/products" replace />,
  },
  {
    path: "/ada-shop/products",
    element: <ProductPage />,
  },
  {
    path: "/ada-shop/basket",
    element: <BasketPage />,
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
  { future: { v7_startTransition: true } },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
