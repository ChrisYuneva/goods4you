import styles from './ skeletonCartPage.module.scss';
import generalStyles from '../skeleton.module.scss';
import cn from 'classnames';

function SkeletonCartPage() {
    return (
        <>
            <div className={styles.cart}>
                <div className={cn(styles.item, generalStyles.anim)}></div>
                <div className={cn(styles.item, generalStyles.anim)}></div>
                <div className={cn(styles.item, generalStyles.anim)}></div>
            </div>
            <div className={styles.total}>
                <div className={cn(styles.count, generalStyles.anim)}></div>
                <div className={cn(styles.price, generalStyles.anim)}></div>
                <div className={cn(styles.totalPrice, generalStyles.anim)}></div>
            </div>
        </>
    );
}

export default SkeletonCartPage;
