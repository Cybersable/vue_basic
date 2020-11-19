<template>
    <form
        @submit.prevent="submitForm">
        <div v-if="alert?.success" class="alert alert-success">
            {{ alert.success }}
        </div>
        <div v-if="alert?.error" class="alert alert-danger">
            {{ alert.error }}
        </div>
        <div class="mb-3">
            <label htmlFor="title">Title</label>
            <input
                v-model="uResource.title"
                type="text"
                class="form-control"
                id="title"
                placeholder="How to survice in mountains" />
        </div>
        <div class="mb-3">
            <label for="description">Description</label>
            <textarea
                v-model="uResource.description"
                class="form-control"
                id="description"
                placeholder="Just some description"></textarea>
        </div>
        <div class="mb-3">
            <label htmlFor="link">Resource Link</label>
            <div class="input-group">
                <input
                    v-model="uResource.link"
                    type="text"
                    class="form-control"
                    id="link" placeholder="Link" />
            </div>
        </div>
        <div class="mb-3">
            <label htmlFor="type">Type</label>
            <select
                v-model="uResource.type"
                id="type"
                class="form-control">
                <option
                    v-for="resourceType in types"
                    :key="resourceType"
                    :value="resourceType">{{ resourceType }}</option>
            </select>
        </div>
        <hr class="mb-4" />
        <button
            class="btn btn-primary btn-lg btn-block"
            type="submit">
                Submit
        </button>
    </form>
</template>

<script>
    import { updateResources} from "../actions";
    import alertMixin from '../mixins/alert'
    export default {
        name: "ResourceUpdate",
        props: {
            resource: Object
        },
        data() {
            return {
                uResource: { ...this.resource},
                types: ['blog', 'video', 'book']
            }
        },
        emits: ['on-resource-update'],
        mixins: [alertMixin],
        beforeUnmount() {
            this.clearAlertTimeout()
        },
        watch: {
          resource(newResource, prevResource) {
              if (newResource && (newResource._id !== prevResource._id)) {
                  this.clearAlertTimeout()
                  this.alert = this.initAlert()
              }
              this.uResource = { ...newResource }
          }
        },
        methods: {
            async submitForm() {
                try {
                    const updatedResource = await updateResources(this.uResource._id, this.uResource)
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