import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { Specs } from "@/components/sections/specs";
import { Story } from "@/components/sections/story";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Specs />
        <Story />
      </main>
      <Footer />
    </div>
  );
}
