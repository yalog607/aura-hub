import { LazyMotion, domAnimation } from "framer-motion";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { Newsletter } from "@/components/sections/newsletter";
import { RecentlyViewed } from "@/components/sections/recently-viewed";
import { Shop } from "@/components/sections/shop";
import { Specs } from "@/components/sections/specs";
import { Story } from "@/components/sections/story";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LazyMotion features={domAnimation} strict>
          <Features />
          <Specs />
          <Story />
          <Shop />
          <RecentlyViewed />
          <Testimonials />
        </LazyMotion>
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
