import {Outlet, useNavigate} from 'react-router-dom';
import styles from './layout.module.scss';
import {useEffect} from 'react';
import useAuth from '@app/hooks/useAuth.tsx';
import {useGetUserByTokenQuery} from '@app/store/services/authorization/authorizationApi.ts';
import {getErrorStatus, getToken} from '@app/utils';
import ToastContainer from '@components/toaster/toasterContainer/toasterContainer.tsx';
import ScrollToTop from '@components/scrollToTop/scrollToTop.tsx';
import Header from '@components/header/header.tsx';
import Footer from '@components/footer/footer.tsx';
import Loader from '@components/loader/loader.tsx';

function Layout() {
    const auth = useAuth();
    const navigate = useNavigate();
    const {data, isError, error} = useGetUserByTokenQuery('', {skip: !getToken() || !!auth});

    useEffect(() => {
        window.addEventListener('storage', () => {
            navigate('/login');
        })
    }, [navigate])

    useEffect(() => {
        if (isError || !getToken()) {
            navigate('/login');
        }
    }, [isError, navigate]);

    useEffect(() => {
        if (getErrorStatus(error) === 401 || getErrorStatus(error) === 403) {
            localStorage.removeItem('token');
        }
    }, [error]);

    return (
        <div className={styles.outerContainer}>
            <ScrollToTop />
            <ToastContainer />
            {
                data || auth
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
                        <Loader className={styles.loader}/>
                    )
            }
        </div>
    )
}

export default Layout;