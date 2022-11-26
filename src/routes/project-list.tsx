import { component$ } from "@builder.io/qwik";


export default component$(() => {
  return (
    <div class="bg-gray-50 py-10 sm:py-32">
      <div class="max-w-5xl mx-auto px-4">

        <h2 class="text-5xl sm:text-7xl font-bold text-center">Projects</h2>

        <div class="py-14 sm:py-20 flex flex-col gap-24 sm:gap-32 ">

          <div class="flex flex-col items-center gap-2">
            <img src="/images/logos/cs-logo.svg" alt="Credit Suisse logo" width="188" height="24" />
            <h3 class="text-4xl sm:text-6xl font-semibold">CSX Mobile Banking</h3>
            <p class="text-lg">Redesign of the mobile banking experience</p>
            <a class="text-lg text-blue-600" href="/csx-mobile-banking/">View project</a>

            <img class="my-4" src="/images/csx-mobile-banking/csx-app-lg.webp" alt="3 Screens of the final product"
                 width={800}
                 height={593}
                 srcSet="/images/csx-mobile-banking/csx-app-sm.webp 800w, /images/csx-mobile-banking/csx-app-lg.webp 1600w"
                 sizes="100vw"
                 loading="lazy"
                 decoding="async" />
          </div>

          <div className="flex flex-col sm:flex-row items-center">
            <div class="sm:pl-4 flex flex-col text-center sm:text-left items-center sm:items-start gap-2 sm:gap-5">
              <img src="/images/logos/cs-logo.svg" alt="Credit Suisse logo" width="188" height="24" />
              <h3 className="text-4xl sm:text-6xl font-semibold">Online payments</h3>
              <p className="text-lg">Redesign of the payment entry for private and business clients</p>
              <p class="text-lg text-gray-500">Coming soon...</p>
            </div>
            <img className="my-4 sm:my-0" src="/images/online-payments/payments-sm.webp" alt="Payment entry screen"
                 srcSet="/images/online-payments/payments-sm.webp 720w, /images/online-payments/payments-lg.webp 1300w"
                 sizes="100vw"
                 width={650}
                 height={449}
                 loading="lazy" decoding="async" />
          </div>

          <div className="flex flex-col sm:flex-row-reverse items-center">
            <div className="sm:pl-8 flex flex-col text-center sm:text-left items-center sm:items-start gap-2 sm:gap-5">
              <img src="/images/logos/cs-logo.svg" alt="Credit Suisse logo" width="188" height="24" />
              <h3 className="text-4xl sm:text-6xl font-semibold">Banking design system</h3>
              <p className="text-lg">Create design system for web and mobile banking</p>
              <p className="text-lg text-gray-500">Coming soon...</p>
            </div>
            <img className="my-4 sm:my-0" src="/images/banking-design-system/design-system-sm.webp" alt="Web design system in Sketch"
                 width={650}
                 height={548}
                 srcSet="/images/banking-design-system/design-system-sm.webp 720w, /images/banking-design-system/design-system-lg.webp 1300w"
                 sizes="100vw"
                 loading="lazy" decoding="async" />
          </div>

          <div className="flex flex-col sm:flex-row items-center">
            <div className="sm:pl-4 flex flex-col text-center sm:text-left items-center sm:items-start gap-2 sm:gap-5">
              <img src="/images/logos/greenwiperz-logo.svg" alt="Greenwiperz logo" width="117" height="24" />
              <h3 className="text-4xl sm:text-6xl font-semibold">Booking system</h3>
              <p className="text-lg">Design and develop an online car wash booking system with payments</p>
              <p className="text-lg text-gray-500">Coming soon...</p>
            </div>
            <img className="my-4 sm:my-0" src="/images/greenwiperz/greenwiperz-app-lg.webp"
                 alt="Greenwiperz overview of the bookings"
                 srcSet="/images/greenwiperz/greenwiperz-app-sm.webp 800w, /images/greenwiperz/greenwiperz-app-lg.webp 1188w"
                 sizes="100vw"
                 width={650}
                 height={450}
                 loading="lazy" decoding="async" />
          </div>

          <div className="flex flex-col sm:flex-row-reverse items-center">
            <div className="sm:pl-8 flex flex-col text-center sm:text-left items-center sm:items-start gap-2 sm:gap-5">
              <img src="/images/logos/ooofer-logo.svg" alt="Ooofer logo" width="150" height="24" />
              <h3 className="text-4xl sm:text-6xl font-semibold">Partner platform</h3>
              <p className="text-lg">Design and develop a responsive web app for partners on-boarding</p>
              <p className="text-lg text-gray-500">Coming soon...</p>
            </div>
            <img className="my-4 sm:my-0" src="/images/ooofer-partner/ooofer-partner-lg.webp"
                 alt="Ooofer partner platform"
                 srcSet="/images/ooofer-partner/ooofer-partner-sm.webp 720w, /images/ooofer-partner/ooofer-partner-lg.webp 1300w"
                 sizes="100vw"
                 width={650}
                 height={446}
                 loading="lazy" decoding="async" />
          </div>


          <div className="flex flex-col items-center gap-2 sm:gap-4">
            <h3 className="text-4xl sm:text-6xl font-semibold">Digital illustrations</h3>
            <p className="text-lg text-center">Illustrated 100 different sport throughout 100 days</p>
            <img className="mt-4 shadow-2xl rounded-2xl" src="/images/illustrations/drawings.webp" alt="3 Screens of the final product"
                 width={800}
                 height={593}
                 loading="lazy" decoding="async" />
          </div>

        </div>
      </div>
    </div>
  );
});
