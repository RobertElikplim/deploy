<template>
  <center>
    <div class="container mt-3 mb-3 d-flex justify-content-center">
      <div class="card px-3 py-3 alert-primary clearfix">
        <div class="card-body">
        <h6 class="information mt-0">Fill in the form below to add a new INVOICE LINE ITEM</h6>

            <div class="row  mt-4">
              <div class="col-sm-12">
                <div class="form-group">
                   <div id="v-model-select">
                    <select class="form-control" v-model="invoiceID">
                        <option disabled value="">Click To Select Invoice ID</option>
                        <option  v-for="invoice in invoiceSelection" :key="invoice.invoice_id" > {{invoice.invoice_id }}</option>
                    </select>
                </div>
                </div>
              </div>
            </div>

            <div class="row  mt-4">
              <div class="col-sm-12">
                <div class="form-group">
                   <div id="v-model-select">
                    <select class="form-control" v-model="itemID">
                        <option disabled value="">Click To Select Item Type</option>
                        <option  v-for="item in itemSelection" :value="item.item_id" :key="item.item_id" > {{item.item_type}}</option>
                    </select>
                </div>
                </div>
              </div>
            </div> 

            <div class="row  mt-3">
              <div class="col-sm-12">
                <div class="form-group">
                  <input class="form-control" type="text" placeholder="Item Price" v-model="itemPrice" required/>
                </div>
              </div>
            </div>

             <div class="row  mt-4">
              <div class="col-sm-12">
                <div class="form-group">
                   <div id="v-model-select">
                    <select class="form-control" v-model="serviceDesc">
                        <option disabled value="">Click To Select Service Description</option>
                        <option  v-for="service in serviceSelection" :value="service.service_id" :key="service.service_id" > {{service.service_desc}}</option>
                    </select>
                </div>
                </div>
              </div>
            </div> 

            <div class="control">
              <button class="btn btn-info mt-4" @click.prevent="saveInvoiceLine">SAVE</button>
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
      invoiceSelection: [],
      itemSelection: [],
      serviceSelection: [],
      invoiceID: "",
      itemID: "",
      itemPrice: "",
      serviceDesc: "",
    };
  },
  created(){
    let apiURL1 = `http://localhost:3000/invoices`; 
        axios.get(apiURL1).then((res) => { 
          this.invoiceSelection = res.data;
    });
     let apiURL2 = `http://localhost:3000/items`; 
        axios.get(apiURL2).then((res) => { 
          this.itemSelection = res.data;
    });
     let apiURL3 = `http://localhost:3000/services`; 
        axios.get(apiURL3).then((res) => { 
          this.serviceSelection = res.data;
    });
  },
  methods: {
    // Create New customer
    async saveInvoiceLine() {
      try {
        await axios.post("http://localhost:3000/invoicesline", {
          invoice_id: this.invoiceID,
          item_id: this.itemID,
          item_price: this.itemPrice,
          service_id: this.serviceDesc,
        });
        this.$router.push("/invoiceline");
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