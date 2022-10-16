import HeroSection from "../components/HeroSection/HeroSection";
import Layout from "../components/Layout";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import ContactSection from "../components/ContactSection/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
