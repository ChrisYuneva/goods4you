import Header from '../header/header.tsx';
import Footer from '../footer/footer.tsx';
import {Outlet} from 'react-router-dom';
import styles from './layout.module.scss';

function Layout() {
    return (
        <div className={styles.outerContainer}>
            <Header />
            <div className={styles.page}>
               <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;