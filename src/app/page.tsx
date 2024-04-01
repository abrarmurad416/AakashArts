import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import Products from "./components/Products"
import Carousel1 from "./components/demo/Carousel1"
import Carousel2 from "./components/demo/Carousel2"
import Carousel3 from "./components/demo/Carousel3"
import Reviews from "./components/Reviews"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  const imagesSet1 = [
    "/textile/Messi.png",
    "/textile/warriors.png",
    "/textile/barbeque.png"

  ];
  const imagesSet2 = [
    "/custom/raptors.png",
    "/custom/airmax90.png",
    "/custom/airforce.png"
  ];
  const imagesSet3 = [
    "/art/car.png",
    "/art/space.png",
    "/art/dbz.png"
  ];
  return (
    <main>
      <Navbar />
      <Landing />
      <Products />
      <Carousel1 images={imagesSet1} />
      <Carousel2 images={imagesSet2} />
      <Carousel3 images={imagesSet3} />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
