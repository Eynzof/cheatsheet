import React from 'react';
import styles from "../../styles/grid.module.css";

const Line = ({keys, lore}: any) => {

    let shortcut = <></>;
    const l = keys.length
    if (l == 1) {
        shortcut = <kbd className="kbc-button kbc-button-xxs">{keys[0]}</kbd>
    } else if (l == 2) {
        shortcut = <><kbd className="kbc-button kbc-button-xxs">{keys[0]}</kbd> + <kbd
            className="kbc-button kbc-button-xxs">{keys[1]}</kbd></>
    } else if (l==3) {
        shortcut = <><kbd className="kbc-button kbc-button-xxs">{keys[0]}</kbd> + <kbd
            className="kbc-button kbc-button-xxs">{keys[1]}</kbd> + <kbd
            className="kbc-button kbc-button-xxs">{keys[2]}</kbd></>
    } else if(l == 4) {
        shortcut = <><kbd className="kbc-button kbc-button-xxs">{keys[0]}</kbd> + <kbd
            className="kbc-button kbc-button-xxs">{keys[1]}</kbd> + <kbd
            className="kbc-button kbc-button-xxs">{keys[2]}</kbd> + <kbd
            className="kbc-button kbc-button-xxs">{keys[3]}</kbd></>
    }



    return (
        <div className={styles.sections} style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            alignItems: 'center',
        }}>
            <span>
                {shortcut}
            </span>
            <p style={{display: 'inline-block', fontSize: 16}}>{lore}</p>
        </div>
    );
};

export default Line;
