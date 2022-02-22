import axios from 'axios'
import { io } from "socket.io-client"
export default {
    increaseVote({commit}, data) {
        axios.put(
            `http://localhost:5500/vote/increase`,
            data
        )
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error);
        })
    },
    decreaseVote({commit}, data) {
        axios.put(
            `http://localhost:5500/vote/decrease`,
            data
        )
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error);
        })
    }
}