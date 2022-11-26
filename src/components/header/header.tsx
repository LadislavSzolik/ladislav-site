import { component$ } from '@builder.io/qwik';
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <header>
      <div class="logo">
        <Link href="/">Home</Link>
      </div>
    </header>
  );
});
