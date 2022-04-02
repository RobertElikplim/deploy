<template>
  <center>
    <div class="container mt-3 mb-3 d-flex justify-content-center">
      <div class="card px-3 py-3 alert-primary clearfix">
        <div class="card-body">
        <h6 class="information mt-0">Fill in the form below to add a new PAYMENT for a VENDOR</h6>

            <div class="row  mt-3">
              <div class="col-sm-12">
                <div class="form-group">
                  <input class="form-control" type="text" placeholder="Amount Due" v-model="amountDue" required/>
                </div>
              </div>
            </div>

            <div class="row  mt-3">
              <div class="col-sm-12">
                <div class="form-group">
                  <input class="form-control" type="text" placeholder="Payment Made" v-model="payAmount" required/>
                </div>
              </div>
            </div>

            <div class="row  mt-3">
              <div class="col-sm-12">
                <div class="form-group">
                  <input class="form-control" type="text" placeholder="Balance Due" v-model="balDue" required/>
                </div>
              </div>
            </div>

            <div class="row  mt-4">
              <div class="col-sm-12">
                <div class="form-group">
                   <div id="v-model-select">
                    <select class="form-control" v-model="serviceDesc">
                        <option disabled value="">Click To Select Service Description</option>
                        <option  v-for="service in serviceSelection" :key="service.service_desc" > {{service.service_desc }}</option>
                    </select>
                </div>
                </div>
              </div>
            </div> 

            <div class="row  mt-4">
              <div class="col-sm-12">
                <div class="form-group">
                   <div id="v-model-select">
                    <select class="form-control" v-model="vendorID">
                        <option disabled value="">Click To Select Vendor Name</option>
                        <option  v-for="vendor in vendorSelection" :value="vendor.vendor_id" :key="vendor.vendor_id" > {{vendor.vendor_name }}</option>
                    </select>
                </div>
                </div>
              </div>
            </div> 

            <div class="control">
              <button class="btn btn-info mt-4" @click.prevent="savePayment">SAVE</button>
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
      serviceSelection: [],
      vendorSelection: [],
      amountDue: "",
      payAmount: "",
      serviceDesc: "",
      vendorID: "",
    };
  },
  created(){
    let apiURL = `http://localhost:3000/services`; 
        axios.get(apiURL).then((res) => { 
          this.serviceSelection = res.data;
    });
    let apiURL1 = `http://localhost:3000/vendors`; 
        axios.get(apiURL1).then((res) => { 
          this.vendorSelection = res.data;
    });
  },
  methods: {
    // Create New customer
    async savePayment() {
      try {
        await axios.post("http://localhost:3000/vendorpay", {
          amount_due: this.amountDue,
          payment_amount: this.payAmount,
          service_desc: this.serviceDesc,
          vendor_id: this.vendorID,
        });
        this.$router.push("/payments");
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