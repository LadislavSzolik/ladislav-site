import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import HeroSection from "~/routes/hero-section";
import ProjectList from "~/routes/project-list";

export default component$(() => {
  return (
    <>
      <HeroSection />
      <ProjectList />
    </>
  );
});

export const head: DocumentHead = {
  title: "Ladislav Szolik",
  meta: [
    {
      name: "description",
      content: "Ladislav Szolik, UX designer at Swisscom. Researching and designing web applications. Previously, mobile and web UX designer for banking at Credit Suisse. Also worked as Software Engineer at Accenture. From Slovakia, living in Switzerland, Zürich."
    },{
      name: "og:description",
      content: "Ladislav Szolik, UX designer at Swisscom. Researching and designing web applications. Previously, mobile and web UX designer for banking at Credit Suisse. Also worked as Software Engineer at Accenture. From Slovakia, living in Switzerland, Zürich."
    }
  ]
};
