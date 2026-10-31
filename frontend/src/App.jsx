import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/index';
import Create from './pages/create';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
            </Routes>
        </BrowserRouter>
    );
}