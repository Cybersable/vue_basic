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
                <button
                    @click="addResource"
                    class="btn btn-sm btn-primary">
                    Add Resource
                </button>
            </div>
            <div class="col-md-8 order-md-1">
                <h4 class="mb-3">
                    Resource {{ activeResource?._id }}
                    <button
                        @click="toggleView"
                        :class="`btn btn-sm ${toggleBtnClass}`">
                            {{ isDetailView ? 'Update' : 'Detail' }}
                    </button>
                </h4>
                <ResourceDetail
                    v-if="isDetailView"
                    :resource="activeResource"
                />
                <ResourceUpdate v-else />
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
    export default {
        name: "ResourceHome",
        components: {
            ResourceDetail,
            ResourceUpdate,
            ResourceList,
            ResourceSearch,
            ResourceHeader
        },
        data() {
            return {
                isDetailView: true,
                selectedResource: null,
                resources: [
                    {
                        _id: '1',
                        title: 'Resource 1 Title',
                        description: 'Resource 1 Description',
                        type: 'video',
                        link: ''
                    },
                    {
                        _id: '2',
                        title: 'Resource 2 Title',
                        description: 'Resource 2 Description',
                        type: 'book',
                        link: ''
                    },
                    {
                        _id: '3',
                        title: 'Resource 3 Title',
                        description: 'Resource 3 Description',
                        type: 'blog',
                        link: ''
                    }
                ]
            }
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
            addResource() {
                const rnd = Math.random()
                const _id = '_' + rnd.toString(36).slice(2)
                const type = ['book', 'blog', 'video'][Math.floor(rnd * 3)]
                const newResource = {
                    _id,
                    title: `Resource ${_id} Title`,
                    description: `Resource ${_id} Description`,
                    link: ``,
                    type: type
                }

                this.resources.unshift(newResource)
            },
            selectResource(selectedResource) {
                // TODO: it's copied by reference!!!!
                this.selectedResource = selectedResource
            }
        }
    }
</script>