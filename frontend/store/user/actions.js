import axios from "axios"
import Swal from 'sweetalert2'
export default {
    login({commit} , user) {
        axios.post(
            'http://localhost:5500/login',
            user
        )
        .then(res => {
            if(res.data.message === "logged in") {
                user.role = res.data.role
                user.token = res.data.token
                user.id = res.data.id
                commit('addUser', user)
                localStorage.setItem('user_token', res.data.token)
                this.$router.push('/')
            }
        })
        .catch(error => {
            console.log(error);
        })
    },
    logout({commit}) {
        commit("clearState")
        localStorage.removeItem("user_token")
        this.$router.push('/login')
    },
    register({commit}, user) {
        axios.post(
            'http://localhost:5500/register',
            user
        )
        .then(res => {
            if(res.data.message === "Register success") {
                Swal.fire({
                    title: 'Register success',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                }).then((result) => {
                if (result.isConfirmed) {
                        this.$router.push('/login')
                    }
                })
                
            }
        })
        .catch(error => {
            console.log(error);
        })
    }
}