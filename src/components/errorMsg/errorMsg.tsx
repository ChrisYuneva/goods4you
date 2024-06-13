import styles from './errorMsg.module.scss';

interface ErrorMsgProps {
    message: string;
}

function ErrorMsg({ message }: ErrorMsgProps) {
    return (
        <p className={styles.error}>Sorry, there's been an error. Try again later. <br/> {message}</p>
    )
}

export default ErrorMsg;