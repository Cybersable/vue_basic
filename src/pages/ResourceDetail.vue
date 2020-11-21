<template>
    <ResourceDetailView
        :resource="resource"
    >
        <template #btnLink>
            <button
                    @click="$router.go(-1)"
                    class="btn btn-outline-success">
                Back
            </button>
        </template>
    </ResourceDetailView>
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