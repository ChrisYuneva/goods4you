import styles from './button.module.scss';
import cn from 'classnames';
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    ariaLabel?: string;
    type?: 'submit';
    className?: string;
}

function Button({ children, ariaLabel, onClick, type, className }: ButtonProps) {
    return (
        <button
            className={cn(styles.btn, className)}
            aria-label={ariaLabel}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button;