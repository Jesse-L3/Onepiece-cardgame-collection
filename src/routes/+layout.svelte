<script>
    let { children } = $props();
</script>

<main class="hoi">
    {@render children?.()}
  </main>

<style>

    main {
        text-align: center;
       
        background-color: var(--background-dark);
    }
</style>