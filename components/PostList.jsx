import Link from 'next/link';
import React from 'react';

export default function PostList({ posts }) {
  return (
    <div className="mt-6">
      <ul role="list" className="-my-5 divide-y divide-gray-200">
        {posts.map((post, index) => (
          <li key={index} className="py-5">
            <div className="relative focus-within:ring-2 focus-within:ring-sky-500">
              <h3 className=" font-semibold text-gray-800">
                <Link href={`/posts/${post.slug}`}>
                  <a className="underline decoration-2 decoration-sky-400 underline-offset-2 hover:text-sky-400 focus:outline-none ">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {post.title}
                  </a>
                </Link>
              </h3>
              <p className="mt-1 text-gray-600 line-clamp-2">{post.preview}</p>
              <div>
                <time className="text-sm text-gray-500" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString()}
                </time>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
