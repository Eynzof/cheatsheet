import React from 'react';
import styles from "../../styles/grid.module.css";
import {Tooltip} from "@chakra-ui/react";
import {QuestionOutlineIcon} from "@chakra-ui/icons";

const GridAutoFlow = () => {
    return (
        <div>
            <div className={styles.set}>
                <div className={styles.header}>grid-auto-flow</div>
                <div className={styles.lore}>
                    <p>由算法自动排列元素</p>
                </div>
                <div className={styles.sections}>
                    <div className={styles.blocks}>
                        <div className={styles.grid}
                             style={{
                                 gridAutoFlow: "row",
                                 gridTemplateRows: 'auto auto auto',
                                 gridTemplateColumns: 'auto auto auto'
                             }}>
                            {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atoma} key={i}
                                                                            style={{
                                                                                backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`,

                                                                            }}></div>)}
                        </div>
                        <p className={styles.code}>grid-auto-flow: row;
                        </p>
                    </div>
                </div>
                <div className={styles.sections}>
                    <div className={styles.blocks}>
                        <div className={styles.grid}
                             style={{
                                 gridAutoFlow: "column",
                                 gridTemplateRows: 'auto auto auto',
                                 gridTemplateColumns: 'auto auto auto'
                             }}>
                            {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atoma} key={i}
                                                                            style={{
                                                                                backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`,

                                                                            }}></div>)}
                        </div>
                        <p className={styles.code}>grid-auto-flow: column;
                        </p>
                    </div>
                </div>
                <div className={styles.sections}>
                    <div className={styles.blocks}>
                        <div className={styles.grid}
                             style={{
                                 gridAutoFlow: "row",
                                 gridTemplateRows: 'auto auto auto',
                                 gridTemplateColumns: 'auto auto auto'
                             }}>
                            <div className={styles.atom}
                                 style={{
                                     backgroundColor: `rgba(255, 241, 108, ${1 - 0.07})`,
                                     gridColumn: "auto/span 2"
                                 }}>
                            </div>
                            <div className={styles.atom}
                                 style={{
                                     backgroundColor: `rgba(255, 241, 108, ${1 - 0.14})`,
                                     gridColumn: "auto/span 2"
                                 }}>
                            </div>
                            <div className={styles.atom}
                                 style={{
                                     backgroundColor: `rgba(255, 241, 108, ${1 - 0.21})`,
                                     gridColumn: "auto/span 1"
                                 }}>
                            </div>
                            <div className={styles.atom}
                                 style={{
                                     backgroundColor: `rgba(255, 241, 108, ${1 - 0.28})`,
                                     gridColumn: "auto/span 1"
                                 }}>
                            </div>
                            <div className={styles.atom}
                                 style={{
                                     backgroundColor: `rgba(255, 241, 108, ${1 - 0.35})`,
                                     gridColumn: "auto/span 1"
                                 }}>
                            </div>
                        </div>
                        <p className={styles.code}>grid-auto-flow: row;
                        </p>
                    </div>
                </div>
                <div className={styles.sections}>
                    <div className={styles.blocks}>
                        <div className={styles.grid}
                             style={{
                                 gridAutoFlow: "row dense",
                                 gridTemplateRows: 'auto auto auto',
                                 gridTemplateColumns: 'auto auto auto'
                             }}>
                            <div className={styles.atom}
                                 style={{
                                     backgroundColor: `rgba(255, 241, 108, ${1 - 0.07})`,
                                     gridColumn: "auto/span 2"
                                 }}>
                            </div>
                            <div className={styles.atom}
                                 style={{
                                     backgroundColor: `rgba(255, 241, 108, ${1 - 0.14})`,
                                     gridColumn: "auto/span 2"
                                 }}>
                            </div>
                            <div className={styles.atom}
                                 style={{
                                     backgroundColor: `rgba(255, 241, 108, ${1 - 0.21})`,
                                     gridColumn: "auto/span 1"
                                 }}>
                            </div>
                            <div className={styles.atom}
                                 style={{
                                     backgroundColor: `rgba(255, 241, 108, ${1 - 0.28})`,
                                     gridColumn: "auto/span 1"
                                 }}>
                            </div>
                            <div className={styles.atom}
                                 style={{
                                     backgroundColor: `rgba(255, 241, 108, ${1 - 0.35})`,
                                     gridColumn: "auto/span 1"
                                 }}>
                            </div>
                        </div>
                        <p className={styles.code}>grid-auto-flow: row dense;<Tooltip closeDelay={500} hasArrow  label='“dense”会尝试用后续的小元素填充网格中的空位，这可能导致元素出现乱序' fontSize='md'>
                            <QuestionOutlineIcon />
                        </Tooltip>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridAutoFlow;