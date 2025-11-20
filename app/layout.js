import { Poppins } from "next/font/google";
import "./globals.css";
import { HomeMeta } from "@/components/meta-tags";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = HomeMeta;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
