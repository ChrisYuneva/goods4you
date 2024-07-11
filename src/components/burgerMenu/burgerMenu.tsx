import {useEffect, useState} from 'react';
import Navigation from '@components/navigation/navigation.tsx';
import styles from './burgerMenu.module.scss';

function BurgerMenu() {
    const [openMenu, setOpenMenu] = useState(false);

    function openMenuHandler() {
        setOpenMenu((prev) => !prev);
    }

    useEffect(()  => {
        document.body.style.overflow = openMenu ? 'hidden' : '';
    }, [openMenu]);

    return (
        <>
            <div
                className={styles.burger_wrapper}
                onClick={openMenuHandler}
                tabIndex={0}
                role='button'
                aria-expanded={openMenu}
                aria-label='Open menu'
                aria-controls='menu'
            >
                <label className={openMenu ? `${styles.burger} ${styles.active}` : styles.burger}>
                    <span></span>
                </label>
            </div>
            {
                openMenu && (
                    <div className={styles.back}>
                        <div className={styles.menu} id='menu'>
                            <Navigation type={'header'} openMenuHandler={openMenuHandler}/>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default BurgerMenu;
