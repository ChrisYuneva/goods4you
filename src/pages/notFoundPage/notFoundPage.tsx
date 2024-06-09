import styles from './notFoundPage.module.scss';
import {Link} from 'react-router-dom';
import cn from 'classnames';

function NotFoundPage() {
    return (
        <main className={cn(styles.wrapper, 'container')}>
            <h1 className={styles.error}>404</h1>
            <p className={styles.text}>Ooops!!! The page you are looking for is not found.</p>
            <p className={styles.text}>
                Please, return to the home page.
            </p>
            <Link className={styles.link} to={'/'}>Back to home</Link>
        </main>
    )
}

export default NotFoundPage;