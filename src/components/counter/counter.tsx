import minus from '../../assets/icons/minus.svg';
import plus from '../../assets/icons/plus.svg';
import styles from './counter.module.scss';
import Button from '../button/button.tsx';
import cn from 'classnames';

interface CounterProps {
    id: number,
    quantity: number;
    size?: 'default' | 'big';
    className?: string;
}

function Counter({ quantity, size, className }: CounterProps) {
    return (
        <div className={cn(styles.counter, {[styles.counterBig]: size === 'big'}, className)}>
            <Button ariaLabel='Reduce the number of items in the cart by 1' onClick={() => {}} className={cn(styles.btn, {[styles.btnBig]: size === 'big'})}>
                <img src={minus} alt='' className={cn(styles.icon, {[styles.iconBig]: size === 'big'})} />
            </Button>
            <div className={cn(styles.count, {[styles.countBig]: size === 'big'})}>
                {quantity}
            </div>
            <Button ariaLabel='Increase the number of items in the basket by 1' onClick={() => {}} className={cn(styles.btn, {[styles.btnBig]: size === 'big'})}>
                <img src={plus} alt='' className={cn(styles.icon, {[styles.iconBig]: size === 'big'})} />
            </Button>
        </div>
    )
}

export default Counter;