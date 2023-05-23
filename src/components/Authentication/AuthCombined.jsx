// import React from "react";
// import Signup from "./Signup";
// import Login from "./Login";
// import UserAuthContext from "../../context/UserAuthContext";
// import BuyerPage from "../Buyers/BuyerPage";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
// } from "react-router-dom";
// import AdminLogin from "../Admin/AdminLogin";
// import SellerReg from "../Sellers/SellerReg";

// const router = createBrowserRouter([
//   { path: "/", element: <Login /> },
//   { path: "/signup", element: <Signup /> },
//   { path: "/buyer", element: <BuyerPage /> },
//   { path: "/seller", element: <SellerReg /> },
//   { path: "/admin", element: <AdminLogin /> },
// ]);

// export default function AuthCombined() {
//   return (
//     <UserAuthContext>
//       <RouterProvider router={router} />
//     </UserAuthContext>
//   );
// }
import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import UserAuthContext from "../../context/UserAuthContext";
import { Routes, Route } from "react-router-dom";

export default function AuthCombined() {
  return (
    <UserAuthContext>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/test" element={<div>This is a test router</div>} />
      </Routes>
    </UserAuthContext>
  );
}

