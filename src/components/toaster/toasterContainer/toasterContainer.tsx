import React from 'react';
import {useAppSelector} from '../../../app/hooks/useRedux.ts';
import Toast from '../toaster/toaster.tsx';
import styles from './toasterContainer.module.scss';

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
