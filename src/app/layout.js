import "./globals.css";
import { Inter } from "next/font/google";
// Supports weights 100-900
import "@fontsource-variable/inter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pricing Page",
  description: "Practice project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
