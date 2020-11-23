<template>
    <div class="py-5 text-center">
        <teleport to="#teleportContent">
            <div class="user-container">
                <suspense>
                    <template  #default>
                        <UserPanel />
                    </template>
                    <template #fallback>
                        Loading...
                    </template>
                </suspense>
            </div>
        </teleport>
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
    import UserPanel from "./UserPanel";
    export default {
        name: "ResourceHeader",
        components: {
            UserPanel
        }
    }
</script>

<style scoped>
    .user-container {
        padding: 20px;
        font-weight: bold;
        font-size: 20px;
        background-color: #ffd16c;
    }
</style>