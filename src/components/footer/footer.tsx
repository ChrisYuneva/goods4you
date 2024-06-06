import styles from './footer.module.scss';
import Navigation from '../navigation/navigation.tsx';
import {useNavigate} from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    return (
        <footer className={`${styles.footer} container`}>
            <span className={styles.logo} onClick={() => navigate('/')}>Goods4you</span>
            <Navigation type='footer' />
        </footer>
    )
}

export default Footer;