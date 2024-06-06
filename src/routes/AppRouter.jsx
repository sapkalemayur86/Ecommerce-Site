import { RouterProvider } from "react-router-dom";

import { Navigate, createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import LoginPage from "../pages/LoginPage";
import HeaderNavbar from "../pages/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/products" />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/products",
    element: (
      <>
        <HeaderNavbar />
        <ProductsPage />,
      </>
    ),
  },
  {
    path: "/products/:id",
    element: <>
            <HeaderNavbar />,
            <ProductDetailsPage />,
            </>
  },
  {
    path: "/purchase",
    element: <PrivateRoute />,
    children: [
      {
        index: true,
        element: <CartPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
