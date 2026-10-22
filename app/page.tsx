import { About } from "@/components/About";
import { Destinations } from "@/components/Destinations";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Inspiration } from "@/components/Inspiration";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Destinations />
        <Inspiration />
        <WhyChooseUs />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
