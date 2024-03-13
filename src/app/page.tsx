import styles from "./page.module.css";
import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import Contact from "./components/Contact"
import "./page.module.css"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <Contact />
    </main>
  );
}
