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
        background-color: var(--background-dark);
    }

    header {
        background-color: var(--primary-color);
        position: fixed;
        bottom: 0;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 3rem;
        gap: 65px;
        padding: 0 16px;

        @media (min-width: 768px){
            display: grid;
            align-content: center;
            grid-template-columns: repeat(3, 1fr);
            position: relative;
            background-color: var(--background-dark);
            height: 93px;
            padding: 14px 23px;
        }
    }
</style>