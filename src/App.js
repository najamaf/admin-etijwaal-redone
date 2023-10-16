import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AppLayout from './Layout/AppLayout';
import Orders from './pages/Orders';
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js';


Chart.register(CategoryScale)

function App() {
  return (
    <>
    <AppLayout>
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/orders' element={<Orders />}/>
        </Routes>
    </AppLayout>
    </>
    );
}

export default App;
