import styles from './navigation.module.scss';
import basket from '../../assets/icons/basket.svg'
import {Link} from 'react-router-dom';

interface NavigationProps {
    type: 'header' | 'footer'
}

function Navigation({ type }: NavigationProps) {

    return (
        <nav className={styles.wrapper}>
            <ul className={styles.list}>
                <li>
                    <Link to='/#catalog' className={styles.listItem}>Catalog</Link>
                </li>
                <li>
                    <Link to='/#FAQ' className={styles.listItem}>FAQ</Link>
                </li>
                {
                    type !== 'footer' && (
                        <li>
                            <Link to="/cart" className={styles.listItem} id={styles.basket}>
                                Cart
                                <img src={basket} alt="Basket icon" className={styles.icon}/>
                                <span className={styles.counter}>1</span>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}

export default Navigation;