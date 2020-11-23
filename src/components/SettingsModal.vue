<template>
    <button
        @click="isOpen = true"
        class="btn btn-success">Settings</button>
    <Modal
        :isOpen="isOpen"
        @on-close="isOpen = false"
        @on-submit="submitSettings"
    >
        <div class="">
            My custom content
        </div>
    </Modal>

</template>

<script>
    import Modal from "../components/shared/Modal"
    export default {
        name: "SettingsModal",
        components: {
            Modal
        },
        data() {
            return {
                isOpen: false
            }
        },
        methods: {
            submitSettings() {
                this.isOpen = false
            }
        }
    }
</script>

<style scoped>

</style>