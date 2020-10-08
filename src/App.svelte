<script>
  import { onMount } from "svelte";
  export let date;

  onMount(async () => {
    const res = await fetch("/api/search?type=$type&id=$id");
    const newDate = await res.text();
    date = newDate;
  });
</script>

<main>
  <h1>armkai</h1>
  <h2>
    Forked from
    <a href="https://github.com/p-chan/arm" target="_blank" rel="noreferrer noopener">
      p-chan/arm
    </a>
    !
  </h2>
  <p>
    <a
      href="https://github.com/vercel/vercel/tree/master/examples/svelte"
      target="_blank"
      rel="noreferrer noopener">
      This project
    </a>
    is a
    <a href="https://svelte.dev">Svelte</a>
    app with three directories,
    <code>/api/mal</code>
    for mal auth,
    <code>/api/anilist</code>
    for anilist auth, and
    <code>/api/search?type=$type&id=$id</code>
    an api for relational mapping anime ids.
    See
    <a href="/api/search?type=$type&id=$id">
      <code>/api/search?type=$type&id=$id</code>
      for the Search API
    </a>
    .
  </p>
  <br />
  <h2>The search api format</h2>
  <p>{date ? date : 'Loading search...'}</p>
</main>
