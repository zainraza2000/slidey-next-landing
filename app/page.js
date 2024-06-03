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
import VideoSection from "@/components/video/VideoSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IdeaSection />
      <ClientSection />
      <RankingSection />
      <VideoSection />
      <StorylineSection />
      <ProvenSection />
      <CraftSection />
      <TestimonialSection />
      <FaqSection />
      <Footer />
    </>
  );
}
