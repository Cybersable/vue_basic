export default {
    name: "alertMixin",
    data() {
        return {
            alert: this.initAlert(),
            timeoutId: null
        }
    },
    methods: {
        initAlert() {
            return { success: null, error: null }
        },
        setAlert(type, msg) {
            this.alert = this.initAlert()
            this.alert[type] = msg
            this.timeoutId = setTimeout(() => this.alert = this.initAlert(), 2000)
        },
        clearAlertTimeout() {
            this.timeoutId && clearTimeout(this.timeoutId)
        }
    }
}