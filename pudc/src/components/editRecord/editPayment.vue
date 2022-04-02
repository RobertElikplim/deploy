<template>
  <center>
    <div class="container mt-3 mb-3 d-flex justify-content-center">
      <div class="card px-3 py-3 alert-primary clearfix">
        <div class="card-body">
        <h6 class="information mt-0">Fill in the form below to edit PAYMENT for a VENDOR</h6>

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
                  <input class="form-control" type="text" placeholder="Payment Due" v-model="payAmount" required/>
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
              <button class="btn btn-info mt-4" @click.prevent="updatePayment">UPDATE</button>
            </div>   

        </div>
      </div>
    </div>
  </center>  
</template>

<script>
import axios from "axios";
 
export default {
  data() {
    return {
      serviceSelection: [],
      vendorSelection: [],
      amountDue: "",
      payAmount: "",
      balDue: "",
      serviceDesc: "",
      vendorID: "",
    };
  },
  created: function () {
    this.getCustomerById();
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
    async getCustomerById() {
      try {
        const response = await axios.get(
          `http://localhost:3000/vendorpay/${this.$route.params.id}`
        );
        this.amountDue = response.data.amount_due;
        this.payAmount = response.data.payment_amount;
        this.balDue = response.data.balance_due;
        this.serviceDesc = response.data.service_desc;
        this.vendorID = response.data.vendor_id;
      } catch (err) {
        console.log(err);
      }
    },
 
    async updatePayment() {
      try {
        await axios.put(
          `http://localhost:3000/vendorpay/${this.$route.params.id}`,
          {
            amount_due: this.amountDue,
            payment_amount: this.payAmount,
            balance_due: this.balDue,
            service_desc: this.serviceDesc,
            vendor_id: this.vendorID,
          }
        );
        this.$router.push("/payments");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>