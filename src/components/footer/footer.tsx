import styles from './footer.module.scss';
import {Link} from 'react-router-dom';
import Navigation from '@components/navigation/navigation.tsx';

function Footer() {

    return (
        <footer className={`${styles.footer} container`}>
            <Link to={'/'} className={styles.logo}>Goods4you</Link>
            <Navigation type='footer' />
        </footer>
    )
}

export default Footer;