import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import CasesPreview from "@/components/CasesPreview";
import Team from "@/components/Team";
import Booking from "@/components/Booking";
import Location from "@/components/Location";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <CasesPreview />
        <Team />
        <Booking />
        <Location />
        <InstagramSection />
      </main>
      <Footer />
    </>
  );
}
