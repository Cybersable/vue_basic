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
            <SettingsForm
                v-model:fontSize="fontSize"
                v-model:theme="theme"
            />
        </div>
    </Modal>

</template>

<script>
    import Modal from "../components/shared/Modal"
    import SettingsForm from "./SettingsForm";
    export default {
        name: "SettingsModal",
        components: {
            SettingsForm,
            Modal
        },
        data() {
            return {
                isOpen: false,
                fontSize: '',
                theme: ''
            }
        },
        inject: ['setSettings'],
        methods: {
            submitSettings() {
                const settings = {
                    fontSize: this.fontSize,
                    theme: this.theme
                }
                localStorage.setItem('resource-settings', JSON.stringify(settings))
                this.setSettings(settings)
                this.isOpen = false
            }
        }
    }
</script>

<style scoped>

</style>