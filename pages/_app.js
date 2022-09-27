import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <Head>
        <title>Ladislav Szolik</title>
        {process.env.NODE_ENV === "production" && (
          <script async src="https://cdn.splitbee.io/sb.js"></script>
        )}

        <meta
          name="description"
          content="UX design, User experience design, Design Thinking, Frontend Engineer, Usability, Accessibility"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
