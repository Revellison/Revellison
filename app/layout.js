import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";


const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex',
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: "Revellison",
  description: "Revellison about page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <body className={``}>
        <Header />
        {children}
      </body>
    </html>
  );
}
