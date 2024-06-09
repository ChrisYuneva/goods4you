import minus from '../../assets/icons/minus.svg';
import plus from '../../assets/icons/plus.svg';
import styles from './counter.module.scss';
import Button from '../button/button.tsx';

interface Counter {
    count: number;
    counterChange: (type: 'plus'| 'minus') => void;
}

function Counter({ count, counterChange}: Counter) {
    return (
        <div className={styles.counter}>
            <Button ariaLabel='Reduce the number of items in the cart by 1' onClick={() => counterChange('minus')} className={styles.btn}>
                <img src={minus} alt='' />
            </Button>
            <div className={styles.count}>
                {count}
            </div>
            <Button ariaLabel='Increase the number of items in the basket by 1' onClick={() => counterChange('plus')} className={styles.btn}>
                <img src={plus} alt='' />
            </Button>
        </div>
    )
}

export default Counter;