import Header from '../header/header.tsx';
import Footer from '../footer/footer.tsx';
import {Outlet} from 'react-router-dom';
import styles from './layout.module.scss';
import ScrollToTop from '../scrollToTop/scrollToTop.tsx';

function Layout() {
    return (
        <div className={styles.outerContainer}>
            <ScrollToTop />
            <Header />
            <main className={styles.page}>
               <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;