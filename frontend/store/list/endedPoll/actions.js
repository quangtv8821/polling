import axios from "axios"

export default {
    getPolls({ commit }) {
        axios.get(`http://localhost:5500/ended-poll`)
        .then(response => {
            commit('ADD_POLLS', response.data)
        })
    },
    // getMostVote({commit}, id) {
    //     axios.post(
    //         `http://localhost:5500/most-vote`,
    //         id
    //     )
    //     .then(res => {
    //         commit('ADD_MOST_VOTE', res.data)
    //     })
    // }
}