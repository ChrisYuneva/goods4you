import styles from './loginPage.module.scss';
import LoginForm from '../../components/loginForm/loginForm.tsx';

function LoginPage() {
    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>Login</h1>
            <LoginForm />
        </section>
    )
}

export default LoginPage;