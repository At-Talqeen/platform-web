import AboutUs from "@/components/AboutUs";
import Benefit from "@/components/Benefit";
import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import Journey from "@/components/Journey";
import LandingPage from "@/components/LandingPage";
import Pricing from "@/components/Pricing";
import Verses from "@/components/Verses";
export default function Home() {
  return (
    <div>
      <div id="home">

      <LandingPage />
      </div>
      <div className="my-20">
        <AboutUs />
      </div>
      <div className="my-20" id="features">
        <Features/>
      </div>

      <div className="my-20" id="benefits">
        <Benefit/>
      </div>

      <div className="my-20">
        <Verses/>
      </div>

      <div className="my-20" id="pricing">
        <Pricing/>
      </div>

      <div className="my-20" id="faqs">
        <Faqs/>
      </div>

      <div className="my-20">
        <Journey/>
      </div>
    </div>
  );
}
