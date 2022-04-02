<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center  mt-5">LOGIN</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>   Username</label>
                    <input placeholder="Username" type="text" class="form-control" v-model="username" v-on:keyup.enter="openLogin"/>
                </div><br>

                <div class="form-group">
                    <label>   Password</label>
                    <input placeholder="Password" type="password" class="form-control" v-model="user_password" v-on:keyup.enter="openLogin"/>
                </div><br>
                <center>
                    <div class="form-group">
                        <button @click="openLogin" class="btn btn-success" type="submit">LOGIN</button>
                        <a href="/register" class="btn btn-info">REGISTER</a><br>
                        <a href="/reset" style="text-decoration:none;">Forgot password/username? Reset</a><br>
                    </div>
                    <div class="form-group">
                        <p class="text-danger">{{msg}}</p><br>
                    </div>
                </center>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            username: "",
            user_password: "",
            signin: [],
            msg: '',
        }
    },
    methods: {
        async openLogin() {
        try {
            let URL = (`http://localhost:3000/login/${this.username}/${this.user_password}`);
            await axios.get(URL).then((res) => {
                this.signin = res.data;
                localStorage.setItem('stuff', JSON.stringify(this.signin));
                if( Object.keys(this.signin).length == 1 ){
                    this.$router.push('/dashboard')
                    return this.msg = "Success!"
                }
                else{
                    console.log("A username and password must be present");
                    return this.msg = "Username and or password is incorrect!!!"
                }
            })
        } catch (err) {
            console.log(err);
            }
        },
    }
}
</script>