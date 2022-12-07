import React from 'react';
import styles from "../../styles/grid.module.css";
import { GridBlock } from "./GridBlock";

// @ts-ignore
function GridTemplate() {
    return (
        <div className={styles.set}>
            <div className={styles.header}>grid-template</div>
            <div className={styles.lore}>
                <p>定义网格的行数和列数</p>
            </div>
            <div className={styles.sections}>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '12px 12px 12px', gridTemplateRows: '12px 12px 12px'}}>
                        {GridBlock}
                    </div>
                    <p className={styles.code}>grid-template-columns: 12px 12px 12px;<br/>grid-template-rows:
                        12px 12px 12px;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)'}}>
                        {GridBlock}
                    </div>
                    <p className={styles.code}>grid-template-columns: repeat(3, 1fr);<br/>grid-template-columns:
                        repeat(3, 1fr)
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '8px auto 8px', gridTemplateRows: '8px auto 12px'}}>
                        {GridBlock}
                    </div>
                    <p className={styles.code}>grid-template-columns: 8px auto 8px;<br/>
                        grid-template-rows: 8px auto 12px;
                    </p>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.grid}
                         style={{gridTemplateColumns: '20% 20% auto', gridTemplateRows: '20% auto 20%'}}>
                        {GridBlock}
                    </div>
                    <p className={styles.code}>grid-template-columns: 20% 20% auto;<br/>
                        grid-template-rows: 20% auto 20%;
                    </p>
                </div>
            </div>
        </div>
    );
}

export default GridTemplate;