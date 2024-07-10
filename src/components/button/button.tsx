import styles from './button.module.scss';
import cn from 'classnames';
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    ariaLabel?: string;
    type?: 'submit';
    className?: string;
    disabled?: boolean;
}

function Button({ children, ariaLabel, onClick, type, className, disabled }: ButtonProps) {
    return (
        <button
            className={cn(styles.btn, className)}
            aria-label={ariaLabel}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button;