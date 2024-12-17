import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Headline from "./components/headline";
import Customize from "./components/customize";
import OurSponsor from "./components/ourSponsor";
import Footer from "./components/footer";
import Extension from "./components/extension";
import EveryWhere from "./components/everywhere";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Headline />
      <Extension />
      <Customize />
      <EveryWhere />
      <OurSponsor />
      <Footer />
    </div>
  );
}
