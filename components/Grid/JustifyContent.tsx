import React from 'react';
import styles from "../../styles/grid.module.css";
import {GridBlock} from "./GridBlock";

// @ts-ignore
function JustifyItem() {
    return (
        <div className={styles.set}>
            <div className={styles.header}>justify-content</div>
            <div className={styles.lore}>
                <p>将网格内的元素视为整体横向排列</p>
            </div>
            <div className={styles.sections}>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', justifyContent: 'start'}}>
                        {GridBlock}
                    </div>
                    <p className={styles.code}>justify-content: start;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', justifyContent: 'end'}}>
                        {GridBlock}
                    </div>
                    <p className={styles.code}>justify-content: end;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', justifyContent: 'center'}}>
                        {GridBlock}
                    </div>
                    <p className={styles.code}>justify-content: center;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', justifyContent: 'stretch'}}>
                        {GridBlock}
                    </div>
                    <p className={styles.code}>justify-content: stretch;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', justifyContent: 'space-around'}}>
                        {GridBlock}
                    </div>
                    <p className={styles.code}>justify-content: space-around;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', justifyContent: 'space-between'}}>
                        {GridBlock}
                    </div>
                    <p className={styles.code}>justify-content: space-between;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', justifyContent: 'space-evenly'}}>
                        {GridBlock}
                    </div>
                    <p className={styles.code}>justify-content: space-evenly;
                    </p>
                </div>
            </div>
        </div>
    );
}

export default JustifyItem;