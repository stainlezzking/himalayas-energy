import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "Himalayas Energy Consult Limited",
  authors: [{ name: "Chukwuebuka Stanley Azuka", url: "https://www.linkedin.com/in/chukwuebukastanley" }],
  developer: "Chukwuebuka Stanley Azuka",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
