import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const activities = ["Wireframing", "Visual design (Sketch)", "Interaction design (Sketch)", "Prototyping (InVision, Origami Studio)", "Focus groups", "IT hand offs", "Usability testing", "Design thinking workshops", "Stakeholder management"];
  return (
    <>
      <section class="px-5 py-14 text-center flex flex-col items-center bg-gradient-to-b from-cyan-200 to-sky-50">
        <div class="max-w-5xl mx-auto">
          <a href="/" class="text-blue-700 py-2 block">Back to home</a>
          <h1 class="text-5xl sm:text-7xl font-bold">CSX mobile banking</h1>
          <img className="mt-10 sm:mt-14" src="/images/csx-mobile-banking/csx-app-lg.webp"
               alt="3 Screens of the final product"
               width={800}
               height={593} />
        </div>
      </section>

      <section class="bg-sky-50 py-14">
        <div class="max-w-3xl mx-auto px-5">
          <h2 class="text-4xl sm:text-6xl font-semibold text-center mb-4 sm:mb-8">Introduction</h2>
          <div class="space-y-2">
            <p><strong>Timeline.</strong> Jan 2019 - Jun 2020</p>
            <p><strong>Problem statement.</strong> The mobile banking app for iOS an Android was a hybrid application
              with
              low performance
              and with few features. Because of that, the app had low rating in AppStore as well as PlayStore.</p>
            <p><strong>Goal.</strong> Reimagine and design a modern mobile banking experience.</p>
            <p><strong>Team.</strong> 4 native iOS developers, 3 native Android developers, a business analyst, a scrum
              master and a product
              owner.</p>
            <p><strong>Roles played.</strong> I worked with 2 senior UX designers to research and design the concept.
              During
              the
              implementation I was integrated into the mobile development team. The team was based in Zürich and India.
            </p>
          </div>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-5 py-10">
        <h2 class="text-4xl sm:text-6xl font-semibold text-center mb-4 sm:mb-8">Activities</h2>
        <div class="flex flex-wrap justify-center gap-2 text-sm sm:text-base">
          {activities.map((activity) => <p
            class="py-2 px-6 bg-sky-100 text-blue-800 rounded-3xl shrink-0">{activity}</p>)}
        </div>
      </section>

      <section class="max-w-3xl mx-auto px-5 py-14 ">
        <h2 class="text-4xl sm:text-6xl font-semibold text-center mb-4 sm:mb-8">Getting started</h2>
        <h3 class="font-semibold">Challenges</h3>

        <ol class="list-decimal list-inside">
          <li>The project had a large number of stakeholder with different interests.</li>
          <li>We had no clear idea about our target audience and their unmet needs.</li>
          <li>The new concept was constrained by the old backend</li>
        </ol>

        <h3 className="font-semibold mt-8">Proposed solutions</h3>
        <ol class="list-decimal list-inside space-y-2">
          <li>We invited stakeholders to a series of workshops where they shared and voted for ideas. Those ideas
            served
            as
            the first hypothesises about the app. Later, thanks to the workshops, we created a common vision.
          </li>
          <li>To clarify who is our primary audience, we interviewed stakeholders and customer facing colleagues.
            Also,
            we
            checked in the database which customers use mobile banking and what do they have in common. Lastly, we
            conducted
            two focus groups. Combining findings from all sources, we were able to define our target user and her most
            important goals:
            <ol class="ml-8 list-decimal list-inside">
              <li>Check how much money I have?</li>
              <li>What were my latest transactions?</li>
              <li>I need to pay this bill.</li>
            </ol>
          </li>
          <li>We talked with engineers early to understand what data is available and what are possible changes they
            can
            make. Unfortunately, we needed to discard few ideas at the beginning due to technical limitations.
          </li>
        </ol>
        <figure class="my-8 mx-auto">
          <img class="mx-auto" src="/images/csx-mobile-banking/whiteboarding.webp" width={800} height={648}
               loading="lazy"
               decoding="async"
               alt="Image of a whiteboard with wire frames" />
          <figcaption class="text-slate-600 text-center" >Initial scenarios sketched on a workshop with stakeholders</figcaption>
        </figure>
        <div className="max-w-3xl mx-auto text-center bg-sky-100 rounded-2xl px-4 sm:px-7 py-8">
          <h3 className="font-semibold">Lessons learned</h3>
          <p>The beginning was very chaotic, but we needed to accept this and trust the process. We learned to keep
            stakeholders in the loop, in exchange they were helping to push the concept further. </p>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-5 py-14 flex flex-col sm:flex-row">
        <div>
          <h2 class="text-4xl sm:text-6xl font-semibold text-center sm:text-left mb-4 sm:mb-8">Previous version</h2>
          <div class="space-y-2">
            <p>The version before the lunch of the new app was a hybrid application, it was a responsive website packed
              into an app. In certain scenarios this solution can work, however for a mobile banking app competing with
              many other apps it was not an option.</p>
            <p>This hybrid solution had many limitations. There was a delay once the user tapped on the screen. Native
              bottom navigation could not be used. More modern interaction pattern like swiping were not fluent.</p>
            <p>When users wanted to check whether a transaction was made they needed to expand an accordion and go to
              another page and scroll. Once they navigated back, the whole site reloaded, making the application feel
              slow.</p>
            <p>Apart from performance and usability challenges, there was negative feedback on the branding. For the
              users
              the black and white was very sad and depressing.</p>
          </div>
        </div>
        <img class="mt-8 sm:mt-0" src="/images/csx-mobile-banking/home-previous-version.webp" width={480} height={709}
             loading="lazy" decoding="async"
             alt="Image of the old online banking home screen" />
      </section>

      <section class="max-w-5xl mx-auto px-5 py-14 text-center flex flex-col items-center">
        <h2 class="text-4xl sm:text-6xl font-semibold  mb-4 sm:mb-8">Early designs</h2>
        <p class="max-w-2xl">We wanted to set an ambitious vision for the app, therefore we went far away from the
          current version. The visual language was moderner and brighter. The interactions were fluid, the information
          kept at minimum.</p>
        <img className="mt-8" src="/images/csx-mobile-banking/early-designs.webp" width={800}
             height={512} loading="lazy" decoding="async"
             alt="Three screens of the previous home screen" />
        <div class="max-w-3xl bg-sky-100 rounded-2xl px-4 sm:px-7 py-8">
          <h3 class="font-semibold">Lessons learned</h3>
          <p>This concept was made interactive by Origami Studio. It motivated the team and gave them the feeling of
            working on something great and exceptional. However, we needed adapt the design as the data was missing and
            the visual design was far from our current branding. Additionally, logos and profile pictures showed legal
            and technical concerns.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 py-14  flex flex-col items-center">
        <h2 className="text-4xl sm:text-6xl font-semibold text-center mb-4 sm:mb-8">Final design</h2>
        <div class="max-w-3xl space-y-2">
          <p>As a result of branding decision blue has became the main colour and it was not allowed to use shadows or
            border radius. We accepted these constrains and use it to design the final version.</p>
          <p>The new home page is native, therefore we could use fluent swipe gestures to speed up user navigation. For
            example, the user can quickly scroll horizontally to check how much money she or he has on her or his
            accounts. Other example is swiping up the transactions list and continue scrolling. This pattern was
            borrowed
            from Apple and Google Maps.</p>
          <p>In summary, the top section of the home page answers the question: how much money I have? The middle
            section
            helps to find a transaction made or received. Finally, at the bottom we placed actions like pay and showing
            debit and credit cards.</p></div>
        <img className="mt-8" src="/images/csx-mobile-banking/home-before-after.webp" width={800}
             height={512} loading="lazy" decoding="async"
             alt="Before after comparison of the home page" />
      </section>
    </>
  );
});


export const head: DocumentHead = {
  title: "CSX mobile banking",
  meta: [
    {
      name: "description",
      content: "Redesign of the mobile banking experience"
    },{
      name: "og:description",
      content: "Redesign of the mobile banking experience"
    }
  ]
};
