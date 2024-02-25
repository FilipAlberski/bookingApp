import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/Layout';
import Register from './pages/Register';
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <span className="text-4xl">home</span>
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <span className="text-4xl">search</span>
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <span className="text-4xl">login</span>
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
