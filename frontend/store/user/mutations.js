export default {
  addUser(state, { id, email, password, role, token }) {
    state.user = { id: id, email: email, password: password, role: role, token: token }
  },
  clearState(state) {
    state.user = null
  }
}