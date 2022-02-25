export default function({$auth, redirect}) {
    if(!$auth.$storage._state["_token.local"]) {
        redirect('/login')
    }
}