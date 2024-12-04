import type { Metadata } from "next";
import { Background as DesktopBackground } from "./Background";
import "./globals.css";
import { Title } from "./Title";
import dynamic from "next/dynamic";
import Image from "next/image";
import Header from "./header";
import localFont from 'next/font/local'

const acesFont = localFont({ src: './ACES07_Regular.otf' })

const List = dynamic(() => import('./List'))

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
    <html lang="en" className={acesFont.className + " text-[18px]"}>
      <body>

        {/* Mobile */}

        <div id="mobile-component" className="lg:hidden">
          <Header />
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
