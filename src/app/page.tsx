import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { ComparisonTable } from "@/components/ComparisonTable";
import { HowItWorksTutorial } from "@/components/HowItWorksTutorial";
import { FAQ } from "@/components/FAQ";
import { CleaningGuide } from "@/components/CleaningGuide";
import { BuyingGuide } from "@/components/BuyingGuide";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackgroundElements } from "@/components/BackgroundElements";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black selection:bg-orange-500/30 overflow-x-hidden">
      <BackgroundElements />
      <Navbar />
      <Hero />
      <BentoGrid />
      <ComparisonTable />
      <HowItWorksTutorial />
      <CleaningGuide />
      <BuyingGuide />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
