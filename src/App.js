import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "../index.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu"
import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <div className="App">
      <Provider store={appStore}>
      <Header />
      <Outlet/>
      <Footer />
      </Provider>
    </div>
  );
};
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path:"/About",
        element:<About />
    
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/Cart",
        element:<Cart/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      },
      {
        path:"/SignIn",
        element:<SignIn/>
      }
    ],
  
    errorElement: <Error />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>);
