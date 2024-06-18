import styles from './loginForm.module.scss';
import Input from '../input/input.tsx';
import Button from '../button/button.tsx';
import React, {useState} from 'react';

function LoginForm() {
    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

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
        >
            <Input id='login' placeholder='Login' value={loginValue} onChange={onChangeLogin} />
            <Input id='password' placeholder='Password' value={passwordValue} onChange={onChangePassword} />
            <Button
                type='submit'
                onClick={() => {}}
                className={styles.btn}
            >
                Login
            </Button>
        </form>
    )
}

export default LoginForm;