import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <section id="hero" className="mx-auto flex min-h-[60vh] max-w-6xl items-center px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground">Hero Section — sắp hoàn thiện.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
