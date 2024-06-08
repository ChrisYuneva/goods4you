import Header from '../header/header.tsx';
import Footer from '../footer/footer.tsx';
import {Outlet, useLocation} from 'react-router-dom';
import styles from './layout.module.scss';
import {useEffect} from 'react';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function Layout() {
    return (
        <div className={styles.outerContainer}>
            <ScrollToTop />
            <Header />
            <div className={styles.page}>
               <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;