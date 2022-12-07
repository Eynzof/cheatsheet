import React from 'react';
import styles from "../../styles/flex.module.css";
import {FlexBlock, FlexWrapper} from "./FlexBlock";

const FlexDirection = () => {

    const title = "flex-direction"
    const lore = "确定主轴方向"

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
                    <p className={styles.code}>flex-direction: row;</p>
                </FlexWrapper>
                <FlexWrapper>
                    <div className={styles.flex} style={{flexDirection: 'row-reverse'}}>
                        {FlexBlock}
                    </div>
                    <p className={styles.code}>flex-direction: row-reverse;</p>
                </FlexWrapper>
                <FlexWrapper>
                    <div className={styles.flex} style={{flexDirection: 'column'}}>
                        {FlexBlock}
                    </div>
                    <p className={styles.code}>flex-direction: column;</p>
                </FlexWrapper>
                <FlexWrapper>
                    <div className={styles.flex} style={{flexDirection: 'column-reverse'}}>
                        {FlexBlock}
                    </div>
                    <p className={styles.code}>flex-direction: column-reverse;</p>
                </FlexWrapper>
            </div>
        </div>
    );
};


export default FlexDirection;