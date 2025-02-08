"use client";
import AboutUs from "@/components/AboutUs";
import Benefit from "@/components/Benefit";
import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Journey from "@/components/Journey";
import LandingPage from "@/components/LandingPage";
import Pricing from "@/components/Pricing";
import Verses from "@/components/Verses";
import { usePathname} from "next/navigation";

export default function Home() {
  const path = usePathname();

  return (
    <div>
      <div id="home">
        <LandingPage />
      </div>
      <div className="my-20">
        <AboutUs />
      </div>
      <div className="my-20" id="features">
        <Features />
      </div>

      <div className="my-20" id="benefits">
        <Benefit />
      </div>

      <div className="my-20">
        <Verses />
      </div>

      <div className="my-20" id="pricing">
        <Pricing />
      </div>

      <div className="my-20" id="faqs">
        <Faqs />
      </div>

      <div className="my-20">
        <Journey />
      </div>
      {!path.includes("/signup") && <Footer />}
    </div>
  );
}
