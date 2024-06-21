import styles from './loginForm.module.scss';
import Input from '../input/input.tsx';
import Button from '../button/button.tsx';
import React, {useState} from 'react';
import {useGetUserMutation} from '../../app/store/services/authorization/authorizationApi.ts';
import {useNavigate} from 'react-router-dom';
import AlertMsg from '../alertMsg/alertMsg.tsx';
import {getErrorMsg} from '../../app/utils';
import Loader from '../loader/loader.tsx';

interface LoginForm {
    username: string;
    password: string;
}

function LoginForm() {
    const [getUser, { isError, error, isLoading}] = useGetUserMutation();
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState<LoginForm>({
        username: '',
        password: ''
    });

    async function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const authData = await getUser({
            username: loginForm.username,
            password: loginForm.password,
            expiresInMins: 45,
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