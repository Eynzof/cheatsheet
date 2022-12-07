import React from 'react';
import styles from "../../styles/flex.module.css";
import {
    FlexBlock,
    FlexBlockBaseline,
    FlexBlockSix,
    FlexBlockTen,
    FlexBlockTenFixed,
    FlexBlockThree,
    FlexWrapper
} from "./FlexBlock";

const FlexAlignContents = () => {

    const title = "align-content"
    const lore = "在交叉轴方向上块级别的排布"

    return (
        <div>
            <div className={styles.set}>
                <div className={styles.header}>{title}</div>
                <div className={styles.lore}>
                    <p>{lore}</p>
                </div>
                <FlexWrapper>
                    <div className={styles.flex} style={{alignContent: 'flex-start', flexWrap: 'wrap'}}>
                        {FlexBlockTenFixed}
                    </div>
                    <p className={styles.code}>align-content: flex-start;</p>
                </FlexWrapper>
                <FlexWrapper>
                    <div className={styles.flex} style={{alignContent: 'center', flexWrap: 'wrap'}}>
                        {FlexBlockTenFixed}
                    </div>
                    <p className={styles.code}>align-content: center;</p>
                </FlexWrapper>
                <FlexWrapper>
                    <div className={styles.flex} style={{alignContent: 'flex-end', flexWrap: 'wrap'}}>
                        {FlexBlockTenFixed}
                    </div>
                    <p className={styles.code}>align-content: flex-end;</p>
                </FlexWrapper>
                <FlexWrapper>
                    <div className={styles.flex} style={{alignContent: 'space-between', flexWrap: 'wrap'}}>
                        {FlexBlockTenFixed}
                    </div>
                    <p className={styles.code}>align-content: space-between;</p>
                </FlexWrapper>
                <FlexWrapper>
                    <div className={styles.flex} style={{alignContent: 'space-around', flexWrap: 'wrap'}}>
                        {FlexBlockTenFixed}
                    </div>
                    <p className={styles.code}>align-content: space-around;</p>
                </FlexWrapper>
                <FlexWrapper>
                    <div className={styles.flex} style={{alignContent: 'stretch', flexWrap: 'wrap'}}>
                        {FlexBlockTen}
                    </div>
                    <p className={styles.code}>align-content: stretch;</p>
                </FlexWrapper>
            </div>
        </div>
    );
};

export default FlexAlignContents;