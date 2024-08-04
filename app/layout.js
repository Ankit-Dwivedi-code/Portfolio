import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ankit Dwivedi - Full Stack Web Developer",
  description: "Welcome to the portfolio of Ankit Dwivedi, showcasing full stack web development skills with MERN stack and Next.js expertise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
