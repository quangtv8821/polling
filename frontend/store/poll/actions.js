import axios from "axios"
import Swal from 'sweetalert2'

export default {
    createPoll({commit}, poll) {
        axios.post(
            'http://localhost:5500/create-poll',
            poll
        )
        .then(res => {
            console.log(res.data.message);
            if(res.data.message === "Add poll successful") {
                Swal.fire({
                    title: 'Add poll success',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                }).then((result) => {
                if (result.isConfirmed) {
                        this.$router.push('/')
                    }
                })
            }}
        )
        .catch(error => {
            console.log(error);
        })
    },
    deletePoll(data) {
        axios.post(
            'http://localhost:5500/delete-poll',
            data
        )
        .then(res => {
            if(res.data.message === "Delete poll success") {
                Swal.fire({
                    title: 'Delete poll successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                }).then((result) => {
                if (result.isConfirmed) {
                    this.$router.push("/login")
                    //refresh lai trang la tot nhat
                }
            })
            }
        })
        .catch(error => {
            console.log(error);
        })
    }
}