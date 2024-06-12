import styles from "./searchForm.module.scss";
import Input from '../input/input.tsx';
import Button from '../button/button.tsx';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../../app/store/hooks/hooks.ts';
import {searchProductsParamsSlice} from '../../app/store/slices/searchProductParamsSlice.ts';
import {useGetSearchProductsQuery} from '../../app/store/services/products.ts';

const { changeSearchProductsParams } = searchProductsParamsSlice.actions;

function SearchForm() {
    const {name, ...params} = useAppSelector(state => state.searchProductsParams);
    const dispatch = useAppDispatch();
    const {refetch} = useGetSearchProductsQuery({name, ...params});

    function onSubmitHandler (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        refetch();
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
                value={name}
                onChange={e =>  dispatch(changeSearchProductsParams({
                    ...params,
                    name: e.target.value,
                    skip: 0
                }))}
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