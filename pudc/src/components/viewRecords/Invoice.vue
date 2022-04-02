<template>
<div class="container">
    <div class="row ">
      <div class="col-lg-7 mx-auto">
        <div class="card mt-2 mx-auto p-4 alert-primary clearfix">
            <div class="card-body alert-primary clearfix">
              <div class=" text-center">
                <h3>Invoice # {{ invoice_id }} </h3>
              </div>
              <div class="container">
                  <form id="contact-form" role="form">
                      <div class="controls">
                        <!-- row -->
                        <div class="row">
                        <h6>Customer Details</h6>                        
                        <hr class="solid">
                          <div class="col-md-6">
                            <div class="form-group"> <label>Customer Name</label> <input type="text" class="form-control" v-model="customer_name" readonly> </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group"> <label>Phone Number</label> <input type="text" class="form-control" v-model="phone" readonly> </div>
                          </div>
                        </div>                        
                        <!-- row -->
                        <div class="row my-3">
                         <h6>Invoice Details</h6>                        
                        <hr class="solid">
                          <div class="col-md-6">
                            <div class="form-group"> <label>Invoice Date</label><ul class="list-group"><li class="list-group-item bg-light">{{ dateTime(invoice_date)}}</li></ul></div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group"> <label>Pick-Up Date</label><ul class="list-group"><li class="list-group-item bg-light">{{ dateTime(pick_up_date)}}</li></ul></div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group"> <label>Pick-Up Status</label><input type="text" class="form-control" v-model="picked_up" readonly></div>
                          </div>
                        </div>                  
                        <!-- row -->
                        <div class="row my-3">
                          <div class="col-md-12">
                            <div class="form-group"><label>Special Requests</label> <textarea id="form_message" name="message" class="form-control" placeholder="Order Notes and Special Requests go here." rows="4" readonly></textarea> </div>
                          </div>
                        </div>
                        <!-- row -->
                        <div class="row my-3">
                          <div class="col-md-6">
                            <div class="form-group"> <label>Invoice Total</label> <input type="text" class="form-control" v-model="invoice_total" readonly> </div>
                          </div>
                        </div>
                        <!-- row -->
                        <div class="row my-3">
                        <h6>Payment and Balance Details</h6>
                        <hr class="solid"> 
                          <div class="col-md-6">
                            <div class="form-group"> <label>Payment Status</label> <input type="text" class="form-control" v-model="payment_status" readonly> </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group"> <label>Payment Amount</label> <input type="text" class="form-control" v-model="invoice_total" readonly> </div>
                          </div>                          
                        </div>
                         <!-- row -->
                        <div class="row my-3">
                          <div class="col-md-6">
                            <div class="form-group"> <label>Transaction Code</label> <input type="text" class="form-control" placeholder="12546" readonly> </div>
                          </div>
                        </div>                                       
                        <!-- row -->
                        <div class="row text-center mt-4">                        
                          <div class="col-md-12"><router-link :to="{ name: 'EditInvoice', params: `${this.$route.params.id}` }" class="btn btn-info is-small">Edit Invoice</router-link></div>
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
import moment from "moment";
 
export default {
  name: "Invoice",
  data() {
    return {
      customer_name: "",
      phone: "",
      invoice_id: "",
      invoice_date : "",
      payment_status: "",
      invoice_total: "",
      pick_up_date: "",
      picked_up: "",

    };
  },
  created: function () {
    this.getInvoiceById();
  }, 
  methods: {

    dateTime(value) {
      return moment(value).format('MM-DD-YYYY');
    },

    async getInvoiceById() {
      try {
        const response = await axios.get(
          `http://localhost:3000/invoiceList/${this.$route.params.id}`
        );
        this.customer_name = response.data.customer_name;
        this.phone = response.data.phone;
        this.invoice_id = response.data.invoice_id;
        this.invoice_date = response.data.invoice_date;
        this.payment_status = response.data.payment_status;
        this.invoice_total = response.data.invoice_total;
        this.pick_up_date = response.data.pick_up_date;
        this.picked_up = response.data.picked_up;
      } catch (err) {
        console.log(err);
      }
    },
    
    payStatus: function(){
      if(this.paymentAmount > this.invoiceTotal){
        return this.paidStatus = "Overpaid"
      }
      else if(this.paymentAmount == 0){
        return this.paidStatus = "Not Paid"
      }
      else if(this.paymentAmount == this.invoiceTotal){
        return this.paidStatus = "Paid"
      }
      else if(this.paymentAmount < this.invoiceTotal){
        return this.paidStatus = "Partially Paid"
      }
    },
  },
};
</script>