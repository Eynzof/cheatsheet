import React from 'react';
import styles from "../../styles/grid.module.css";
import QuestionToolTip from "../utils/QuestionToolTip";

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
                        <div className={styles.grid}
                             style={{}}>
                            {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                            style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`}}></div>)}
                        </div>
                        <p className={styles.code}>display: grid; <QuestionToolTip label={"默认情况下 grid 是块级元素，一个grid独占一行"}/></p>
                    </div>
                </div>
                <div className={styles.sections}>
                    <div className={styles.blocks}>
                        <div className={styles.grid}
                             style={{}}>
                            {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                            style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`}}></div>)}
                        </div>
                        <div className={styles.grid}
                             style={{}}>
                            {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                            style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`}}></div>)}
                        </div>
                        <p className={styles.code}>display: inline-grid; <QuestionToolTip label={"将 grid 改为行内元素，允许同一行内存在多个 grid"}/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlexDisplay;