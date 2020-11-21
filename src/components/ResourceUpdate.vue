<template>
    <div v-if="!resource?._id" class="card">
        <div class="card-body">
            No Resource is selected :(
        </div>
    </div>
    <ResourceFrom
        v-else
        :alert="alert"
        :resource="resource"
        @on-form-submit="updateResource"/>
</template>

<script>
    import { updateResourceApi } from "../actions";
    import alertMixin from '../mixins/alert'
    import ResourceFrom from "./ResourceFrom";
    export default {
        name: "ResourceUpdate",
        components: {ResourceFrom},
        props: {
            resource: Object
        },
        emits: ['on-resource-update'],
        mixins: [alertMixin],
        beforeUnmount() {
            this.clearAlertTimeout()
        },
        watch: {
          resource(newResource, prevResource) {
              if (newResource._id !== prevResource._id) {
                  this.clearAlertTimeout()
                  this.alert = this.initAlert()
              }
          }
        },
        methods: {
            async updateResource(resource) {
                try {
                    const updatedResource = await updateResourceApi(resource._id, resource)
                    this.$emit('on-resource-update', updatedResource)
                    this.setAlert('success', 'Resource was updated!')
                } catch (errorMessage) {
                    this.setAlert('error', errorMessage)
                }
            }
        }
    }
</script>

<style scoped>

</style>