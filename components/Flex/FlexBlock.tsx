import styles from "../../styles/grid.module.css";
import React from "react";

export const FlexBlock = [...Array(6)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(33, 255, 214, ${1 - i * 0.07})`, minWidth: '6px', minHeight: '6px'}}></div>)

export const FlexBlockTen = [...Array(10)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(33, 255, 214, ${1 - i * 0.07})`, minWidth: '6px', minHeight: '4px'}}></div>)
export const FlexBlockThree = [...Array(3)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                            style={{backgroundColor: `rgba(33, 255, 214, ${1 - i * 0.07})`, minWidth: '6px', minHeight: '6px'}}></div>)


interface FlexWrapperProps {
    children?: React.ReactNode
}

export const FlexWrapper = (props:FlexWrapperProps) => {
    return <div className={styles.sections}>
        <div className={styles.blocks}>
            {props.children}
        </div>
    </div>
}