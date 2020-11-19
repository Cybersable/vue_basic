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
<!--        <div class="mb-3">-->
<!--            <label htmlFor="type">Type <span class="text-muted">(Optional)</span></label>-->
<!--            <input type="text" class="form-control" id="email" placeholder="Very interesting book" />-->
<!--        </div>-->
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
        <hr class="mb-4" />
        <button
            class="btn btn-primary btn-lg btn-block"
            type="submit">
                Submit
        </button>
    </form>
</template>

<script>
    export default {
        name: "ResourceUpdate",
        props: {
            resource: Object
        },
        data() {
            return {
                uResource: { ...this.resource}
            }
        },
        watch: {
          resource(newResource) {
              this.uResource = { ...newResource }
          }
        },
        methods: {
            submitForm() {

            }
        }
    }
</script>

<style scoped>

</style>