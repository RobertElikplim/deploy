<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center mt-5">RESET PASSWORD/USERNAME</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>   Last Name</label>
                    <input type="text" class="form-control" v-model="lname" required>
                </div><br>

                <div class="form-group">
                    <label>   Username</label>
                    <input type="text"  class="form-control" v-model="user" required>
                </div><br>

                <div class="form-group">
                    <label>   Password</label>
                    <input type="password" class="form-control" v-model="pass" required>
                </div><br>

                <div class="form-group">
                    <label>   Email</label>
                    <input type="email" class="form-control" v-model="mail" required>
                </div><br>

                <center>
                <div class="form-group">
                    <button @click="resetLogin" class="btn btn-success" type="submit">RESET</button>
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
            lname: '',
            user: '',
            pass: '',
            mail: '',
        }
    },
    methods: {
        async resetLogin() {
      try {
        await axios.put(
          `https://pudcapi.herokuapp.com/user/${this.mail}/${this.lname}`,
          {
            username: this.user,
            user_password: this.pass,
          });
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    }
}
</script>