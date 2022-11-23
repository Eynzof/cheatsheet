import React from 'react';
import styles from "../../styles/grid.module.css";

// @ts-ignore
function JustifyItem() {
    return (
        <div className={styles.set}>
            <div className={styles.header}>align-item</div>
            <div className={styles.lore}>
                <p>将网格内的元素纵向排列</p>
            </div>
            <div className={styles.sections}>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '12px 12px 12px', gridTemplateRows: '12px 12px 12px', alignItems: 'start'}}>
                        {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`, minHeight:'5px'}}></div>)}
                    </div>
                    <p className={styles.header}>justify-item: start;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '12px 12px 12px', gridTemplateRows: '12px 12px 12px', alignItems: 'end'}}>
                        {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`, minHeight:'5px'}}></div>)}
                    </div>
                    <p className={styles.header}>justify-item: end;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '12px 12px 12px', gridTemplateRows: '12px 12px 12px', alignItems: 'center'}}>
                        {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`, minHeight:'5px'}}></div>)}
                    </div>
                    <p className={styles.header}>justify-item: center;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '12px 12px 12px', gridTemplateRows: '12px 12px 12px', alignItems: 'stretch'}}>
                        {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`}}></div>)}
                    </div>
                    <p className={styles.header}>align-item: stretch;
                    </p>
                </div>
            </div>
        </div>
    );
}

export default JustifyItem;