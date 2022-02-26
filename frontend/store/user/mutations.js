export default {
  addUser(state, { id, email, password, role, token }) {
    this.$auth.$storage.setLocalStorage('user', { id: id, email: email, password: password, role: role, token: token })
    //this.$auth.$storage.setState('user', { id: id, email: email, password: password, role: role, token: token })
  },
  clearStorage() {
    this.$auth.$storage.removeLocalStorage('user')
  }
}