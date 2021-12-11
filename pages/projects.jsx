import Heading1 from '../components/Heading1';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import ProjectList from '../components/ProjectList';
import { getProjects } from '../utils/projectsApi';

export default function Projects({ projects }) {
  return (
    <>
      <Navbar />
      <Heading1 title="Projects" />
      <ProjectList projects={projects} />
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
