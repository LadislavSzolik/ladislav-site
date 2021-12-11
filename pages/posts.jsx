import Heading1 from '../components/Heading1';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import PostList from '../components/PostList';
import { getPosts } from '../utils/postsApi';

export default function Posts({ posts }) {
  return (
    <>
      <Navbar />
      <Heading1 title="Posts" />
      <PostList posts={posts} />
    </>
  );
}

Posts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps(context) {
  try {
    const posts = await getPosts();
    const postsSorted = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    return {
      props: { posts: postsSorted },
    };
  } catch (e) {
    console.log(e);
  }
}
