import React from 'react';
import styles from "../styles/grid.module.css";
import GridTemplate from "../components/Grid/GridTemplate";
import GridGap from "../components/Grid/GridGap";
import Link from "next/link";
import JustifyItem from "../components/Grid/JustifyItem";
import AlignItem from "../components/Grid/AlignItem";
import JustifyContent from "../components/Grid/JustifyContent";
import AlignContent from "../components/Grid/AlignContent";
import GridDisplay from '../components/Grid/GridDisplay';
function Grid() {
    return (
        <>
            <h1 className={styles.title}><Link href={"/"} style={{fontSize:"32px"}}>&lt; </Link>GRID</h1>
            <div className={styles.main}>
                <h2>Container</h2>
                <div className={styles.sets}>
                    <GridDisplay />
                    <GridTemplate/>

                    <JustifyItem/>
                    <AlignItem/>
                    <JustifyContent/>
                    <AlignContent/>
                    <GridGap/>
                </div>
            </div></>
    );
};

Grid.propTypes = {};

export default Grid;