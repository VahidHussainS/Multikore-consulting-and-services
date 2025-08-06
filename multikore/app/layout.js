import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Multikore consulting and services",
  description: "Multikore Consulting and Services specializes in Consulting, Recruitment, Event Management, and Real Estate solutions. We deliver expert guidance and reliable services to help your business succeed.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap" rel="stylesheet"/>
      </head>
      <body
       className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-tr from-pink-100 via-yellow-100 via-white to-blue-100`}
      >
        {children}
      </body>
    </html>
  );
}
