import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="px-4 sm:px-0 py-10 sm:py-24 max-w-5xl mx-auto flex flex-col-reverse sm:flex-row items-center sm:items-start sm:gap-20">
      <div class="text-2xl sm:text-3xl leading-relaxed pt-4">
        <h1 >
          Ladislav Szolik, UX designer at Swisscom. Researching and designing web applications. Previously, mobile and
          web UX designer for banking at Credit Suisse. Also worked as Software Engineer at Accenture. From Slovakia,
          living in Switzerland, Zürich.
        </h1>
        <div class="text-blue-600 flex gap-8 pt-4">
        <a href="https://www.linkedin.com/in/ladislav-szolik-30278593/" target="_blank" rel="noreferrer"> LinkedIn</a>
        <a href="/downloads/LadislavSzolik-CV.pdf" target="_blank">Resume (PDF)</a>
        </div>
      </div>
      <img src="/images/profile_photo.webp" alt="Profile picture" width={344} height={344} />
    </div>
  );
});
