<script>
    let { name = '' } = $props();
</script>

<form action="/" method="get" class="flex items-center justify-center">
    <div class="search">
        <input class="text-[var(--text-color-dark)] rounded-lg" type="search" id="search" name="n" value={name} placeholder="Search by name"/>
    </div>
</form>

<style>

</style>