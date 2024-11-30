import type { Metadata } from "next";
import { Background as DesktopBackground } from "./Background";
import { M_PLUS_1 } from "next/font/google";
import "./globals.css";
import { Title } from "./Title";
import dynamic from "next/dynamic";
import Image from "next/image";

const List = dynamic(() => import('./List'))
const mplus1 = M_PLUS_1({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoka's Hub",
  description: "Shoka's personal hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
      </head>
      <body className={mplus1.className}>

        {/* Mobile */}

        <div id="mobile-component" className="lg:hidden">
          {children}
        </div>

        {/* Mobile */}
        {/* ===================================== */}
        {/* Desktop */}
        <div id="desktop-component" className="hidden lg:inline">
          <DesktopBackground />
          <div id="shoka__name">
            <a href="/">
              <Title text='Shoka' />
            </a>
          </div>
          <div id="shoka__frame" />
          <div className="shoka__forward-vents" />
          <List />
          {children}
          <footer className="shoka__footer">
            <Image alt='' className='parts straight_vents' src={require('./assets/borders/parts_04.svg').default} />
          </footer>
        </div>

        {/* Desktop */}

      </body>
    </html >
  );
}
