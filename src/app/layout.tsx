import type { Metadata } from "next";
import { Background as DesktopBackground } from "./Background";
import "./globals.css";
import { Title } from "./Title";
import dynamic from "next/dynamic";
import Image from "next/image";
import Header from "./header";
import localFont from 'next/font/local'
import Link from "next/link";

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
      <head>
        <script type="module" src="https://cdn.jsdelivr.net/npm/bluesky-profile-feed-embed@^1.0.0/+esm" async></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bluesky-profile-feed-embed@^1.0.0/dist/core.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bluesky-profile-feed-embed@^1.0.0/themes/light.min.css" media="(prefers-color-scheme: light)" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bluesky-profile-feed-embed@^1.0.0/themes/dim.min.css" media="(prefers-color-scheme: dark)" />
      </head>
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
            <Link prefetch href="/">
              <Title text='Shoka' />
            </Link>
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
