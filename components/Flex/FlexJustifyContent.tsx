import React from 'react';
import styles from "../../styles/flex.module.css";
import {FlexBlockThree, FlexWrapper} from "./FlexBlock";

const FlexJustifyContent = () => {

    const title = "justify-content"
    const lore = "排布多列相对于页面的位置"

    return (
        <div>
            <div className={styles.set}>
                <div className={styles.header}>{title}</div>
                <div className={styles.lore}>
                    <p>{lore}</p>
                </div>
                <FlexWrapper>
                    <div className={styles.flex} style={{justifyContent: 'flex-start'}}>
                        {FlexBlockThree}
                    </div>
                    <p className={styles.code}>justify-items: flex-start;</p>
                </FlexWrapper>
                <FlexWrapper>
                    <div className={styles.flex} style={{justifyContent: 'center'}}>
                        {FlexBlockThree}
                    </div>
                    <p className={styles.code}>justify-items: center</p>
                </FlexWrapper>
                <FlexWrapper>
                    <div className={styles.flex} style={{justifyContent: 'flex-end'}}>
                        {FlexBlockThree}
                    </div>
                    <p className={styles.code}>justify-items: flex-end;</p>
                </FlexWrapper>
                <FlexWrapper>
                    <div className={styles.flex} style={{justifyContent: 'space-between'}}>
                        {FlexBlockThree}
                    </div>
                    <p className={styles.code}>justify-items: space-between;</p>
                </FlexWrapper>
                <FlexWrapper>
                    <div className={styles.flex} style={{justifyContent: 'space-around'}}>
                        {FlexBlockThree}
                    </div>
                    <p className={styles.code}>justify-items: space-around;</p>
                </FlexWrapper>
                <FlexWrapper>
                    <div className={styles.flex} style={{justifyContent: 'space-evenly'}}>
                        {FlexBlockThree}
                    </div>
                    <p className={styles.code}>justify-items: space-evenly;</p>
                </FlexWrapper>
            </div>
        </div>
    );
};


export default FlexJustifyContent;