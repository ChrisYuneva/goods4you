import Header from '../header/header.tsx';
import Footer from '../footer/footer.tsx';
import {Navigate, Outlet} from 'react-router-dom';
import styles from './layout.module.scss';
import ScrollToTop from '../scrollToTop/scrollToTop.tsx';
import useAuth from '../../app/hooks/useAuth.tsx';

function Layout() {
    const auth = useAuth();

    return (
        <div className={styles.outerContainer}>
            <ScrollToTop />
            {
                auth
                ? (
                    <>
                        <Header />
                        <main className={styles.page}>
                            <Outlet/>
                        </main>
                        <Footer/>
                    </>
                    )
                    : (
                        <Navigate to='/login'/>
                    )
            }
        </div>
    )
}

export default Layout;