import React from 'react';
import styles from "../../styles/grid.module.css";

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
                        {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})` }}></div>)}
                    </div>
                    <p className={styles.header}>justify-content: start;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', justifyContent: 'end'}}>
                        {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})` }}></div>)}
                    </div>
                    <p className={styles.header}>justify-content: end;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', justifyContent: 'center'}}>
                        {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})` }}></div>)}
                    </div>
                    <p className={styles.header}>justify-content: center;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', justifyContent: 'stretch'}}>
                        {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})` }}></div>)}
                    </div>
                    <p className={styles.header}>justify-content: stretch;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', justifyContent: 'space-around'}}>
                        {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})` }}></div>)}
                    </div>
                    <p className={styles.header}>justify-content: space-around;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', justifyContent: 'space-between'}}>
                        {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})` }}></div>)}
                    </div>
                    <p className={styles.header}>justify-content: space-between;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '7px 7px 7px', gridTemplateRows: '7px 7px 7px', justifyContent: 'space-evenly'}}>
                        {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})` }}></div>)}
                    </div>
                    <p className={styles.header}>justify-content: space-evenly;
                    </p>
                </div>
            </div>
        </div>
    );
}

export default JustifyItem;