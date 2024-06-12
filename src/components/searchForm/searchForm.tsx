import styles from "./searchForm.module.scss";
import Input from '../input/input.tsx';
import Button from '../button/button.tsx';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/store/hooks/useRedux.ts';
import {searchProductsParamsSlice} from '../../app/store/slices/searchProductParamsSlice.ts';
import {useGetSearchProductsQuery} from '../../app/store/services/products.ts';
import useDebounce from '../../app/store/hooks/useDebounce.tsx';

const { changeSearchProductsParams } = searchProductsParamsSlice.actions;

function SearchForm() {
    const {name, ...params} = useAppSelector(state => state.searchProductsParams);
    const dispatch = useAppDispatch();
    const {refetch} = useGetSearchProductsQuery({name, ...params});
    const [searchValue, setSearchValue] = useState('');
    const searchValueDebounce = useDebounce(searchValue);

    function onSubmitHandler (e: React.FormEvent<HTMLFormElement>) {
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
                onChange={e => setSearchValue(e.target.value)}
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