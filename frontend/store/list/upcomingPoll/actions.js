import axios from "axios"

export default {
    getPolls({ commit }) {
        axios.get(`http://localhost:5500/upcoming-vote`)
        .then(response => {
            commit('ADD_POLLS', response.data)
        })
    }
}