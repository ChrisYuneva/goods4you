import styles from './header.module.scss';
import {Link, useLocation} from 'react-router-dom';
import {useMemo} from 'react';
import Navigation from '@components/navigation/navigation.tsx';
import BurgerMenu from '@components/burgerMenu/burgerMenu.tsx';

function Header() {
    const location = useLocation();
    const isHome = useMemo(() => location.pathname === '/', [location.pathname]);
    const isLogin = useMemo(() => location.pathname === '/login', [location.pathname]);

    return (
        <header className={`${styles.header} container ${isHome ? styles.headerHome : ''}`}>
            <div className={`${styles.content} ${isHome ? styles.home : ''}`}>
                <Link to={'/'} className={styles.logo}>Goods4you</Link>
                {
                    !isLogin && (
                        <div className={styles.nav}>
                            <Navigation type="header"/>
                        </div>
                    )
                }
                <div className={styles.mobileNav}>
                <BurgerMenu />
                </div>
            </div>
        </header>
    )
}

export default Header;