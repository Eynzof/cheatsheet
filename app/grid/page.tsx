import React from 'react';
import PropTypes from 'prop-types';
import styles from "./grid.module.css";
import Cube from "../../stories/Cube/Cube";

// @ts-ignore
function Page() {
    return (
        <div className={styles.main}>
            <div className={styles.sets}>
                <div className={styles.set}>
                    <div className={styles.header}>grid-template</div>
                    <div className={styles.lore}>
                        <p>Defines the rows and columns of the grid.</p>
                    </div>
                    <div className={styles.sections}>
                        <Cube/>
                        <Cube/>
                        <Cube/>
                        <Cube/>
                    </div>
                </div>
                <div className={styles.set}>
                    <div className={styles.header}>grid-template</div>
                    <div className={styles.lore}>
                        <p>Defines the rows and columns of the grid.</p>
                    </div>
                    <div className={styles.sections}>
                        <div className="atom-blocks">
                            <div className="atoms">
                                {[...Array(9)].map((e, i) => i).map((i) => <div className="atom" key={i} style={{backgroundColor: `rgba(255, 241, 108, ${1-i*0.07})`}}></div>)}
                            </div>
                            <p className="atoms-heading">grid-template-columns: 12px 12px 12px;<br/>grid-template-rows: 12px 12px 12px;
                            </p>
                        </div>
                        <div className="atom-blocks">
                            <div className="atoms">
                                {[...Array(9)].map((e, i) => i).map((i) => <div className="atom" key={i} style={{backgroundColor: `rgba(255, 241, 108, ${1-i*0.07})`}}></div>)}
                            </div>
                            <p className="atoms-heading">grid-template-columns: repeat(3, 1fr);<br/>grid-template-rows: repeat(3, 1fr);
                            </p>
                        </div>
                        <Cube/>
                        <Cube/>
                    </div>
                </div>
                <div className={styles.set}>
                    <div className={styles.header}>grid-template</div>
                    <div className={styles.lore}>
                        <p>Defines the rows and columns of the grid.</p>
                    </div>
                    <div className={styles.sections}>
                        <Cube/>
                        <Cube/>
                        <Cube/>
                        <Cube/>
                    </div>
                </div>
                <div className={styles.set}>
                    <div className={styles.header}>grid-template</div>
                    <div className={styles.lore}>
                        <p>Defines the rows and columns of the grid.</p>
                    </div>
                    <div className={styles.sections}>
                        <Cube/>
                        <Cube/>
                        <Cube/>
                        <Cube/>
                    </div>
                </div>
            </div>
        </div>
    );
};

Page.propTypes = {

};

export default Page;