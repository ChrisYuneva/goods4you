import styles from './skeletonProductCard.module.scss';
import generalStyles from '../skeleton.module.scss';
import cn from 'classnames';

function SkeletonProductCard() {
    return (
        <div className={styles.card}>
            <div className={cn(styles.img, generalStyles.anim)}></div>
            <div className={styles.content}>
                <div className={cn(styles.text, generalStyles.anim)}></div>
                <div className={cn(styles.btn, generalStyles.anim)}></div>
            </div>
        </div>
    );
}

export default SkeletonProductCard;
