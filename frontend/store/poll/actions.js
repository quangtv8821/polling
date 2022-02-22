import axios from "axios"
import Swal from 'sweetalert2'

export default {
    createPoll({commit}, poll) {
        axios.post(
            'http://localhost:5500/polls',
            poll
        )
        .then(res => {
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
    deletePoll({commit}, id) {
        //phai co tham so dau tien la commit de nhan data
        axios.delete(`http://localhost:5500/polls/${id}`)
        .then(res => {
            console.log(res.data);
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
                    this.$router.go()
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