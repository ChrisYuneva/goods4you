import styles from './button.module.scss';
import cn from 'classnames';

interface ButtonProps {
    children: React.ReactNode;
    ariaLabel: string;
    onClick?: () => void;
    type?: 'submit' | 'reset' | 'button';
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