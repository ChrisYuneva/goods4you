import styles from './footer.module.scss';
import Navigation from '../navigation/navigation.tsx';
import {Link} from 'react-router-dom';

function Footer() {

    return (
        <footer className={`${styles.footer} container`}>
            <Link to={'/'} className={styles.logo}>Goods4you</Link>
            <Navigation type='footer' />
        </footer>
    )
}

export default Footer;