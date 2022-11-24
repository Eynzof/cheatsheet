import styles from "../../styles/grid.module.css";
import React from "react";

export const GridBlock = [...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                  style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`}}></div>)