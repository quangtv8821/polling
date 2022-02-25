export default {
  addUser(state, { id, email, password, role, token }) {
    state.user = { id: id, email: email, password: password, role: role, token: token }
  },
  addAuth(state) {
    this.$auth.state.loggedIn = this.$auth.$storage._state["_token.local"]
  },
  clearState(state) {
    state.user = { id: null, email: null, password: null, role: null, token: null }
  }
}