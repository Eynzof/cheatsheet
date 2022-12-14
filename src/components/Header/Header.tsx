//@ts-nocheck
import React from 'react';
import styles from './header.module.css';
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href={"/"} className={styles.title__font}>CHEATSHEET</Link>
            <ul className={styles.nav}>
                <li className={styles.nav__item}><Link href={"/grid"} className={styles.nav__link}>GRID</Link></li>
                <li className={styles.nav__item}><Link href={"/flex"} className={styles.nav__link}>FLEX</Link></li>
                <li className={styles.nav__item}><Link href={"/shortcut"} className={styles.nav__link}>SHORTCUT</Link>
                </li>
                {/*<li className={styles.nav__item}><Link href={"/command"} className={styles.nav__link}>COMMAND</Link>*/}
                {/*</li>*/}
            </ul>
        </header>
    );
};

export default Header;