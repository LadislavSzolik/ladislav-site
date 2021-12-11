import HeroSection from '../components/HeroSection';
import Layout from '../components/Layout';
import LogoClouds from '../components/LogoClouds';
import Navbar from '../components/Navbar';
import PostList from '../components/PostList';
import Heading2 from '../components/Heading2';
import ProjectList from '../components/ProjectList';
import ViewAllButton from '../components/ViewAllButton';
import Head from 'next/head';
import { getPosts } from '../utils/postsApi';
import { getProjects } from '../utils/projectsApi';
export default function Home({ posts, projects }) {
  return (
    <>
      <Head>
        <title>Ladislavs site</title>
        {process.env.NODE_ENV === 'production' && (
          <script async src="https://cdn.splitbee.io/sb.js"></script>
        )}

        <meta
          name="description"
          content="UX design, Frontend, Engineer, Usability, Accessibility"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
      </Head>
      <Navbar />
      <HeroSection />
      <Heading2 title="My work" />
      <p className="text-center mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
        Documentation of my side projects I have worked on lately.
      </p>
      <ProjectList projects={projects} />
      <Heading2 title="My thoughts" />
      <PostList posts={posts} />
      <ViewAllButton href="/posts" title="View all" />
      <Heading2 title="Tools I use" />
      <LogoClouds />
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

/*
const posts = [
  {
    id: 1,
    title: 'Office closed on July 2nd',
    preview:
      'Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.',
  },
  {
    id: 2,
    title: 'New password policy',
    preview:
      'Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.',
  },
  {
    id: 3,
    title: 'Office closed on July 2nd',
    preview:
      'Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.',
  },
]; */
