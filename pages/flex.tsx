import styles from '../styles/grid.module.css';
import Link from "next/link";
import React from "react";
import FlexDisplay from "../components/Flex/FlexDisplay";
import FlexDirection from "../components/Flex/FlexDirection";
import FlexWrap from "../components/Flex/FlexWrap";
import FlexJustifyContent from "../components/Flex/FlexJustifyContent";

function Flex() {
    return (<>
        <h1 className={styles.title}><Link href={"/"} style={{fontSize: "32px"}}>&lt; </Link>Flex</h1>
        <div className={styles.main}>
            <h2>Container</h2>
            <div className={styles.sets}>
                <FlexDisplay/>
                <FlexDirection/>
                <FlexWrap/>
                <FlexJustifyContent/>
            </div>
        </div>
    </>)
}

export default Flex