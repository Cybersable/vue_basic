<template>
    Welcome, {{user.name}}
</template>

<script>
    import {fetchUserApi} from "../actions";

    export default {
        name: "UserPanel",
        async setup() {
            const user = await fetchUserApi()
            return { user }
        }
    }
</script>

<style scoped>

</style>