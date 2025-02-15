import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import "../Style/globals.css";
import Topbar from "./components/Pages/Topbar";
import Logoweb from "./components/Pages/Logoweb";
import Header from "./components/Pages/Header";
import Footer from "./components/Pages/Footer";
import Seo from "./components/Pages/Seo";

const poppins = Poppins({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  icons: {
    icon: "./blogger.ico",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Seo title="Magazine News" description="Latest news and magazine updates" />
      </head>
      <body className={poppins.className}>
        <Topbar />
        <Logoweb />
        <Header />
        <main className="container mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
