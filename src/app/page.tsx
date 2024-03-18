import styles from "./page.module.css";
import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import Products from "./components/Products"
import Reviews from "./components/Reviews"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./page.module.css"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <Products />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
