import React from 'react';
import styles from "../../styles/grid.module.css";

import {GridBlock} from "./GridBlock";

// @ts-ignore
function AlignContent() {
    return (
        <div className={styles.set}>
            <div className={styles.header}>align-content</div>
            <div className={styles.lore}>
                <p>将网格内的元素视为整体纵向排列</p>
            </div>
            <div className={styles.sections}>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', alignContent: 'start'}}>
                        {GridBlock}
                    </div>
                    <p className={styles.code}>align-content: start;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', alignContent: 'end'}}>
                        {GridBlock}
                    </div>
                    <p className={styles.code}>align-content: end;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', alignContent: 'center'}}>
                        {GridBlock}
                    </div>
                    <p className={styles.code}>align-content: center;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', alignContent: 'stretch'}}>
                        {GridBlock}
                    </div>
                    <p className={styles.code}>align-content: stretch;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', alignContent: 'space-around'}}>
                        {GridBlock}
                    </div>
                    <p className={styles.code}>align-content: space-around;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', alignContent: 'space-between'}}>
                        {GridBlock}
                    </div>
                    <p className={styles.code}>align-content: space-between;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', alignContent: 'space-evenly'}}>
                        {GridBlock}
                    </div>
                    <p className={styles.code}>align-content: space-evenly;
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AlignContent;