export default function ({ store, redirect }) {
  if(store.auth,state.loggedIn) {
    return redirect('/')
  }
}