import React from 'react';
import styles from "../../../styles/grid.module.css";

const GridDisplay = () => {
    return (
        <div>
            <div className={styles.set}>
                <div className={styles.header}>grid</div>
                <div className={styles.lore}>
                    <p>Defines the rows and columns of the grid.</p>
                </div>
                <div className={styles.sections}>
                    <div className={styles.blocks}>
                        <div className={styles.grid}
                             style={{
                                 gridTemplateColumns: '12px 12px 12px',
                                 gridTemplateRows: '12px 12px 12px',
                             }}>
                            {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                            style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`}}></div>)}
                        </div>
                        <p className={styles.header}>display: grid;
                        </p>
                    </div>
                </div>
                <div className={styles.sections}>
                    <div className={styles.blocks} >
                        <p
                            style={{borderBottom: '1px solid #aaa'}}
                            className={styles.desc}>默认情况下 grid 是块级元素
                        </p>
                    </div>
                </div>
                <div className={styles.sections}>
                    <div className={styles.blocks}>
                        <div className={styles.grid}
                             style={{
                                 gridTemplateColumns: '12px 12px 12px',
                                 gridTemplateRows: '12px 12px 12px',
                             }}>
                            {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                            style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`}}></div>)}
                        </div>
                        <div className={styles.grid}
                             style={{
                                 gridTemplateColumns: '12px 12px 12px',
                                 gridTemplateRows: '12px 12px 12px',
                             }}>
                            {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                            style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`}}></div>)}
                        </div>
                        <p className={styles.header}>display: grid;
                        </p>
                    </div>
                </div>
                <div className={styles.sections}>
                    <div className={styles.blocks}>
                        <p
                            style={{borderBottom: '1px solid #aaa'}}
                            className={styles.desc}>改为行内元素
                        </p>
                    </div>
                </div>
                <div className={styles.sections}>
                    <div className={styles.blocks}>
                        <div className={styles.grid}
                             style={{
                                 gridTemplateColumns: '12px 12px 12px',
                                 gridTemplateRows: '12px 12px 12px',
                             }}>
                            {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                            style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`}}></div>)}
                        </div>
                        <p className={styles.header}>display: inline-grid;
                        </p>
                    </div>
                </div>
                <div className={styles.sections}>
                    <div className={styles.blocks}>
                        <p
                            className={styles.desc}
                           style={{borderBottom: '1px solid #aaa'}}>详见 <a href="https://ishadeed.com/article/learn-css-subgrid/">Learn CSS Subgrid - Ahmad Shadeed</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridDisplay;