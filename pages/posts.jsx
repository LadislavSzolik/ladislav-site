import Layout from "../components/Layout";
import PostList from "../components/PostList";
import { getPosts } from "../utils/postsApi";

export default function Posts({ posts }) {
  return (
    <>
      {/* <Navbar /> */}
      <h1> Notes about my career</h1>
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
    const postsSorted = posts.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    return {
      props: { posts: postsSorted },
    };
  } catch (e) {
    console.log(e);
  }
}
