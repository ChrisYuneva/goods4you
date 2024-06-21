import styles from './loginPage.module.scss';
import LoginForm from '../../components/loginForm/loginForm.tsx';
import Header from '../../components/header/header.tsx';

function LoginPage() {

    return (
        <section className={styles.wrapper}>
            <Header/>
            <h1 className={styles.title}>Login</h1>
            <LoginForm/>
        </section>
    );
}

export default LoginPage;