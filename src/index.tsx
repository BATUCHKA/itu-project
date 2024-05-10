import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from "./components";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SimpleBits } from './screens/simpleBits/simpleBits';
import { BookStorePage } from './screens/shop/shop';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SimpleBits/>} />
        <Route path="/work" element={<div>work screen</div>} />
        <Route path="/shop" element={<BookStorePage/>} />
        <Route path="/about" element={<div>about screen</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
