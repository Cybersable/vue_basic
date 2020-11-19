<template>
    <form
        @submit.prevent="submitForm">
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
    export default {
        name: "ResourceUpdate",
        props: {
            resource: Object
        },
        emits: ['on-resource-update'],
        data() {
            return {
                uResource: { ...this.resource},
                types: ['blog', 'video', 'book']
            }
        },
        watch: {
          resource(newResource) {
              this.uResource = { ...newResource }
          }
        },
        methods: {
            async submitForm() {
                const updatedResource = await updateResources(this.uResource._id, this.uResource)
                this.$emit('on-resource-update', updatedResource)
            }
        }
    }
</script>

<style scoped>

</style>