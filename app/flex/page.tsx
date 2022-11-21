import styles from './flex.module.css';

export default function page() {
    return(<div className={styles.main}>
        <header className={styles.header}>Flex</header>
        <div className={styles.sections}>
            <section className={styles.section}>1</section>
            <section className={styles.section}>2</section>
            <section className={styles.section}>3</section>
            <section className={styles.section}>4</section>
            <section className={styles.section}>5</section>
            <section className={styles.section}>6</section>
        </div>
    </div>)
}