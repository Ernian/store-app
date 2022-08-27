import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage, ProductsPage, ProductPage, CartPage } from '../../pages';
import AppLayout from '../appLayout/AppLayout';

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path='products/:category' element={<ProductsPage />} />
                    <Route path='product/:id' element={<ProductPage />} />
                    <Route path='cart' element={<CartPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;