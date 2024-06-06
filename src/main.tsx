import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import CartPage from './pages/cartPage/cartPage.tsx';
import ProductPage from './pages/productPage/productPage.tsx';
import Layout from './components/layout/layout.tsx';

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <App/>,
            },
            {
                path: '/cart',
                element: <CartPage/>,
            },
            {
                path: '/product/:id',
                element: <ProductPage/>,
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
);
