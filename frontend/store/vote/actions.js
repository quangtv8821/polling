import axios from 'axios'
import { io } from "socket.io-client"
export default {
    increaseVote({commit}, data) {
        axios.post(
            `http://localhost:5500/increase-vote`,
            data
        )
        .then(res => {
            // console.log(res.data);
            // io.connect(`http://localhost:5500/`, { secure: true }).emit('increase', res.data)
        })
        .catch(error => {
            console.log(error);
        })
    },
    setStatusVote({commit}, data) {
        axios.post(
            `http://localhost:5500/increase-vote/vote`,
            data
        )
        .then(res => {
        })
        .catch(error => {
            console.log(error);
        })
    },
    decreaseVote({commit}, data) {
        axios.post(
            `http://localhost:5500/decrease-vote`,
            data
        )
        .then(res => {
        })
        .catch(error => {
            console.log(error);
        })
    },
    setStatusVoteDecrease({commit}, data) {
        axios.post(
            `http://localhost:5500/decrease-vote/vote`,
            data
        )
        .then(res => {
        })
        .catch(error => {
            console.log(error);
        })
    },
}