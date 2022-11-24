import React from 'react';
import styles from "../../styles/flex.module.css";
import QuestionToolTip from "../utils/QuestionToolTip";
import {FlexBlock} from "./FlexBlock";

const FlexDisplay = () => {

    const title = "flex"
    const lore = "将容器设为弹性容器，直接子元素均为弹性元素"

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
                        <p className={styles.code}>display: grid; <QuestionToolTip
                            label={"默认情况下 flex 是块级元素，一个 flex 独占一行"}/></p>
                    </div>
                </div>
                <div className={styles.sections}>
                    <div className={styles.blocks}>
                        <div className={styles.flex}
                             style={{}}>
                            {FlexBlock}
                        </div>
                        <div className={styles.flex}
                             style={{}}>
                            {FlexBlock}
                        </div>
                        <p className={styles.code}>display: inline-grid; <QuestionToolTip
                            label={"将 flex 改为行内元素，允许同一行内存在多个 flex"}/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default FlexDisplay;