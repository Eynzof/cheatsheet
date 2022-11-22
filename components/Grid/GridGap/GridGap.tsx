import React from 'react';
import styles from "../../../styles/grid.module.css";

function GridGap() {
    return (
        <div className={styles.set}>
            <div className={styles.header}>grid-gap</div>
            <div className={styles.lore}>
                <p>Specifies the size of column and row gutters.</p>
            </div>
            <div className={styles.sections}>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', gridGap: '1px 9px'}}>
                        {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`}}></div>)}
                    </div>
                    <p className={styles.header}>grid-row-gap: 1px;<br/>grid-column-gap: 9px;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', gridGap: '1px 9px'}}>
                        {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`}}></div>)}
                    </div>
                    <p className={styles.header}>grid-gap: 1px 9px;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', gridGap: '6px'}}>
                        {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                        style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`}}></div>)}
                    </div>
                    <p className={styles.header}>grid-gap: 6px;
                    </p>
                </div>
            </div>
        </div>
    );
}

export default GridGap;