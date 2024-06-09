import styles from "./searchForm.module.scss";
import Input from '../input/input.tsx';
import Button from '../button/button.tsx';
import React, {useState} from 'react';

function SearchForm() {
    const [value, setValue] = useState('');

    function onSubmitHandler (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setValue('');
    }

    return (
        <form
            className={styles.form}
            action=''
            onSubmit={onSubmitHandler}
        >
            <Input
                id='search'
                placeholder='Search by title'
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <Button
                type='submit'
                className={styles.btn}
            >
                Search
            </Button>
        </form>
    )
}

export default SearchForm;