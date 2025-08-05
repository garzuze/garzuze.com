import type { Metadata } from "next";
import "./global.css";
import { ThemeProvider } from './components/ThemeProvider';


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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
