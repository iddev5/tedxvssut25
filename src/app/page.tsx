import { CrewCard } from "@/components/CrewSection";
import CrewSection from "@/components/CrewSection";

import Hero from "@/components/Hero";
import SpeakerHome from "@/components/SpeakerHome";
import { SponsorUs } from "@/components/SponsorUs";
import Sponsorship from "@/components/Sponsorship";
import PastEvents from "./past-events/page";
import InfoSection from "@/components/InfoSection";
import Venue from "@/components/Venue"; 

export default function Index() {
  return (
    <>
    <Hero />
    <InfoSection />

    <SpeakerHome />
    
    <Venue />

    <CrewSection />

    <SponsorUs />
    <Sponsorship />

    <h1>FAQ</h1>
    <p>faqs</p>
  </>
  )
}
