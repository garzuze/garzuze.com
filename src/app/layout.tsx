import type { Metadata } from "next";
import "./global.css";
import { ThemeProvider } from './components/ThemeProvider';
import localFont from 'next/font/local';

const sf = localFont({
  src: [
    {
      path: '../../public/fonts/sanfranciscodisplay-regular-webfont.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sanfranciscodisplay-bold-webfont.woff',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-sf',
})

export const metadata: Metadata = {
  title: "garzuze - portfolio",
  description: "Fullstack Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={sf.className}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
