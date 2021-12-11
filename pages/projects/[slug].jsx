import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import Navbar from '../../components/Navbar';
import Layout from '../../components/Layout';
import Heading1 from '../../components/Heading1';
import { getProject, getProjects } from '../../utils/projectsApi';

import Image from 'next/image';

const CustomImageTag = ({ url, alt }) => {
  return (
    <div className="w-full h-96 relative">
      <Image src={url} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
};
const customComponents = { CustomImageTag };

export default function Project({ project }) {
  return (
    <div>
      <Navbar />
      <div className="mt-6 mb-12">
        <Heading1 title={project.title} />
      </div>
      <div className="my-6 prose mx-auto">
        <MDXRemote {...project.body} components={customComponents}></MDXRemote>
      </div>
    </div>
  );
}

Project.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ params }) {
  const project = await getProject(params.slug);
  const mdxSourse = await serialize(project.body);
  return {
    props: { project: { title: project.title, body: mdxSourse } },
  };
}

export async function getStaticPaths() {
  const projects = await getProjects();

  const paths = projects.map((project) => {
    return {
      params: {
        slug: project.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
