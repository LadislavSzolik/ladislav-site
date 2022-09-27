import Layout from "../components/Layout";
import Navbar from "../components/Navbar/Navbar";
import ProjectListSection from "../components/ProjectListSection/ProjectListSection";

import { getProjects } from "../utils/projectsApi";

export default function Projects({ projects }) {
  return (
    <>
      <Navbar />
      <ProjectListSection />
    </>
  );
}

Projects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps = async () => {
  try {
    const projects = await getProjects();
    return {
      props: { projects, projects },
    };
  } catch (e) {
    console.log(e);
  }
};
