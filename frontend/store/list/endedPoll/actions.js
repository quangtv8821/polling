import axios from "axios"

export default {
    getPolls({ commit }) {
        axios.get(`http://localhost:5500/ended-poll`)
        .then(response => {
            commit('ADD_POLLS', response.data)
        })
    }
}