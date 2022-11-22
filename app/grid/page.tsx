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