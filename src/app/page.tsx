import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-[100vh]"></div>
      <div className="h-[100vh]"></div>
      <div></div>
    </main>
  );
}
