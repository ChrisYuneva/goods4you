import styles from './loginForm.module.scss';
import Input from '../input/input.tsx';
import Button from '../button/button.tsx';
import React, {useState} from 'react';
import {useGetUserMutation} from '../../app/store/services/authorization/authorizationApi.ts';
import {useNavigate} from 'react-router-dom';
import AlertMsg from '../alertMsg/alertMsg.tsx';
import {getErrorMsg} from '../../app/utils';

function LoginForm() {
    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const navigate = useNavigate();

    const [getUser, { isError, error}] = useGetUserMutation();

    async function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const authData = await getUser({
            username: loginValue,
            password: passwordValue,
        }).unwrap();

        if(authData) {
            localStorage.setItem('token', authData.token);
            navigate('/');
        }
    }
    function onChangeLogin(e: React.ChangeEvent<HTMLInputElement>) {
        setLoginValue(e.target.value);
    }

    function onChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setPasswordValue(e.target.value);
    }

    return (
        <form
            action=''
            className={styles.form}
            onSubmit={onSubmitHandler}
        >
            <Input
                id='login'
                placeholder='Login'
                value={loginValue}
                onChange={onChangeLogin}
            />
            <Input
                id='password'
                placeholder='Password'
                value={passwordValue}
                onChange={onChangePassword}
                type='password'
            />
            <Button
                type='submit'
                onClick={() => {}}
                className={styles.btn}
            >
                Login
            </Button>
            {
                isError &&<AlertMsg message={getErrorMsg(error) ?? ''} type='error' />
            }
        </form>
    )
}

export default LoginForm;