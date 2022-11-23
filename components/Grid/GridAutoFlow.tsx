import React from 'react';
import styles from "../../styles/grid.module.css";
import {Tooltip} from '@chakra-ui/react'
import {QuestionOutlineIcon} from "@chakra-ui/icons";

const GridAutoFlow = () => {
    return (
        <div>
            <div className={styles.set}>
                <div className={styles.header}>grid</div>
                <div className={styles.lore}>
                    <p>由算法自动排列元素</p>
                </div>
                <div className={styles.sections}>
                    <div className={styles.blocks}>
                        <div className={styles.grid}
                             style={{
                                 gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)'
                             }}>
                            {[...Array(9)].map((e, i) => i).map((i) => <div className={styles.atom} key={i}
                                                                            style={{backgroundColor: `rgba(255, 241, 108, ${1 - i * 0.07})`}}></div>)}
                        </div>
                        <p className={styles.code}>display: grid; <Tooltip closeDelay={500}
                                                                           label='默认情况下 grid 是块级元素，一个grid独占一行'
                                                                           fontSize='md'>
                            <QuestionOutlineIcon/>
                        </Tooltip>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridAutoFlow;