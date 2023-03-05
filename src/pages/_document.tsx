import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
                <div id="note-modal"></div>
            </body>
        </Html>
    );
}