import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import FontFaces from "./components/FontFaces/FontFaces";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Revellison",
  description: "Revellison about page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <FontFaces />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
