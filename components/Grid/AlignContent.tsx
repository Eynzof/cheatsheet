import React from 'react';
import styles from "../../styles/grid.module.css";

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
                        {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})` }}></div>)}
                    </div>
                    <p className={styles.code}>align-content: start;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', alignContent: 'end'}}>
                        {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})` }}></div>)}
                    </div>
                    <p className={styles.code}>align-content: end;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', alignContent: 'center'}}>
                        {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})` }}></div>)}
                    </div>
                    <p className={styles.code}>align-content: center;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', alignContent: 'stretch'}}>
                        {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})` }}></div>)}
                    </div>
                    <p className={styles.code}>align-content: stretch;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', alignContent: 'space-around'}}>
                        {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})` }}></div>)}
                    </div>
                    <p className={styles.code}>align-content: space-around;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', alignContent: 'space-between'}}>
                        {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})` }}></div>)}
                    </div>
                    <p className={styles.code}>align-content: space-between;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', alignContent: 'space-evenly'}}>
                        {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})` }}></div>)}
                    </div>
                    <p className={styles.code}>align-content: space-evenly;
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AlignContent;