import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Testimonials from "@/components/testemonials";
import Cta from "@/components/cta";
import Footer from "@/components/footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
