import styles from './header.module.scss';
import Navigation from '../navigation/navigation.tsx';
import {Link, useLocation} from 'react-router-dom';
import {useMemo} from 'react';
import BurgerMenu from '../burgerMenu/burgerMenu.tsx';

function Header() {
    const location = useLocation();
    const isHome = useMemo(() => location.pathname === '/', [location.pathname]);

    return (
        <header className={`${styles.header} container ${isHome ? styles.headerHome : ''}`}>
            <div className={`${styles.content} ${isHome ? styles.home : ''}`}>
                <Link to={'/'} className={styles.logo}>Goods4you</Link>
                <div className={styles.nav}>
                    <Navigation type='header' />
                </div>
                <div className={styles.mobileNav}>
                    <BurgerMenu />
                </div>
            </div>
        </header>
    )
}

export default Header;