import Link from "next/link";
import Head from 'next/head'
import styles from '../styles/home.module.css'

export default function Page() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Enzo Cheatsheet</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    <a href="https://github.com/Eynzof">Enzo</a>&apos;s Cheatsheet
                </h1>

                <div className={styles.grid}>
                    <Link href='./grid' className={styles.card}><h2>Grid &rarr;</h2>
                        <p>Learn more about grid display</p>
                    </Link>

                    <Link href='./flex' className={styles.card}><h2>Flex &rarr;</h2>
                        <p>Learn more about flex display</p>
                    </Link>

                    {/*<Link href='./grid' className={styles.card}><h2>Shortcuts &rarr;</h2>*/}
                    {/*    <p>Learn more about flex display</p>*/}
                    {/*</Link>*/}

                    {/*<Link href='./grid' className={styles.card}><h2>Regex &rarr;</h2>*/}
                    {/*    <p>Learn more about flex display</p>*/}
                    {/*</Link>*/}
                </div>
            </main>
        </div>
    )
}
