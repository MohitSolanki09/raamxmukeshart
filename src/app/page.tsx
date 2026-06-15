import Hero from "@/src/components/pages/home/Hero";
import BrandMoment from "@/src/components/pages/home/BrandMoment";
import "@/src/components/pages/home/Home.css";
import About from "../components/pages/home/About";
import InventoryPackages from "../components/pages/home/InventoryPackages";
import Connectivity from "../components/pages/home/Connectivity";
import Gallery from "../components/pages/home/Gallery";
import Contact from "../components/pages/home/Contact";
import CommercialRange from "../components/pages/home/CommercialRange";
import ClientsPartnership from "../components/pages/home/ClientsPartnerships";
import Team from "../components/pages/home/Team";
import PageLoader from "../components/common/PageLoader";
import SmoothScroll from "../components/common/SmoothScroller";
import ScrollAnimations from "../components/common/ScrollAnimations";

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <SmoothScroll />
      <PageLoader />
      <Hero />
      <BrandMoment />
      <About />
      <InventoryPackages />
      <Connectivity />
      <CommercialRange />
      <ClientsPartnership />
      <Team />
      <Gallery />
      <Contact />
    </>
  );
}