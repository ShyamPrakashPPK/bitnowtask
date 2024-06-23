import Hero from "@/components/PageSections/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Section2 from "@/components/PageSections/Section2/page";
import Footer from "@/components/Footbar/Footer";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div>
        <Hero />
        <Section2 />
      </div>
  
      <Footer/>
    </main>
  );
}
