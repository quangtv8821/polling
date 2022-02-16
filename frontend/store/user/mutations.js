export default {
    addUser(state, {email, password, role}) {
        state.user = {email: email, password: password, role: role}
    },
    clearState(state) {
        state.user = {}
    }
}