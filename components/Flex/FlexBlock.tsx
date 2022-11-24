import styles from "../../styles/grid.module.css";
import React from "react";

export const FlexBlock = [...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(33, 255, 214, ${1 - i * 0.07})`, minWidth: '4px'}}></div>)