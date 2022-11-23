import React from 'react';
import styles from "../styles/grid.module.css";
import GridTemplate from "../components/Grid/GridTemplate/GridTemplate";
import GridGap from "../components/Grid/GridGap/GridGap";
import Link from "next/link";
import JustifyItem from "../components/Grid/JustifyItem/JustifyItem";
import AlignItem from "../components/Grid/AlignItem/AlignItem";
import JustifyContent from "../components/Grid/JustifyContent/JustifyContent";
import AlignContent from "../components/Grid/AlignContent/AlignContent";
import GridDisplay from '../components/Grid/Grid/GridDisplay';
function Grid() {
    return (
        <>
            <h1 className={styles.title}><Link href={"/"} style={{fontSize:"32px"}}>&lt; </Link>GRID</h1>
            <div className={styles.main}>
                <h2>Container</h2>
                <div className={styles.sets}>
                    <GridTemplate/>
                    <GridGap/>
                    <JustifyItem/>
                    <AlignItem/>
                    <JustifyContent/>
                    <AlignContent/>
                    <GridDisplay />
                </div>
            </div></>
    );
};

Grid.propTypes = {};

export default Grid;