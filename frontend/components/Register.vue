<template>
    <v-container align="center">
        <v-card
            elevation="20"
            outlined
            shaped
            align="center"
            class="pa-8"
            width="400"
        >
            <v-card-title class="justify-center">Register</v-card-title>

            <v-form
                ref="form"
                lazy-validation
            >
                <v-text-field
                    v-model="user.email"
                    :counter="30"
                    label="E-mail"
                    outlined
                    required
                    :rules="emailRules"
                ></v-text-field>

                <v-text-field
                    v-model="user.password"
                    type="password"
                    label="Password"
                    outlined
                    required
                    :rules="passwordRules"
                ></v-text-field>

                <v-text-field
                    v-model="user.passwordConfirm"
                    type="password"
                    label="PasswordConfirm"
                    outlined
                    required
                    :rules="passwordRules"
                ></v-text-field>

                <v-btn
                    color="main"
                    class="mr-4 white--text"
                    width="100%"
                    height="50"
                    @click="checkForm"
                >
                Register
                </v-btn>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
export default {
    auth: false,
    data() {
        return {
            user : {
                email: null,
                password: null,
                passwordConfirm: null
            },
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
                v => !!v || 'Password is required',
            ],
        }
    },
    methods: {
        checkForm() {
            this.$refs.form.validate()
            if(this.user.password != this.user.passwordConfirm) {
                alert("Password must be the same")
                return
            }
            this.$store.dispatch('user/register', this.user)
        },
        validEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
}
</script>