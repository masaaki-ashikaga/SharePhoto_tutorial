<template>
   <div class="container--small">
       <ul class="tab">
           <li classa="tab__item" :class="{'tab__item--active':tab===1}" @click="tab = 1">Login</li>
           <li classa="tab__item" :class="{'tab__item--active':tab===2}" @click="tab = 2">Register</li>
       </ul>
       <div class="panel" v-show="tab === 1">
           Login Form
            <div class="panel" v-show="tab === 1">
                <form class="form" @submit.prevent="login">
                    <label for="login-email">Email</label>
                    <input type="text" class="form__item" id="login-email" v-model="loginForm.email">
                    <label for="login-password">Password</label>
                    <input type="password" class="form__item" id="login-password" v-model="loginForm.password">
                    <div class="form__button">
                        <button type="submit" class="button button--inverse">login</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="panel" v-show="tab === 2">
           Register Form
            <div class="panel" v-show="tab === 2">
                <form class="form" @submit.prevent="register">
                    <label for="username">Name</label>
                    <input type="text" class="form__item" id="username" v-model="registerForm.name">
                    <label for="login-email">Email</label>
                    <input type="text" class="form__item" id="email" v-model="registerForm.email">
                    <label for="login-password">Password</label>
                    <input type="password" class="form__item" id="password" v-model="registerForm.password">
                    <label for="password-confirmation">Password (confirm)</label>
                    <input type="password" class="form__item" id="password-confirmation" v-model="registerForm.password_confirmation">
                    <div class="form__button">
                        <button type="sumit" class="button button--incerse">login</button>
                    </div>
                </form>
            </div>
        </div>
   </div>
</template>

<script>
export default {
    data() {
        return {
            tab: 1,
            loginForm: {
                email: '',
                password: '',
            },
            registerForm: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            }
        }
    },
    methods: {
        login() {
            console.log(this.loginForm)
        },
        async register() {
            await this.$store.dispatch('auth/register', this.registerForm)
            this.$router.push('/')
        },
    }
}
</script>