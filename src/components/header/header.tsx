import styles from './header.module.scss';
import Navigation from '../navigation/navigation.tsx';
import {useLocation, useNavigate} from 'react-router-dom';
import {useMemo} from 'react';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const isHome = useMemo(() => location.pathname === '/', [location.pathname]);

    return (
        <header className={`${styles.header} container ${isHome ? styles.headerHome : ''}`}>
            <div className={`${styles.content} ${isHome ? styles.home : ''}`}>
                <h2 className={styles.logo} onClick={() => navigate('/')}>Goods4you</h2>
                <Navigation type="header"/>
            </div>
        </header>
    )
}

export default Header;