// import './App.css';
// import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
// import Combined from './components/Combined';
// import BuyerPage from './components/Buyers/BuyerPage';
// import SellerRegistrationForm from './components/Sellers/SellerRegistrationForm';
// import SellerReg from './components/Sellers/SellerReg';
// import AdminLogin from './components/Admin/AdminLogin';
// import AuthCombined from './components/Authentication/AuthCombined';
// import ErrorBoundary from './ErrorBoundary';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Combined />} />
//           <Route path='/login' element={<ErrorBoundary><AuthCombined /></ErrorBoundary>} />
//           <Route path="/admin" element={<AdminLogin />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// function App(){
//   return(
//   <div className="App">
//     <ErrorBoundary>
//       <AuthCombined />
//     </ErrorBoundary>
//   </div>

//   )
// }


// export default App;
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Combined from './components/Combined';
import AdminLogin from './components/Admin/AdminLogin';
import AuthCombined from './components/Authentication/AuthCombined';
import ErrorBoundary from './ErrorBoundary';
import ProtectedRoutes from './ProtectedRoutes';

// In App.js
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Combined />} />
          <Route path="/login/*" element={<ErrorBoundary><AuthCombined /></ErrorBoundary>} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="*" element={<ProtectedRoutes />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;


