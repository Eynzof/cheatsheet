import React from 'react';
import styles from "../../styles/grid.module.css";
import QuestionUrltip from "../utils/QuestionUrltip";
import QuestionToolTip from "../utils/QuestionToolTip";

const GridDisplay = () => {
    return (
        <div>
            <div className={styles.set}>
                <div className={styles.header}>grid</div>
                <div className={styles.lore}>
                    <p>为子元素定义一个网格环境</p>
                </div>
                <div className={styles.sections}>
                    <div className={styles.blocks}>
                        <div className={styles.grid}
                             style={{}}>
                            {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                            style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`}}></div>)}
                        </div>
                        <p className={styles.code}>display: grid; <QuestionToolTip
                            label={'默认情况下 grid 是块级元素，一个grid独占一行'}/>
                        </p>
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
                        <p className={styles.code}>display: inline-grid;
                            <QuestionToolTip label={'将 grid 改为行内元素，允许同一行内存在多个 grid'}/>
                        </p>
                    </div>
                </div>
                <div className={styles.sections}>
                    <div className={styles.blocks}>
                        <div className={styles.grid}
                             style={{}}>
                            {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                            style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`}}></div>)}
                        </div>
                        <p className={styles.code}>display: sub-grid; <QuestionUrltip
                            url={'https://ishadeed.com/article/learn-css-subgrid/'}/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridDisplay;