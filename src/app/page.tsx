import { CrewCard } from "@/components/CrewCard";
import { SpeakerHome } from "@/components/SpeakerHome";
import { SponsorUs } from "@/components/SponsorUs";
import PastEvents from "./past-events/page";
import SponsorCarousel from "../components/PastSponsors";

export default function Index() {
  return (<>
    <h1>TEDxVSSUT</h1>
    <h1>What is ted x</h1>
    <p>reply</p>

    {Array(5).map(i =>
      <SpeakerHome />
    )}

    <h1>Venue</h1>
    <p>content</p>

    {Array(2).map(i =>
      <CrewCard />
    )}

    <SponsorUs />

    <h1>FAQ</h1>
    <p>faqs</p>
    <div className="w-full">
      <PastEvents />
    </div>
    <SponsorCarousel />
  </>)
}