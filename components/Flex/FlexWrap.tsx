import React from 'react';
import styles from "../../styles/flex.module.css";
import {FlexBlock, FlexBlockTen, FlexWrapper} from "./FlexBlock";

const FlexWrap = () => {

    const title = "flex-wrap"
    const lore = "元素自动换行"

    return (
        <div>
            <div className={styles.set}>
                <div className={styles.header}>{title}</div>
                <div className={styles.lore}>
                    <p>{lore}</p>
                </div>
                <FlexWrapper>
                    <div className={styles.flex}>
                        {FlexBlock}
                    </div>
                    <p className={styles.code}>flex-wrap: nowrap;</p>
                </FlexWrapper>
                <FlexWrapper>
                    <div className={styles.flex} style={{flexWrap: "wrap"}}>
                        {FlexBlockTen}
                    </div>
                    <p className={styles.code}>flex-wrap: wrap;</p>
                </FlexWrapper>
                <FlexWrapper>
                    <div className={styles.flex} style={{flexWrap: "wrap-reverse"}}>
                        {FlexBlockTen}
                    </div>
                    <p className={styles.code}>flex-wrap: wrap-reverse;</p>
                </FlexWrapper>
            </div>
        </div>
    );
};


export default FlexWrap;