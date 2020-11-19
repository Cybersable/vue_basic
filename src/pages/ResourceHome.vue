<template>
    <div class="container">
        <ResourceHeader />
        <div class="row">
            <div class="col-md-4 order-md-2 mb-4">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-muted">Your Resources</span>
                    <span class="badge badge-secondary badge-pill">{{ resourcesLength }}</span>
                </h4>
                <ResourceSearch />
                <ResourceList
                    :resources="resources"
                    :activeId="activeResource?._id"
                    @on-item-click="selectResource"
                />
<!--                <button-->
<!--                    @click="addResource"-->
<!--                    class="btn btn-sm btn-primary">-->
<!--                    Add Resource-->
<!--                </button>-->
            </div>
            <div class="col-md-8 order-md-1">
                <h4 class="mb-3">
                    Resource {{ activeResource?._id }}
                    <template v-if="hasResources">
                        <button
                                @click="toggleView"
                                :class="`btn btn-sm ${toggleBtnClass} mr-2`">
                            {{ isDetailView ? 'Update' : 'Detail' }}
                        </button>
                        <ResourceDelete
                                :active-id="activeResource?._id"
                                @on-resource-delete="hydrateResources($event, 'delete'); !this.hasResources ? this.isDetailView = true : null" />
                    </template>
                </h4>
                <ResourceDetail
                    v-if="isDetailView"
                    :resource="activeResource"/>
                <ResourceUpdate
                    v-else
                    @on-resource-update="hydrateResources($event, 'update')"
                    :resource="activeResource"/>
            </div>
        </div>
    </div>
</template>

<script>
    import ResourceHeader from "../components/ResourceHeader";
    import ResourceSearch from "../components/ResourceSearch";
    import ResourceList from "../components/ResourceList";
    import ResourceUpdate from "../components/ResourceUpdate";
    import ResourceDetail from "../components/ResourceDetail";
    import ResourceDelete from "../components/ResourceDelete";
    import { fetchResources } from "../actions";
    export default {
        name: "ResourceHome",
        components: {
            ResourceDetail,
            ResourceUpdate,
            ResourceList,
            ResourceSearch,
            ResourceHeader,
            ResourceDelete
        },
        data() {
            return {
                isDetailView: true,
                selectedResource: null,
                resources: []
            }
        },
        async created() {
            const resources = await fetchResources()
            this.resources = resources
        },
        computed: {
            resourcesLength() {
              return this.resources.length
            },
            toggleBtnClass() {
                return this.isDetailView ? 'btn-warning' : 'btn-primary'
            },
            hasResources() {
              return this.resourcesLength > 0
            },
            activeResource() {
                return this.selectedResource || (this.hasResources && this.resources[0]) || null
            }
        },
        methods: {
            toggleView() {
                return this.isDetailView = !this.isDetailView
            },
            // addResource() {
            //     const rnd = Math.random()
            //     const _id = '_' + rnd.toString(36).slice(2)
            //     const type = ['book', 'blog', 'video'][Math.floor(rnd * 3)]
            //     const newResource = {
            //         _id,
            //         title: `Resource ${_id} Title`,
            //         description: `Resource ${_id} Description`,
            //         link: ``,
            //         type: type
            //     }
            //
            //     this.resources.unshift(newResource)
            // },
            selectResource(selectedResource) {
                // TODO: it's copied by reference!!!!
                this.selectedResource = selectedResource
            },
            hydrateResources(newResource, action) {
                const index = this.resources.findIndex(r => r._id === newResource._id)

                if (action === 'update') {
                    this.resources[index] = newResource
                    this.selectResource(newResource)
                } else {
                    this.resources.splice(index, 1)
                    this.selectResource(this.resources[0] || null)
                }
            }
        }
    }
</script>