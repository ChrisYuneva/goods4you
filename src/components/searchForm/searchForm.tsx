import styles from "./searchForm.module.scss";
import React, {useEffect, useState} from 'react';
import {searchProductsParamsSlice} from '@app/store/slices/searchProductParams/searchProductParamsSlice.ts';
import {useAppDispatch, useAppSelector} from '@app/hooks/useRedux.ts';
import {useGetSearchProductsQuery} from '@app/store/services/products/productsApi.ts';
import useDebounce from '@app/hooks/useDebounce.tsx';
import Input from '@components/input/input.tsx';
import Button from '@components/button/button.tsx';

const { changeSearchProductsParams } = searchProductsParamsSlice.actions;

interface SearchFormProps {
    loading?: boolean;
}

function SearchForm({loading}: SearchFormProps) {
    const {name, ...params} = useAppSelector(state => state.searchProductsParams);
    const dispatch = useAppDispatch();
    const {refetch} = useGetSearchProductsQuery({name, ...params});
    const [searchValue, setSearchValue] = useState(name);
    const searchValueDebounce = useDebounce(searchValue, 350);

    function onSubmitHandler (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        refetch();
    }

    useEffect(() => {
        if(searchValueDebounce !== '') {
            dispatch(changeSearchProductsParams({
                ...params,
                name: searchValueDebounce,
                skip: 0,
            }));
        }
    },[dispatch, searchValueDebounce]);

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setSearchValue(value);
        if(value === '') {
            dispatch(changeSearchProductsParams({
                ...params,
                name: value,
                skip: 0,
            }));
        }
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
                value={searchValue}
                disabled={loading}
                onChange={onChange}
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