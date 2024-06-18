import styles from './loginPage.module.scss';
import LoginForm from '../../components/loginForm/loginForm.tsx';
import Header from '../../components/header/header.tsx';
import {useGetUserByTokenQuery} from '../../app/store/services/authorization/authorizationApi.ts';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Loader from '../../components/loader/loader.tsx';
import {getToken, getErrorStatus} from '../../app/utils';

function LoginPage() {
    const {data, isError, error} = useGetUserByTokenQuery('', {skip: !getToken()});
    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
            navigate('/');
        }

    }, [data]);

    useEffect(() => {
        if (getErrorStatus(error) === 401) {
            localStorage.removeItem('token');
        }
    }, [error]);

    return (
        <>
            {
                (!getToken() || isError) && (
                    <section className={styles.wrapper}>
                        <Header/>
                        <h1 className={styles.title}>Login</h1>
                        <LoginForm/>
                    </section>
                )
            }
            {
                getToken() && !isError && (
                    <div className={styles.loader}>
                        <Loader/>
                    </div>
                )
            }
        </>
    );
}

export default LoginPage;