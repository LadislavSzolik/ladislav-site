import React from "react";
import Layout from "../components/Layout";

export default function About() {
  return (
    <>
      {/* <Navbar /> */}
      <h1>About me</h1>
      <div className="prose prose-lg mx-auto">
        <p>
          Thank you for checking out my website. I hope you have found something
          interesting.
        </p>
        <p>
          My name is Ladislav and I from Slovakia. I am currently working and
          living in Zürich, Switzerland.
        </p>
        <p>
          I studied electrical engineering and applied informatics. So as you
          guessed, I was always super interested in technology.
        </p>
        <p>
          I work as a full time UX Engineer @ Swisscom AG. Previusly at Credit
          Suisse AG, Elca Informatik and Accenture. Mostly I worked in Zürich,
          but I had projects in Vienna, Bratislava and Bangalore.
        </p>
        <p>
          My passion lies in creating things. Things which are meaningful and
          valuable for the people. Today it is software, tomorrow it might be
          something else.
        </p>
        <p>
          If you want to work together, or have a question, you can find me on
          LinkedIn, or any other social media.
        </p>
      </div>
    </>
  );
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
