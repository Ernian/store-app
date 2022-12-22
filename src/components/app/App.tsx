import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductsPage, ProductPage, CartPage } from '../../pages'
import AppLayout from '../appLayout/AppLayout'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<ProductsPage />} />
                    <Route path='products/:category' element={<ProductsPage />} />
                    <Route path='product/:id' element={<ProductPage />} />
                    <Route path='cart' element={<CartPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App