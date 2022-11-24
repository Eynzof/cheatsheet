import React from 'react';
import styles from "../../styles/flex.module.css";
import {FlexWrapper} from "./FlexBlock";

const FlexAxis = () => {

    const title = "Axis"
    const lore = "关于主轴与交叉轴"

    return (
        <div>
            <div className={styles.set}>
                <div className={styles.header}>{title}</div>
                <div className={styles.lore}>
                    <p>{lore}</p>
                </div>
                <FlexWrapper>
                    <div className={styles.axis}>
                        <div className={styles.atom} style={{backgroundColor: 'rgba(33,255,214,0.5)', gridColumn: '3/4', border: "none"}}></div>
                        <div className={styles.atom} style={{backgroundColor: 'rgba(33,255,214,0.5)', gridColumn: '3/4', border: "none"}}></div>
                        <div className={styles.atom} style={{backgroundColor: 'rgba(33,255,214,1)', gridColumn: '1/6', border: "none"}}></div>
                        <div className={styles.atom} style={{backgroundColor: 'rgba(33,255,214,0.5)', gridColumn: '3/4', border: "none"}}></div>
                        <div className={styles.atom} style={{backgroundColor: 'rgba(33,255,214,0.5)', gridColumn: '3/4', border: "none"}}></div>
                    </div>
                    <p className={styles.code}>flex-direction: row;<br/>main axis is row direction<br/> cross axis is column direction </p>
                </FlexWrapper>
                <FlexWrapper>
                    <div className={styles.axis} style={{transform: 'rotate(90deg)'}}>
                        <div className={styles.atom} style={{backgroundColor: 'rgba(33,255,214,0.5)', gridColumn: '3/4', border: "none"}}></div>
                        <div className={styles.atom} style={{backgroundColor: 'rgba(33,255,214,0.5)', gridColumn: '3/4', border: "none"}}></div>
                        <div className={styles.atom} style={{backgroundColor: 'rgba(33,255,214,1)', gridColumn: '1/6', border: "none"}}></div>
                        <div className={styles.atom} style={{backgroundColor: 'rgba(33,255,214,0.5)', gridColumn: '3/4', border: "none"}}></div>
                        <div className={styles.atom} style={{backgroundColor: 'rgba(33,255,214,0.5)', gridColumn: '3/4', border: "none"}}></div>
                    </div>
                    <p className={styles.code}>flex-direction: column;<br/>main axis is column direction<br/> cross axis is row direction </p>
                </FlexWrapper>
            </div>
        </div>
    );
};


export default FlexAxis;