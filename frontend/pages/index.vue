<template>
  <v-app>
    <Navbar />
    <!-- <Header /> -->
    <v-container class="mx-auto pt-8 pb-8">
      <Tab />
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import { io } from "socket.io-client"
export default {
    middleware: 'auth',
    data () {
        return {
            tab: null,
            messageRxd: ''
        }
    },
    created() {
		this.connectToServer()
	},
    mounted () {
        // this.socket = this.$nuxtSocket({ channel: '/', withCredentials: true })
        // console.log(this.getMessage());
    },
    methods: {
        getMessage () {
            return new Promise((resolve) => {
                this.socket.emit('getMessage', { id: 'abc123' }, (resp) => {
                    this.messageRxd = resp
                    resolve()
                })
            })
        },
        connectToServer() {
			this.socket = io.connect(`http://localhost:5500/`, { secure: true })
			// this.socket.on('data', msg => {
			// 	this.data = msg
			// 	console.log(this.data);
			// });
		},
    }
}
</script>