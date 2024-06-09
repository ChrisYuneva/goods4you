import cross from '../../assets/icons/cross.svg';
import styles from './accordion.module.scss';
import cn from 'classnames';
import React, {useState} from 'react';

interface AccordionProps {
    title: string;
    text: string;
    isLast?: boolean;
}

function Accordion({ title, text, isLast }: AccordionProps) {
    const [isVisible, setVisible] = useState(false);

    function showContent() {
        setVisible(prev => !prev);
    }

    function onKeyPress(e: React.KeyboardEvent<HTMLDivElement>)  {
        if(e.key === 'Enter') {
            showContent();
        }
    }

    return (
        <div
            className={cn(styles.accordion, {[styles.last]: isLast})}
            aria-controls='accordion'
            tabIndex={0}
            role='button'
            aria-expanded={isVisible}
            aria-label={title}
            onClick={showContent}
            onKeyDown={onKeyPress}
        >
            <div className={styles.content}>
                <span className={styles.title}>{title}</span>
                <img src={cross} alt='' className={cn(styles.icon, {[styles.rotate]: isVisible})} />
            </div>
            <p id='accordion' className={cn(styles.text, {[styles.visibleText]: isVisible})} tabIndex={0}>
                {text}
            </p>
        </div>
    )
}

export default Accordion;