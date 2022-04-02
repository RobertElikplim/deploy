<template>
  <center>
    <div class="container mt-5 mb-5 d-flex justify-content-center">
      <div class="card px-5 py-5 alert-primary clearfix">
        <div class="card-body">
        <h6 class="information mt-4">Fill in the form below to add a new CUSTOMER</h6>

            <div class="row  mt-4">
              <div class="col-sm-12">
                <div class="form-group">
                  <input class="form-control" type="text" placeholder="First Name" v-model="firstName" required/>
                </div>
              </div>
            </div>

            <div class="row  mt-3">
              <div class="col-sm-12">
                <div class="form-group">
                  <input class="form-control" type="text" placeholder="Last Name" v-model="lastName" required/>
                </div>
              </div>
            </div> 

            <div class="row  mt-3">
              <div class="col-sm-12">
                <div class="form-group">
                  <input class="form-control" type="text" placeholder="XXX-XXX-XXXX" pattern="^\d{3}-\d{3}-\d{4}$" aria-describedby="phoneHelpBlock" v-model="phoneNum" required/>
                </div>
                <span id="phoneHelpBlock" class="form-text text-danger text-muted">
                    10 digit phone number should be entered with dashes.
                </span>
              </div>
            </div> 

            <div class="control">
              <button class="btn btn-info mt-4" @click.prevent="saveCustomer">SAVE</button>
            </div>   
            
        </div>
      </div>
    </div>
  </center>  
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      phoneNum: "",
    };
  },
  methods: {
    // Create New customer
    async saveCustomer() {
      try {
        await axios.post("customers", {
          first_name: this.firstName,
          last_name: this.lastName,
          phone: this.phoneNum,
        });
        this.$router.push("/customers");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
    .btn {
        margin-right: 10px;
    }
</style>