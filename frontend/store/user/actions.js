import axios from "axios"
import Swal from 'sweetalert2'
export default {
  async login({ commit }, user) {
    try {
      const res = await this.$auth.loginWith("local", {
        data: user
      })
      if (res.data.message == "logged in") {
        user.role = res.data.role
        user.token = res.data.token
        user.id = res.data.id
        commit('addUser', user)
        this.$router.push("/");
      }
    } catch (e) {
      this.error = e.response.data.message;
    }
  },
  async logout({ commit }) {
    commit("clearStorage")
    await this.$auth.logout();
    this.$router.push('/login')
  },
  register({ commit }, user) {
    axios.post(
      'http://localhost:5500/register',
      user
    )
      .then(res => {
        if (res.data.message === "Register success") {
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
  },
  async authJwt({ commit }) {
    axios.defaults.headers.common['authorization'] = 'Bearer ' + localStorage.getItem('user_token')
    const login = await axios.get('http://localhost:5500/user')
    if (login.data.message === 'Unauthorized!') {
      this.$router.push("/login")
    }
  },
  async loginWithGoogle({commit}) {
    try {
      await this.$auth.loginWith("google")
      this.$router.push('/')
    } catch (error) {
      console.log(error);
    }
  }
}