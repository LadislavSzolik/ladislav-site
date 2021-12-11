import Navbar from '../../components/Navbar';
import { getPost, getPosts } from '../../utils/postsApi';
import Heading2 from '../../components/Heading2';
import Layout from '../../components/Layout';

export default function Post({ post }) {
  return (
    <div>
      <Navbar />
      <div className="mt-6">
        <Heading2 title={post.title} />
      </div>
      <div
        className="my-6 prose md:prose-lg mx-auto"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  );
}

Post.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);
  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
