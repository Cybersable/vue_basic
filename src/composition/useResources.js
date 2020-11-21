import { fetchResources } from "../actions"
import { onMounted, ref, computed } from 'vue'
import useSearch from "./useSearch"

export default function useResources() {
    const resources = ref([])
    const getResources = async () => { resources.value = await fetchResources() }
    const hydrateResources = (resource, action) => {
        const index = resources.value.findIndex(r => r._id === resource._id)
        action === 'update' ?
            resources.value[index] = resource :
            resources.value.splice(index, 1)
    }

    onMounted(getResources)

    const resourcesLength = computed(() => resources.value.length)
    const hasResources = computed(() => resourcesLength.value > 0)

    const { searchedResources, setSearchQuery } = useSearch(resources)

    return {
        resources: searchedResources,
        getResources,
        resourcesLength,
        hasResources,
        hydrateResources,
        setSearchQuery
    }
}
