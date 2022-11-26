import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.href} />
      <script async src="https://cdn.splitbee.io/sb.js"></script>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="keywords"
        content="accessibility, accessible design, visually impaired, visual impairment, inclusive design, blind users, screen readers, visual design, visual principles, principles, visual ux, design elements, emotional design, beautiful design, aesthetic design, visual hierarchy, ui design, web usability, web page ux"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.ico" />

      {head.meta.map((m) => (
        <meta {...m} />
      ))}

      {head.links.map((l) => (
        <link {...l} />
      ))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
