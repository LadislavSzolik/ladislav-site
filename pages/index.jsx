import HeroSection from "../components/HeroSection/HeroSection";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar/Navbar";
import { getPosts } from "../utils/postsApi";
import { getProjects } from "../utils/projectsApi";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import NotesSection from "../components/NotesSection/NotesSection";
import ContactSection from "../components/ContactSection/ContactSection";

export default function Home({ posts, projects }) {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <ProjectSection />
      <NotesSection />
      <ContactSection />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps(context) {
  try {
    const posts = await getPosts();
    const postsSorted = posts
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    const projects = await getProjects();
    const projectsSorted = projects.slice(0, 3);

    return {
      props: { posts: postsSorted, projects: projectsSorted },
    };
  } catch (e) {
    console.log(e);
  }
}
