import './styles/index.scss';
import 'normalize.css';
import MainPage from '../pages/mainPage/mainPage.tsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from '../components/layout/layout.tsx';
import CartPage from '../pages/cartPage/cartPage.tsx';
import ProductPage from '../pages/productPage/productPage.tsx';
import NotFoundPage from '../pages/notFoundPage/notFoundPage.tsx';

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <MainPage/>,
            },
            {
                path: '/cart',
                element: <CartPage/>,
            },
            {
                path: '/product/:id',
                element: <ProductPage />,
            },
        ],
        errorElement: <NotFoundPage />,
    }
]);

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App;