import styles from './alertMsg.module.scss';
import cn from 'classnames';

interface AlertMsgProps {
    message: string;
    type?: 'default' | 'error';
}

function AlertMsg({ message, type }: AlertMsgProps) {
    return (
        <p className={cn(styles.default, {[styles.error]: type === 'error'})}>
            {
                type === 'error' && (
                    <>
                        Sorry, there's been an error. Try again later. <br/> {message}
                    </>
                )
            }
            {message}
        </p>
    )
}

export default AlertMsg;