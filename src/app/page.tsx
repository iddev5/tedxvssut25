import { CrewCard } from "@/components/CrewCard";
import { SpeakerHomeWrapper } from "@/components/SpeakerHomeWrapper";
import CrewSection from "@/components/CrewSection";

import Hero from "@/components/Hero";
import SpeakerHome from "@/components/SpeakerHome";
import { SponsorUs } from "@/components/SponsorUs";
import PastEvents from "./past-events/page";
import InfoSection from "@/components/InfoSection";


export default function Index() {
  return (
    <>
      <h1>TEDxVSSUT</h1>
      <h1>What is ted x</h1>
      <p>reply</p>
      <h1>Venue</h1>
      <p>content</p>
      <SpeakerHomeWrapper/>
      <SponsorUs />
export default function Index() {
  return (<>
    <Hero />
    <InfoSection />

    <SpeakerHome/>

    <h1>Venue</h1>
    <p>content</p>

    <CrewSection />

    <SponsorUs />

      <h1>FAQ</h1>
      <p>faqs</p>
    </>
  )
}
