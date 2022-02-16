export default {
    addUser(state, {email, password, role, token}) {
        state.user = {email: email, password: password, role: role, token: token}
    },
    clearState(state) {
        state.user = null
    }
}