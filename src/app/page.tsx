import CrewSection from "@/components/CrewSection";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import SpeakerHome from "@/components/SpeakerHome";
import { SponsorUs } from "@/components/SponsorUs";
import PastEvents from "./past-events/page";
import InfoSection from "@/components/InfoSection";

export default function Index() {
  return (<>
    <Hero />
    {/* <Loader /> */}
    <InfoSection />

    <SpeakerHome/>

    <h1>Venue</h1>
    <p>content</p>

    <CrewSection />

    <SponsorUs />

    <h1>FAQ</h1>
    <p>faqs</p>
  </>)
}