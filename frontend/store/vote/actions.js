import axios from 'axios'
export default {
  increaseVote({ commit }, data) {
    axios.put(
      `http://localhost:5500/vote/increase`,
      data
    )
  },
  decreaseVote({ commit }, data) {
    axios.put(
      `http://localhost:5500/vote/decrease`,
      data
    )
  }
}