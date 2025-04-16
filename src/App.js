import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./pages/login";
import Homepage from "./layout/homepage";
import TransactionPage from "./components/transaction";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />

        {/* Protected / Nested Route */}
        <Route path="/homepage" element={<Homepage />}>
          <Route index element={<Dashboard />} />
          <Route path="/homepage/dashboard" element={<Dashboard />} />
          <Route path="/homepage/transaction" element={<TransactionPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
