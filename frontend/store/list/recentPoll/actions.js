import axios from "axios"

export default {
	getPolls({ commit }) {
		axios.get(`http://localhost:5500/polls?status=1`)
			.then(response => {
				commit('ADD_POLLS', response.data)
			})
	}
}