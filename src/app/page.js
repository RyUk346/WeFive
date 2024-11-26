import Image from "next/image";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Product from "./components/product";
import Offer from "./components/offer";
import Summer from "./components/summer";
import Footer from "./components/footer";
import ViewProduct from "./components/viewProduct";

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
        <Product />
        <Offer />
        <div id="deals">
          <Summer />
        </div>

        <ViewProduct />
        <Footer />
      </div>
    </>
  );
}
