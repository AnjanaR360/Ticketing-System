import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import Configuration from './pages/configuration';
import Vendors from './pages/vendors';
import Customers from './pages/customer';


function App() {
  return (
    (<Router>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
          {/* Sidebar on the left */} 
          <Sidebar />
          {/* Main content area */}
          <div style={{ flex: 1, padding: '1rem'}} className='bg-gray-300'>
              <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/configuration" element={<Configuration />} />
                  <Route path="/vendors" element={<Vendors />} />
                  <Route path="/customers" element={<Customers />} />
              </Routes>
          </div>
      </div>
  </Router>)
  )
}

export default App
