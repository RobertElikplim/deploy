<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center mt-5">REGISTER</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>   First Name</label>
                    <input type="text"  class="form-control" v-model="login.first_name" required>
                </div><br>

                <div class="form-group">
                    <label>   Last Name</label>
                    <input type="text" class="form-control" v-model="login.last_name" required>
                </div><br>

                <div class="form-group">
                    <label>   Username</label>
                    <input type="text"  class="form-control" v-model="login.username" required>
                </div><br>

                <div class="form-group">
                    <label>   Password</label>
                    <input type="password" class="form-control" v-model="login.user_password" required>
                </div><br>

                <div class="form-group">
                    <label>   Email</label>
                    <input type="email" class="form-control" v-model="login.email" required>
                </div><br>

                <center>
                <div class="form-group">
                    <button class="btn btn-success" @click="removeIt">Register</button>
                    <a href="/" class="btn btn-primary">LOGIN</a><br>
                </div>
                </center>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default{
    data(){
        return{
            login: {
                first_name: '',
                last_name: '',
                username: '',
                user_password: '',
                email: '',
        }
        }
    },
    methods: {
        handleSubmitForm(){
            let URL = 'http://localhost:3000/register';
            axios.post(URL, this.login).then(() => {
                this.$router.push('/')
                this.login = {
                    first_name: '',
                    last_name: '',
                    username: '',
                    user_password: '',
                    email: '',
                }
            }).catch(error => {
                console.log(error)
            });
        },
        async removeIt() {
            localStorage.removeItem("stuff");
        }
    }
}
</script>