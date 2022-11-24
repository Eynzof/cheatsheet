import styles from '../styles/grid.module.css';
import Link from "next/link";
import React from "react";
import FlexDisplay from "../components/Flex/FlexDisplay";
import FlexDirection from "../components/Flex/FlexDirection";
import FlexWrap from "../components/Flex/FlexWrap";
import FlexJustifyContent from "../components/Flex/FlexJustifyContent";
import FlexAlignItems from "../components/Flex/FlexAlignItems";
import FlexAlignContents from "../components/Flex/FlexAlignContents";

function Flex() {
    return (<>
        <h1 className={styles.title}><Link href={"/"} style={{fontSize: "32px"}}>←&nbsp;</Link>Flex</h1>
        <div className={styles.main}>
            <h2>Container</h2>
            <div className={styles.sets}>
                <FlexDisplay/>
                <FlexDirection/>
                <FlexWrap/>

                <FlexAlignItems/>
                <FlexAlignContents/>
                <FlexJustifyContent/>
            </div>
        </div>
    </>)
}

export default Flex