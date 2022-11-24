import React from 'react';
import styles from "../../styles/flex.module.css";
import {FlexBlock, FlexBlockBaseline, FlexBlockSix, FlexBlockThree, FlexWrapper} from "./FlexBlock";

const FlexAlignItems = () => {

    const title = "align-items"
    const lore = "在交叉轴方向上的排布"

    return (
        <div>
            <div className={styles.set}>
                <div className={styles.header}>{title}</div>
                <div className={styles.lore}>
                    <p>{lore}</p>
                </div>
                <FlexWrapper>
                    <div className={styles.flex} style={{alignItems: 'flex-start'}}>
                        {FlexBlockSix}
                    </div>
                    <p className={styles.code}>align-items: flex-start;</p>
                </FlexWrapper>
                <FlexWrapper>
                    <div className={styles.flex} style={{alignItems: 'center'}}>
                        {FlexBlockSix}
                    </div>
                    <p className={styles.code}>align-items: center;</p>
                </FlexWrapper>
                <FlexWrapper>
                    <div className={styles.flex} style={{alignItems: 'flex-end'}}>
                        {FlexBlockSix}
                    </div>
                    <p className={styles.code}>align-items: flex-end;</p>
                </FlexWrapper>
                <FlexWrapper>
                    <div className={styles.flex} style={{alignItems: 'baseline'}}>
                        {FlexBlockBaseline}
                    </div>
                    <p className={styles.code}>align-items: baseline;</p>
                </FlexWrapper>
                <FlexWrapper>
                    <div className={styles.flex} style={{alignItems: 'stretch'}}>
                        {FlexBlock}
                    </div>
                    <p className={styles.code}>align-items: stretch;</p>
                </FlexWrapper>
            </div>
        </div>
    );
};

export default FlexAlignItems;