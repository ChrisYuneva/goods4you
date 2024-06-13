import styles from './input.module.scss';
import {ChangeEvent} from 'react';

interface InputProps {
    id: string;
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

function Input({ id, placeholder, value, onChange, disabled }: InputProps) {

    return (
        <>
            <label htmlFor={id} className={styles.srOnly}>{placeholder}</label>
            <input
                id={id}
                type="text"
                placeholder={placeholder}
                className={styles.input}
                value={value}
                disabled={disabled}
                onChange={onChange}
            />
        </>
    )
}

export default Input;