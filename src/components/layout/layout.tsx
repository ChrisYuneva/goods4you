import Header from '../header/header.tsx';
import Footer from '../footer/footer.tsx';
import {Navigate, Outlet, useNavigate} from 'react-router-dom';
import styles from './layout.module.scss';
import ScrollToTop from '../scrollToTop/scrollToTop.tsx';
import useAuth from '../../app/hooks/useAuth.tsx';
import {useEffect} from 'react';

function Layout() {
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener('storage', () => {
            navigate('/login');
        })
    }, [navigate])

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