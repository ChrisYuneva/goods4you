import {useEffect} from 'react';
import plus from '@assets/icons/plus.svg';
import styles from './toaster.module.scss';
import {notificationErrorSlice} from '@app/store/slices/notificationError/notificationError.ts';
import {useAppDispatch} from '@app/hooks/useRedux.ts';
import Button from '@components/button/button.tsx';

interface ToastProps {
    id: string;
    message: string;
}

const { removeErrorToast } = notificationErrorSlice.actions;

function Toast({ id, message }: ToastProps) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(removeErrorToast(id));
        }, 4000);

        return () => {
            clearTimeout(timer);
        };
    }, [dispatch, id]);

    return (
        <div className={styles.toast}>
            Sorry, there's been an error. Try again later. <br/>{message}
            <Button
                ariaLabel='Close toaster'
                className={styles.btn}
                onClick={() => dispatch(removeErrorToast(id))}
            >
                <img src={plus} alt='' className={styles.icon}/>
            </Button>
        </div>
    );
}

export default Toast;
