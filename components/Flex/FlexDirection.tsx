import React from 'react';
import styles from "../../styles/flex.module.css";
import {FlexBlock} from "./FlexBlock";

const FlexDirection = () => {

    const title = "flex-direction"
    const lore = "确定主轴(main-axis)"

    return (
        <div>
            <div className={styles.set}>
                <div className={styles.header}>{title}</div>
                <div className={styles.lore}>
                    <p>{lore}</p>
                </div>
                <div className={styles.sections}>
                    <div className={styles.blocks}>
                        <div className={styles.flex}>
                            {FlexBlock}
                        </div>
                        <p className={styles.code}>flex-direction: row;</p>
                    </div>
                </div>
                <div className={styles.sections}>
                    <div className={styles.blocks}>
                        <div className={styles.flex} style={{flexDirection: 'row-reverse'}}>
                            {FlexBlock}
                        </div>
                        <p className={styles.code}>flex-direction: row-reverse;</p>
                    </div>
                </div>
                <div className={styles.sections}>
                    <div className={styles.blocks}>
                        <div className={styles.flex} style={{flexDirection: 'column'}}>
                            {FlexBlock}
                        </div>
                        <p className={styles.code}>flex-direction: column;</p>
                    </div>
                </div>
                <div className={styles.sections}>
                    <div className={styles.blocks}>
                        <div className={styles.flex} style={{flexDirection: 'column-reverse'}}>
                            {FlexBlock}
                        </div>
                        <p className={styles.code}>flex-direction: column-reverse;</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default FlexDirection;