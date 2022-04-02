<template>
<div class="container my-5">
    <div class="row ">
      <div class="col-lg-7 mx-auto">
        <div class="card mt-2 mx-auto p-4 alert-primary clearfix">
            <div class="card-body alert-primary clearfix">
              <div class=" text-center">
                <h3>Editing Invoice # {{ invoice.invoice_id }} </h3>
              </div>
              <div class="container">
                  <form id="contact-form" role="form">
                      <div class="controls">
                        <!-- row -->
                        <div class="row">
                        <h6>Customer Details</h6>                        
                        <hr class="solid">                           
                          <div class="col-md-6">
                            <div class="form-group"> <label>Customer Name</label> <input type="text" class="form-control" v-model="invoice.customer_name" readonly> </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group"> <label>Phone Number</label> <input type="text" class="form-control" v-model="invoice.phone" readonly> </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group"> <label>Pick-Up Status</label>
                              <select class="form-control" v-model="invoice.picked_up">
                                  <option disabled value="">Click To Select Item Type</option>
                                  <option value="Picked">Picked</option>
                                  <option value="Not Picked">Not Picked</option>
                              </select>
                            </div>
                          </div>                                                
                        </div>                       
                        <!-- row -->                        
                        <div class="row my-3">
                        <h6>Invoice Details</h6>                        
                        <hr class="solid">                         
                          <div class="col-md-6">
                            <div class="form-group"> <label>Invoice Date: {{ invoice.invoice_date = dateTime(invoice.invoice_date) }}</label><input class="date form-control" type="date" v-model="invoice.invoice_date" required></div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group"> <label>Pick-Up Date: {{ invoice.pick_up_date = dateTime(invoice.pick_up_date) }} </label><input class="date form-control" type="date" v-model="invoice.pick_up_date" required></div>
                          </div>
                        </div>

                        <!-- row -->
                        <div class="row my-3">
                          <div class="col-md-12">
                            <div class="form-group"><label>Special Requests </label> <textarea id="form_message" name="message" class="form-control" placeholder="Order Notes and Special Requests go here." rows="4"></textarea> </div>
                          </div>
                        </div>
                        <!-- row -->
                        <div class="row my-3">
                          <div class="col-md-6">
                            <div class="form-group"> <label>Invoice Total</label> <input type="text" class="form-control" v-model="invoice.invoice_total" readonly> </div>
                          </div>
                        </div>
                        <h6>Payment and Balance Details</h6>
                        <hr class="solid"> 
                        <!-- row -->
                        <div class="row my-3">
                          <div class="col-md-6">
                            <div class="form-group"> <label>Payment Status</label>
                              <select class="form-control" v-model="invoice.payment_status">
                                  <option disabled value="">Click To Select Item Type</option>
                                  <option value="Paid">Paid</option>
                                  <option value="Not Paid">Not Paid</option>
                                  <option value="Partially Paid">Partially Paid</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group"> <label>Payment Amount</label> <input type="number" class="form-control" v-model="invoice.payment_amount"> </div>
                          </div>                          
                        </div>
                         <!-- row -->
                        <div class="row my-3">
                          <div class="col-md-6">
                            <div class="form-group"> <label>Transaction Code</label> <input type="text" class="form-control" placeholder="12546"> </div>
                          </div>
                        </div>                                       
                        <!-- row -->
                        <div class="row text-center mt-4">                        
                          <div class="col-md-12"><button class="btn btn-success mt-4" @click.prevent="updateInvoice">Save Changes</button></div>
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
  data() {
    return {
      invoice : [],
      // invoice_id: "",
      // invoice_date: "",
      // pick_up_date: "",
      // picked_up: "",
      // customer_name: "",
      // phone: "",
      // invoice_total: "",
      // payment_status: "",
      // payment_amount: ""
    };
  },
  async created() {
    await this.getInvoiceById();
  },
  mounted() {

  },
  methods: {
    dateTime(value) {
      return moment(value).format('YYYY-MM-DD');
    },
    async getInvoiceById() {
      try {
        const response = await axios.get(
          `invoiceList/${this.$route.params.id}`
        );
        this.invoice = response.data
        // this.invoice_id = response.data.invoice_id;
        // this.invoice_date = response.data.invoice_date;
        // this.pick_up_date = response.data.pick_up_date  ;     
        // this.customer_name = response.data.customer_name;
        // this.phone = response.data.phone;
        // this.picked_up = response.data.picked_up;
        // this.invoice_total = response.data.invoice_total;
        // this.payment_status = response.data.payment_status;
        // this.payment_amount = response.data.payment_amount
      } catch (err) {
        console.log(err);
      }
    },
    async updateInvoice() {
      try {
        await axios.put(
          `invoices/${this.$route.params.id}`,
          {
            cust_id: this.invoice.customer_id,
            invoice_date: this.invoice.invoice_date,
            pick_up_date: this.invoice.pick_up_date,
            picked_up: this.invoice.picked_up,
            payment_status: this.invoice.payment_status,
            payment_amount: this.invoice.payment_amount,
            invoice_total: this.invoice.invoice_total
          }
        );
        this.$router.push(`/invoice/view/${this.$route.params.id}`);
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
    // }
  }
}
</script>