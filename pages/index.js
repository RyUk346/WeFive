import Image from "next/image";
import localFont from "next/font/local";
import Product from "./main/product";
import Home from "./main/home";
import Offer from "./main/offer";
import Summer from "./main/summer";
import NavBar from "./layout/navbar";
import Footer from "./layout/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function App() {
  return (
    <>
      <div className="font-manrope">
        <div className="sticky top-0 z-50">
          <NavBar />
        </div>
        <div id="home">
          <Home />
        </div>
        <div id="products">
          <Product />
        </div>

        <Offer />
        <div id="deals">
          <Summer />
        </div>

        <Footer />
      </div>
    </>
  );
}
