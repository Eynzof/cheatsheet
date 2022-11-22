
import './globals.css';
// @ts-ignore
export default function Layout({ children }) {
    return (
        <html lang="en">
        <head>
            <title>Cheatsheet</title>
        </head>
        <body>
        {children}
        </body>
        </html>)
}