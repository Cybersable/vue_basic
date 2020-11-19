<template>
    <div class="py-5 text-center">
        <img src="../assets/logo.png" alt="">
        <h2>Keep Resources</h2>
        <p class="lead">Keep your resource at once place</p>
        <RouterLink
            :to="{name: 'resourceHomePage'}"
            class="btn btn-outline-primary mr-2">Home</RouterLink>
        <RouterLink
            :to="{name: 'resourceNewPage'}"
            class="btn btn-outline-primary">New</RouterLink>
    </div>
</template>

<script>
    export default {
        name: "ResourceHeader"
    }
</script>

<style scoped>

</style>