import styles from "./descriptionItem.module.scss";
import cn from 'classnames';

interface DescriptionItemProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

function DescriptionItem({ title, children, className }: DescriptionItemProps) {
    return (
        <div className={styles.wrapper}>
            <h6 className={cn(styles.title, className)}>{title}</h6>
            {children}
        </div>
    )
}

export default DescriptionItem;