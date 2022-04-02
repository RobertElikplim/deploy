<template>

<div class="container">
    <div class="row ">
      <div class="col-lg-10 mx-auto">
        <div class="card mt-2 mx-auto p-4 alert-primary clearfix">
            <div class="card-body alert-primary clearfix">
              <div class="container">
                  <form id="contact-form" role="form">
                      <div class="controls">
                        <!-- row -->
                        <div class="row">
                        <h4>Customer Details</h4>                        
                        <hr class="solid">
                          <div class="col-md-6">
                            <div class="form-group"> <label>First Name</label><input class="form-control" type="text" placeholder="First Name" v-model="firstName" required/></div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group"> <label>Last Name</label><input class="form-control" type="text" placeholder="First Name" v-model="lastName" required/></div>
                          </div>                          
                          <div class="col-md-6">
                            <div class="form-group"> <label>Phone Number XXX-XXX-XXXX</label><input class="form-control" type="text" placeholder="First Name" v-model="phoneNum" required/></div>
                          </div>
                        </div>                                                        
                        <!-- row -->
                        <div class="row text-center mt-4">                        
                          <div class="col-md-12">
                            <button class="btn btn-info mt-4" @click.prevent="updateCustomer">UPDATE</button>
                          </div>
                        </div>                        
                      </div>
                   </form>
                </div>
             </div>
           </div> <!-- /.8 -->
         </div> <!-- /.row-->
      </div>
</div>
</template>

<script>
import axios from "axios";
 
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      phoneNum: "",
    };
  },
  created: function () {
    this.getCustomerById();
  },
  methods: {
    async getCustomerById() {
      try {
        const response = await axios.get(
          `customers/${this.$route.params.id}`
        );
        this.firstName = response.data.first_name;
        this.lastName = response.data.last_name;
        this.phoneNum = response.data.phone;
      } catch (err) {
        console.log(err);
      }
    },
 
    async updateCustomer() {
      try {
        await axios.put(
          `customers/${this.$route.params.id}`,
          {
            first_name: this.firstName,
            last_name: this.lastName,
            phone: this.phoneNum,
          });
        this.$router.push(`/customers/${this.$route.params.id}`);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>