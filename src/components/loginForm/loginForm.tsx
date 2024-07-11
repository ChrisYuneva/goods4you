import styles from './loginForm.module.scss';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useGetUserMutation} from '@app/store/services/authorization/authorizationApi.ts';
import Input from '@components/input/input.tsx';
import Button from '@components/button/button.tsx';
import AlertMsg from '@components/alertMsg/alertMsg.tsx';
import {getErrorMsg} from '@app/utils';
import Loader from '@components/loader/loader.tsx';

interface LoginForm {
    username: string;
    password: string;
}

function LoginForm() {
    const [getUser, { isError, error, isLoading}] = useGetUserMutation();
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState<LoginForm>({
        username: 'liamg',
        password: 'liamgpass'
    });

    async function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const authData = await getUser({
            username: loginForm.username,
            password: loginForm.password,
            expiresInMins: 60,
        }).unwrap();

        if(authData) {
            localStorage.setItem('token', authData.token);
            navigate('/');
        }
    }

    function onChangeLoginForm(e: React.ChangeEvent<HTMLInputElement>) {
        setLoginForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }

    return (
        <form
            action=''
            className={styles.form}
            onSubmit={onSubmitHandler}
        >
            <Input
                id='username'
                placeholder='Login'
                value={loginForm.username}
                onChange={onChangeLoginForm}
            />
            <Input
                id='password'
                placeholder='Password'
                value={loginForm.password}
                onChange={onChangeLoginForm}
                type='password'
            />
            <Button
                type='submit'
                className={styles.btn}
            >
                Login
            </Button>
            {
                isError &&<AlertMsg message={getErrorMsg(error) ?? ''} type='error' />
            }
            {
                isLoading && <Loader className={styles.loader}/>
            }
        </form>
    )
}

export default LoginForm;