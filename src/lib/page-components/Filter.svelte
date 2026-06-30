<script>
    let { name = '' } = $props();
</script>

<form action="/" method="get">
    <div class="search">
        <input type="search" id="search" name="n" value={name} />
    </div>
</form>