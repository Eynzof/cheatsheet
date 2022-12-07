import React from 'react';
import styles from "../../styles/grid.module.css";
import { GridBlock } from "./GridBlock";

function GridGap() {
    return (
        <div className={styles.set}>
            <div className={styles.header}>grid-gap</div>
            <div className={styles.lore}>
                <p>指定网格行列间的间隙</p>
            </div>
            <div className={styles.sections}>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', gridGap: '1px 9px'}}>
                        {GridBlock}
                    </div>
                    <p className={styles.code}>grid-row-gap: 1px;<br/>grid-column-gap: 9px;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', gridGap: '1px 9px'}}>
                        {GridBlock}
                    </div>
                    <p className={styles.code}>grid-gap: 1px 9px;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', gridGap: '6px'}}>
                        {GridBlock}
                    </div>
                    <p className={styles.code}>grid-gap: 6px;
                    </p>
                </div>
            </div>
        </div>
    );
}

export default GridGap;