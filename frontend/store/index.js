import axios from "axios";
//state
export const state = () => ({
    polls: []
})

//getters
export const getters = () => ({

})

//actions
export const actions = () => ({
    getPolls({ commit }) {
        console.log(state.polls)
        axios.get(`http://localhost:5500/ended-vote`)
        .then(response => {
            commit('addPolls', response.data)
        })
    }
})

//mutations
export const mutations = () => ({
    addPolls(state, polls) {
        state.polls = polls
    }
})