import styles from "./page.module.css";
import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import Products from "./components/Products"
import Carousel1 from "./components/demo/Carousel1"
import Carousel2 from "./components/demo/Carousel2"
// import Carousel3 from "./components/demo/Carousel3"
import Reviews from "./components/Reviews"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  const imagesSet1 = [
    "ferrari.jpg",
    "download.jpg"
];
  const imagesSet2 = [
    "lambo.jpg",
    "porsche.jpg"
  ]
  return (
    <main>
      <Navbar />
      <Landing />
      <Products />
      <Carousel1 images={imagesSet1} />
      <Carousel2 images={imagesSet2} />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
