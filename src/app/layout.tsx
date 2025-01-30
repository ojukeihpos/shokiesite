import type { Metadata } from "next";
import { Background as DesktopBackground } from "./Background";
import "./globals.css";
import { Title } from "./Title";
import Image from "next/image";
import { Header } from "./header";
import localFont from 'next/font/local'
import { List } from "./List";

const acesFont = localFont({ src: './ACES07_Regular.otf' })

const pagesList = [
  {
    id: 0,
    text: "HOME",
    page: "/"
  },
  {
    id: 1,
    text: "PROFESSIONAL",
    page: "professional"
  },
  /*{
    id: 2,
    text: "PROJECTS",
    page: "projects"
  },*/
  {
    id: 3,
    text: "PERSONAL",
    page: "personal"
  },
]

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
    <html lang="en" className={acesFont.className + " text-[18px] scroll-smooth"}>
      <head>
        <script type="module" src="https://cdn.jsdelivr.net/npm/bluesky-profile-feed-embed@^1.0.0/+esm" async></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bluesky-profile-feed-embed@^1.0.0/dist/core.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bluesky-profile-feed-embed@^1.0.0/themes/light.min.css" media="(prefers-color-scheme: light)" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bluesky-profile-feed-embed@^1.0.0/themes/dim.min.css" media="(prefers-color-scheme: dark)" />
      </head>
      <body>

        {/* Mobile */}

        <div id="mobile-component" className="lg:hidden">
          <Header pages={pagesList} />
          {children}
        </div>

        {/* Mobile */}
        {/* ===================================== */}
        {/* Desktop */}
        <div id="desktop-component" className="hidden lg:inline">
          <DesktopBackground />
          <div id="shoka__name">
            <Title />
          </div>
          <div id="shoka__frame" />
          <div className="shoka__forward-vents" />
          <List pages={pagesList} />
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
