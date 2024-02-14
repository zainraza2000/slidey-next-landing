import CraftSection from "@/components/Craft/CraftSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/HeroSection";
import IdeaSection from "@/components/IdeaSection";
import ProvenSection from "@/components/Proven/ProvenSection";
import RankingSection from "@/components/RankingSection";
import StorylineSection from "@/components/StorylineSection";
import TestimonialSection from "@/components/Testimonials/TestimonialSection";
import ClientSection from "@/components/client/ClientSection";
import PricingSection from "@/components/pricing/PricingSection";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";
import TwakToComponent from "@/components/shared/TwakToComponent";

export default function Home() {
  return (
    <>
      <TwakToComponent />
      <HeroSection />
      <IdeaSection />
      <ContactUsSection />
      <ClientSection />
      <RankingSection />
      <StorylineSection />
      <ProvenSection />
      <CraftSection />
      {/* <TestimonialSection /> */}
      <PricingSection />
      <FAQ />
      <Footer />
    </>
  );
}
