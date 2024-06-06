import Header from '../header/header.tsx';
import Footer from '../footer/footer.tsx';
import {Outlet} from 'react-router-dom';

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;