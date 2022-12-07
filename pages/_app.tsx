// `pages/_app.js`
import '../src/styles/globals.css';

// @ts-ignore
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}