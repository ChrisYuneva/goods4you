import styles from "./searchForm.module.scss";
import Input from '../input/input.tsx';
import Button from '../button/button.tsx';
import {useState} from 'react';

function SearchForm() {
    const [value, setValue] = useState('');
    return (
        <form className={styles.form} action='' onSubmit={e => {
            e.preventDefault();
            console.log(value);
            setValue('');
        }}>
            <Input id='search' placeholder='Search by title' value={value} onChange={e => setValue(e.target.value)}/>
            <Button
                ariaLabel='Find a product'
                type='submit'
                className={styles.btn}
            >
                Search
            </Button>
        </form>
    )
}

export default SearchForm;