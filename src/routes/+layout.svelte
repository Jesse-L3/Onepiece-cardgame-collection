<script>
    let { children } = $props();

    import { Navigation } from '$lib/index.js';
</script>

<header>
    <Navigation />
</header>

<main class="hoi">
    {@render children?.()}
  </main>

<style>

    main {
        text-align: center;
       
        background-color: var(--background-dark);
    }
</style>