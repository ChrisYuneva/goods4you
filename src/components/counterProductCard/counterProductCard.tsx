import minus from '../../assets/icons/minus.svg';
import plus from '../../assets/icons/plus.svg';
import styles from './counterProductCard.module.scss';
import Button from '../button/button.tsx';

interface CounterProductCard {
    count: number;
    onClickPlus: () => void;
    onClickMinus: () => void;
}

function counterProductCard({ count, onClickPlus, onClickMinus }: CounterProductCard) {
    return (
        <div className={styles.counter}>
            <Button ariaLabel='reduce the number of items in the cart by 1' onClick={onClickMinus} className={styles.btn}>
                <img src={minus} alt='' />
            </Button>
                <div className={styles.count}>{count}</div>
            <Button ariaLabel='reduce the number of items in the cart by 1' onClick={onClickPlus} className={styles.btn}>
                <img src={plus} alt='' />
            </Button>
        </div>
    )
}

export default counterProductCard;