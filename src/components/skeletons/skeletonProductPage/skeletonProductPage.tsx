import styles from './skeletonProductPage.module.scss';
import generalStyle from '../skeleton.module.scss';
import cn from 'classnames';

function SkeletonProductPage() {
    return (
        <div className={styles.wrapper}>
            <div className={cn(styles.title, generalStyle.anim)}></div>
            <div className={styles.content}>
                <div className={cn(styles.slider, generalStyle.anim)}></div>
                <div className={styles.description}>
                    <div className={cn(styles.head, generalStyle.anim)}></div>
                    <div className={cn(styles.text, generalStyle.anim)}></div>
                    <div className={cn(styles.text, generalStyle.anim)}></div>
                    <div className={cn(styles.text, generalStyle.anim)}></div>
                    <div className={cn(styles.text, generalStyle.anim)}></div>
                    <div className={cn(styles.text, generalStyle.anim)}></div>
                    <div className={cn(styles.text, generalStyle.anim)}></div>
                    <div className={cn(styles.text, generalStyle.anim)}></div>
                    <div className={cn(styles.text, generalStyle.anim)}></div>
                    <div className={cn(styles.btn, generalStyle.anim)}></div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonProductPage;