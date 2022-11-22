import React from 'react';
import styles from "./grid.module.css";
import GridTemplate from "../../components/Grid/GridTemplate/GridTemplate";

// @ts-ignore
function Page() {
    return (
        <div className={styles.main}>
            <h1>Container</h1>
            <div className={styles.sets}>
                <GridTemplate/>
                <div className={styles.set}>
                    <div className={styles.header}>grid-template</div>
                    <div className={styles.lore}>
                        <p>Defines the rows and columns of the grid.</p>
                    </div>
                    <div className={styles.sections}>
                        <div className={styles.blocks}>
                            <div className={styles.grid}
                                 style={{gridTemplateColumns: '12px 12px 12px', gridTemplateRows: '12px 12px 12px'}}>
                                {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                                style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`}}></div>)}
                            </div>
                            <p className={styles.header}>grid-template-columns: 12px 12px 12px;<br/>grid-template-rows:
                                12px 12px 12px;
                            </p>
                        </div>
                        <div className={styles.blocks}>
                            <div className={styles.grid}
                                 style={{gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)'}}>
                                {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                                style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`}}></div>)}
                            </div>
                            <p className={styles.header}>grid-template-columns: repeat(3, 1fr);<br/>grid-template-columns:
                                repeat(3, 1fr)
                            </p>
                        </div>
                        <div className={styles.blocks}>
                            <div className={styles.grid}
                                 style={{gridTemplateColumns: '8px auto 8px', gridTemplateRows: '8px auto 12px'}}>
                                {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                                style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`}}></div>)}
                            </div>
                            <p className={styles.header}>grid-template-columns: 8px auto 8px;<br/>
                                grid-template-rows: 8px auto 12px;
                            </p>
                        </div>
                        <div className={styles.blocks}>
                            <div className={styles.grid}
                                 style={{gridTemplateColumns: '20% 20% auto', gridTemplateRows: '20% auto 20%'}}>
                                {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                                style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`}}></div>)}
                            </div>
                            <p className={styles.header}>grid-template-columns: 20% 20% auto;<br/>
                                grid-template-rows: 20% auto 20%;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Page.propTypes = {};

export default Page;