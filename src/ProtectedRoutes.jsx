import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BuyerPage from './components/Buyers/BuyerPage';
import SellerReg from './components/Sellers/SellerReg';
import UserAuthContext from './context/UserAuthContext';

function ProtectedRoutes() {
  return (
    <UserAuthContext>
      <Routes>
        <Route path="/buyer" element={<BuyerPage />} />
        <Route path="/seller" element={<SellerReg />} />
      </Routes>
    </UserAuthContext>
  );
}

export default ProtectedRoutes;
