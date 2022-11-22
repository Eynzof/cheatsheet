import React from 'react';
import PropTypes from 'prop-types';
import styles from "./grid.module.css";
import Cube from "../../stories/Cube/Cube";

// @ts-ignore
function Page() {
    return (
        <div className={styles.main}>
            <header className={styles.header}>Grid</header>
            <div className={styles.sections}>
                <Cube/>
            </div>
        </div>
    );
};

Page.propTypes = {

};

export default Page;