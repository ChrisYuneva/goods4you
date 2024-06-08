import minus from '../../assets/icons/minus.svg';
import plus from '../../assets/icons/plus.svg';
import styles from './counter.module.scss';
import Button from '../button/button.tsx';
import cn from 'classnames';

interface Counter {
    count: number;
    counterChange: (type: 'plus'| 'minus') => void;
    classNameBtn?: string;
    classNameCount?: string;
}

function Counter({ count, counterChange, classNameBtn, classNameCount }: Counter) {
    return (
        <div className={styles.counter}>
            <Button ariaLabel='Reduce the number of items in the cart by 1' onClick={() => counterChange('minus')} className={cn(styles.btn, classNameBtn)}>
                <img src={minus} alt='' />
            </Button>
            <div className={cn(styles.count, classNameCount)}>
                {count}
            </div>
            <Button ariaLabel='Increase the number of items in the basket by 1' onClick={() => counterChange('plus')} className={cn(styles.btn, classNameBtn)}>
                <img src={plus} alt='' />
            </Button>
        </div>
    )
}

export default Counter;