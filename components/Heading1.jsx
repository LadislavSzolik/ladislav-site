import React from 'react';

export default function Heading1({ title }) {
  return (
    <h1 className="my-6 text-center text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
      {title}
    </h1>
  );
}
