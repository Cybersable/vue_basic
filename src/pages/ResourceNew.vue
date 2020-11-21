<template>
    <ResourceFrom
            :alert="alert"
            :resource="resource"
            @on-form-submit="createResource"/>
</template>

<script>
    import { createResourceApi } from "../actions";
    import alertMixin from '../mixins/alert'
    import ResourceFrom from "../components/ResourceFrom";
    export default {
        name: "ResourceUpdate",
        components: {ResourceFrom},
        data() {
            return {
                resource: {title: '', description: '', type: 'video', link: ''}
            }
        },
        mixins: [alertMixin],
        beforeUnmount() {
            this.clearAlertTimeout()
        },
        methods: {
            async createResource(resource) {
                try {
                    await createResourceApi(resource)
                    this.$router.push({name: 'resourceHomePage'})
                } catch (errorMessage) {
                    this.setAlert('error', errorMessage)
                }
            }
        }
    }
</script>

<style scoped>

</style>