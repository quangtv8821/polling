export default function({$auth, redirect, commit}) {
    if(!$auth.$storage._state["_token.local"]) {
        redirect('/login')
    }
}