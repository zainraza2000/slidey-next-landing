import CraftSection from "@/components/Craft/CraftSection";
import FaqSection from "@/components/faq/FaqSection";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/main/HeroSection";
import IdeaSection from "@/components/idea/IdeaSection";
import ProvenSection from "@/components/Proven/ProvenSection";
import RankingSection from "@/components/ranking/RankingSection";
import StorylineSection from "@/components/storyline/StorylineSection";
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
      <ClientSection />
      <RankingSection />
      <StorylineSection />
      <ProvenSection />
      <CraftSection />
      <TestimonialSection />
      <FaqSection />
      <Footer />
    </>
  );
}
