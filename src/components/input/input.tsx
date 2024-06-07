import styles from './input.module.scss';
import {ChangeEvent} from 'react';

interface InputProps {
    id: string;
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ id, placeholder, value, onChange }: InputProps) {

    return (
        <>
            <label htmlFor={id} className={styles.srOnly}>{placeholder}</label>
            <input id={id} type="text" placeholder={placeholder} className={styles.input} value={value} onChange={onChange} />
        </>
    )
}

export default Input;