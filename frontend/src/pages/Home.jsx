import MainLayout from "../layouts/MainLayout";
import Hero from "../components/landing/Hero";
import TechStack from "../components/landing/TechStack";
import Features from "../components/landing/Features";
import Workflow from "../components/landing/WorkFlow";
import EncryptionFlow from "../components/landing/EncryptionFlow";
import FeatureShowcase from "../components/landing/FeatureShowcase";
import Testimonials from "../components/landing/Testimonials";
import FAQ from "../components/landing/FAQ";
import CTA from "../components/landing/CTA";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Workflow />
      <TechStack />
      <EncryptionFlow />
      <FeatureShowcase />
      <Testimonials />
      <FAQ />
      <CTA />
    </MainLayout>
  );
}

export default Home;