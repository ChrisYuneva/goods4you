import React from 'react';
import styles from './toasterContainer.module.scss';
import {useAppSelector} from '@app/hooks/useRedux.ts';
import Toast from '@components/toaster/toaster/toaster.tsx';

const ToastContainer: React.FC = () => {
    const {toast} = useAppSelector(state => state.error);

    return (
        <div className={styles.toastContainer}>
            {toast.map((toast) => (
                <Toast id={toast.id} key={toast.id} message={toast.message} />
            ))}
        </div>
    );
};

export default ToastContainer;
