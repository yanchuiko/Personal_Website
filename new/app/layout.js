import "./globals.css";
import Head from 'next/head'

export const metadata = {
  title: "Yan Chuiko",
  description: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/ico" href="./favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
