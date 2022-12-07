import React from 'react';
import styles from './footer.module.css';


function Footer() {
    return (
        <div className={styles.footer} style={{gridColumn: '1/3'}}>
            <p>Created by <a href="https://eynzo.me/">Enzo Li</a></p>
            <p>2022 November © <a href="components">MasonicLab</a></p>
        </div>
    );
}

export default Footer;