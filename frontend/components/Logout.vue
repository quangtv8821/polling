<template>
    <v-btn icon color="red" @click="logout">
        <v-icon>mdi-logout</v-icon>
    </v-btn>
</template>

<script>
export default {
    methods: {
        logout() {
            localStorage.removeItem("user_token")
            window.location.href = "http://localhost:3000/login"
        }
    }
}
</script>