import { CrewCard } from "@/components/CrewSection";
import CrewSection from "@/components/CrewSection";

import Hero from "@/components/Hero";
import SpeakerHome from "@/components/SpeakerHome";
import { SponsorUs } from "@/components/SponsorUs";
import MemoryLane from "@/components/MemoryLane";
import PastEvents from "./past-events/page";
import InfoSection from "@/components/InfoSection";


export default function Index() {
  return (
    <>
    <Hero />
    <InfoSection />
    <SpeakerHome />
    <h1>Venue</h1>
    <p>content</p>
    <CrewSection />
    
    <MemoryLane />
    <SponsorUs />
    <h1>FAQ</h1>
    <p>faqs</p>
  </>
  )
}
