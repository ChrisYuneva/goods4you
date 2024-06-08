import cross from '../../assets/icons/cross.svg';
import styles from './accordion.module.scss';
import cn from 'classnames';
import {useRef, useState} from 'react';

interface AccordionProps {
    title: string;
    text: string;
    isLast?: boolean;
}

function Accordion({ title, text, isLast }: AccordionProps) {
    const [isVisible, setVisible] = useState(false);
    const textRef = useRef<HTMLParagraphElement>(null);

    function showContent() {
        setVisible(prev => !prev);
    }

    return (
        <div aria-controls='menu' tabIndex={0} role='button' aria-expanded={isVisible} aria-label='Disclose answer' className={cn(styles.accordion, {[styles.last]: isLast})} onClick={showContent}>
            <div className={styles.content}>
                <span className={styles.title}>{title}</span>
                <img src={cross} alt='' className={cn(styles.icon, {[styles.rotate]: isVisible})} />
            </div>
            <p id='menu' className={cn(styles.text, {[styles.visibleText]: isVisible})} ref={textRef} tabIndex={0}>
                {text}
            </p>
        </div>
    )
}

export default Accordion;