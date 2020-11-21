<template>
    <ResourceDetailView
        :resource="resource"
    />
</template>

<script>
    import {fetchResourceByIdApi} from "../actions";
    import ResourceDetailView from "../components/ResourceDetail";

    export default {
        name: "ResourceDetail",
        components: {ResourceDetailView},
        data() {
            return {
                resource: Object
            }
        },
        async created() {
            const { id } = this.$route.params
            this.resource = await fetchResourceByIdApi(id)
        }
    }
</script>

<style scoped>

</style>