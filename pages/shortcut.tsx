import React from 'react';
import styles from "../styles/grid.module.css";
import Link from "next/link";
import Footer from "../components/footer";
function ShortCut() {
    return (
        <>
            <h1 className={styles.title} ><Link href={"/"} style={{fontSize:"32px"}}>←&nbsp;</Link>Shortcuts</h1>
            <div className={styles.main}>
                <h2>Web Storm</h2>
                <div className={styles.sets}>
                </div>
                <Footer/>
            </div></>
    );
}

ShortCut.propTypes = {};

export default ShortCut;