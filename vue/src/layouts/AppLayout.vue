<template>
    <component :is="this.$route.meta.layoutComponent">
        <slot/>
    </component>
</template>

<script>
import {lifecycleLoggerMixin} from "@/mixins/lifecycleLoggerMixin";

export default {
    name: "AppLayout",
    mixins: [lifecycleLoggerMixin],
}
</script>

<style scoped>

</style>