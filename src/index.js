import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import UserContext from "./Utils/Hooks/UserContext";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import ReceipePage from "./components/ReceipePage";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import Cart from "./components/Cart";

// redux
import { Provider } from "react-redux";
import store from "./Utils/Store";

const AppLayout = () => {
  const [userName, setUserName] = useState({
    name: "seshu",
    email: "seshu@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          userName: userName,
          setUserName: setUserName,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const Instamart = lazy(() => import("./components/Instamart"));

// we can pass childrens
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/foods/:id",
        element: <ReceipePage />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  // {
  //   path: "/About",
  //   element: <About />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
