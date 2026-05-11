import type { Metadata } from "next";
import { Background as DesktopBackground } from "./Background";
import "./globals.css";
import { Title } from "./Title";
import Image from "next/image";
import { Header } from "./header";
import localFont from 'next/font/local'
import { List } from "./List";

// Importing specific assets for cleaner reference
import straightVents from './assets/borders/parts_04.svg';

const acesFont = localFont({
  src: './ACES07_Regular.otf',
  display: 'swap', // Ensures text remains visible during font load
})

const pagesList = [
  { id: 0, text: "home", page: "/" },
  { id: 1, text: "software", page: "software" },
  { id: 2, text: "professional", page: "other" }, // Renamed from non-software for a sharper look
  { id: 3, text: "projects", page: "projects" },
  { id: 4, text: "personal", page: "personal" },
]

export const metadata: Metadata = {
  title: "Sophie_EXE",
  description: "Sophie's Personal Portfolio & Engineering Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${acesFont.className} text-[18px] scroll-smooth`}>
      <head>
      </head>
      <body className="antialiased bg-gray-400">

        {/* --- MOBILE VIEW --- */}
        <div id="outer-component" className="lg:hidden flex flex-col min-h-screen">
          <Header pages={pagesList} />
          <main id='page-wrap' className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>

        {/* --- DESKTOP VIEW --- */}
        <div id="desktop-component" className="hidden lg:inline">
          <div id="desktop-component" className="hidden lg:block relative min-h-screen overflow-hidden">
            <div id="leftComponents">
              <DesktopBackground />
              <div id="shoka__name">
                <Title />
              </div>
              <div id="shoka__frame" aria-hidden="true" />
              <div className="shoka__forward-vents" aria-hidden="true" />
              <List pages={pagesList} />
            </div>

            <main id="scroll-root" className="page-content">
              {children}
            </main>

            <footer className="shoka__footer" aria-hidden="true" />
            <Image
              alt=''
              className='parts straight_vents'
              src={straightVents}
              priority
            />
          </div>
        </div>

      </body>
    </html>
  );
}