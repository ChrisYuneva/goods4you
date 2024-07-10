import styles from './loader.module.scss';
import cn from 'classnames';

interface LoaderProps {
    className?: string;
}

function Loader({ className }: LoaderProps) {
    return (
        <div className={cn(styles.wrapper, className)}>
            <div className={styles.loader}></div>
        </div>
    )
}

export default Loader;