<template>
<div class="container">
    <div class="row ">
      <div class="col-lg-7 mx-auto">
        <div class="card mt-2 mx-auto p-4 alert-primary clearfix">
            <div class="card-body alert-primary clearfix">
              <div class=" text-center">
                <h1>New Invoice</h1>
              </div>
              <div class="container">
                  <form id="contact-form" role="form">
                      <div class="controls">
                        <!-- row -->
                        <div class="row my-3">
                          <div class="col-md-6">
                            <div class="form-group"> <label>Invoice Date</label> <input class="form-control" type="text" v-model="invoice_date" required> </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group"> <label>Pick-Up Date</label> <input class="form-control" type="date" v-model="pick_up_date" required> </div>
                          </div>
                        </div>
                        <!-- row -->
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group"> <label>Customer Name</label> <input type="text" class="form-control" v-model="full_name" readonly> </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group"> <label>Phone Number</label> <input type="text" class="form-control" v-model="phone" readonly> </div>
                          </div>
                        </div>
                        <!-- row -->
                        <div class="row my-3">
                          <div class="col-md-12">
                            <div class="form-group"><label>Special Requests</label> <textarea id="form_message" name="message" class="form-control" placeholder="Order Notes and Special Requests go here." rows="4"></textarea> </div>
                          </div>
                        </div>
                        <!-- row -->
                        <div class="row text-center">                        
                          <div class="col-md-12"> <button class="btn btn-success mt-4" @click.prevent="saveInvoice">Add Invoice Items</button> </div>
                          <div class="col-md-12"> <button class="btn btn-warning mt-4" @click.prevent="saveInvoice">Cancel</button> </div>
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
// import axios
import axios from "axios";
 
export default {
  data() {
    return {
      full_name: '',
      phone: '',
      custID: "",
      invoice_date : new Date().toISOString().slice(0,10),
      payment_status: "",
      payment_amount: "",
      invoice_total: "",
      pick_up_date: "",
      pickup_status: "",
      picked_up: "",
    };
  },
  created(){
    let apiURL1 = `customers/${this.$route.params.id}`; 
        axios.get(apiURL1).then((res) => { 
        this.full_name = res.data.first_name + ' ' + res.data.last_name;
        this.phone = res.data.phone;
    });
  },
  methods: {
    async saveInvoice() {
      try {
        await axios.post("https://pudcapi.herokuapp.com/invoices", {
          cust_id: `${this.$route.params.id}`,
          invoice_date: this.invoice_date,
          payment_status: "Not Paid",
          payment_amount: this.payment_amount,
          invoice_total: this.invoice_total,
          pick_up_date: this.pick_up_date,
          picked_up: "Not Picked",
        });
        this.$router.push("/invoices");
      } catch (err) {
        console.log(err);
      }
    },
    // payStatus: function(){
    //   if(this.paymentAmount > this.invoiceTotal){
    //     return this.paidStatus = "Overpaid"
    //   }
    //   else if(this.paymentAmount == 0){
    //     return this.paidStatus = "Not Paid"
    //   }
    //   else if(this.paymentAmount == this.invoiceTotal){
    //     return this.paidStatus = "Paid"
    //   }
    //   else if(this.paymentAmount < this.invoiceTotal){
    //     return this.paidStatus = "Partially Paid"
    //   }
    // },
    // pickedOrNot: function(){
    //   if(this.paidStatus === "Paid"){
    //     return this.picked = "Not Picked"
    //   }
    //   else{
    //     return this.picked = "Not Picked"
    //   }
    // },
  },
};
</script>

<style>
    .btn {
        margin-right: 10px;
    }
</style>