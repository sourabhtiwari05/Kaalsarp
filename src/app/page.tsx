import { Problems } from "@/components/sections/Problems";
import { PanditBio } from "@/components/sections/PanditBio";
import { Services } from "@/components/sections/Services";
import { VideoGallery } from "@/components/sections/VideoGallery";
import { Benefits } from "@/components/sections/Benefits";
import { BookingSteps } from "@/components/sections/BookingSteps";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { MainHero } from "@/components/sections/MainHero";
import { WhyUjjain } from "@/components/sections/WhyUjjain";
import { Reviews } from "@/components/sections/Reviews";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-hidden">
      <MainHero />
      <WhyUjjain />
      <Problems />
      <PanditBio />
      <Services />
      <VideoGallery />
      <Benefits />
      <BookingSteps />
      <FAQ />
      <Reviews />
      <Contact />
      <FinalCTA />
    </div>
  );
}
