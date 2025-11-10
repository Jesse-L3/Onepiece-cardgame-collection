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

    header {
        background-color: var(--primary-color);
        position: fixed;
        bottom: 0;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 3rem;
        gap: 65px;
    }
</style>