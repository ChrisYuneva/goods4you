import styles from './notFoundPage.module.scss';
import {Link} from 'react-router-dom';

function NotFoundPage() {
    return (
    <main className={styles.wrapper}>
        <h1 className={styles.error}>404</h1>
        <div className={styles.text}>Ooops!!! The page you are looking for is not found. <br/> Please, return to the home page.</div>
        <Link className={styles.link} to={'/'}>Back to home</Link>
    </main>
    )
}

export default NotFoundPage;