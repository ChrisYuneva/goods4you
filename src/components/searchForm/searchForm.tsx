import styles from "./searchForm.module.scss";
import Input from '../input/input.tsx';
import Button from '../button/button.tsx';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks/useRedux.ts';
import {searchProductsParamsSlice} from '../../app/store/slices/searchProductParams/searchProductParamsSlice.ts';
import {useGetSearchProductsQuery} from '../../app/store/services/products/products.ts';
import useDebounce from '../../app/hooks/useDebounce.tsx';

const { changeSearchProductsParams } = searchProductsParamsSlice.actions;

interface SearchFormProps {
    loading?: boolean;
}

function SearchForm({loading}: SearchFormProps) {
    const {name, ...params} = useAppSelector(state => state.searchProductsParams);
    const dispatch = useAppDispatch();
    const {refetch} = useGetSearchProductsQuery({name, ...params});
    const [searchValue, setSearchValue] = useState('');
    const searchValueDebounce = useDebounce(searchValue);

    async function onSubmitHandler (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        refetch();
    }

    useEffect(() => {
        dispatch(changeSearchProductsParams({
            ...params,
            name: searchValueDebounce,
            skip: 0
        }));
    }, [dispatch, searchValueDebounce]);

    return (
        <form
            className={styles.form}
            action=''
            onSubmit={onSubmitHandler}
        >
            <Input
                id='search'
                placeholder='Search by title'
                value={searchValue}
                disabled={loading}
                onChange={e => setSearchValue(e.target.value)}
            />
            <Button
                type='submit'
                className={styles.btn}
                disabled={loading}
            >
                Search
            </Button>
        </form>
    )
}

export default SearchForm;