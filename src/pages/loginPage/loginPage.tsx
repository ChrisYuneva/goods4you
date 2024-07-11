import styles from './loginPage.module.scss';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {getToken} from '@app/utils';
import LoginForm from '@components/loginForm/loginForm.tsx';
import Header from '@components/header/header.tsx';

function LoginPage() {
    const navigate = useNavigate();

    useEffect(() => {
        if(getToken()) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <section className={styles.wrapper}>
            <Header/>
            <h1 className={styles.title}>Login</h1>
            <LoginForm/>
        </section>
    );
}

export default LoginPage;