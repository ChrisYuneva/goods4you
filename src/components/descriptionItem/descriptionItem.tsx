import styles from "./descriptionItem.module.scss";
import cn from 'classnames';
import React from 'react';

interface DescriptionItemProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

function DescriptionItem({ title, children, className }: DescriptionItemProps) {
    return (
        <div className={styles.wrapper}>
            <p className={cn(styles.title, className)}>{title}</p>
            {children}
        </div>
    )
}

export default DescriptionItem;