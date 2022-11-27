import React from 'react';
import styles from './footer.module.css';


function Footer() {
    return (
        <div className={styles.footer}>
            <p>Created by <a href="https://wordpress.eynzo.me/">Enzo Li</a></p>
            <p>2022 November © <a href="">MasonicLab</a></p>
        </div>
    );
}

export default Footer;