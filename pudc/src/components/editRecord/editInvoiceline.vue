<template>
  <center>
    <div class="container mt-3 mb-3 d-flex justify-content-center">
      <div class="card px-3 py-3 alert-primary clearfix">
        <div class="card-body">
        <h6 class="information mt-0">Fill in the form below to edit INVOICE LINE ITEM</h6>

            <div class="row  mt-3">
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

            <div class="row  mt-3">
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
                <span id="phoneHelpBlock" class="form-text text-warning">
                    Enter new price only!
                </span>
              </div>
            </div>

            <div class="row  mt-3">
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
              <button class="btn btn-info mt-4" @click.prevent="updateInvline();updateInvoiceTotalByID();">UPDATE</button>
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
      invoiceSelection: [],
      itemSelection: [],
      serviceSelection: [],
      invoiceID: "",
      itemID: "",
      itemPrice: "",
      serviceDesc: "",
    };
  },
  created: function () {
    this.getInvlineByID();
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
    async getInvlineByID() {
      try {
        const response = await axios.get(
          `http://localhost:3000/invoicesline/${this.$route.params.id}`
        );
        this.invoiceID = response.data.invoice_id;
        this.itemID = response.data.item_id;
        this.itemPrice = response.data.item_price;
        this.serviceDesc = response.data.service_id;
      } catch (err) {
        console.log(err);
      }
    },

    async updateInvoiceTotalByID() {
      try {
        await axios.put(
          `http://localhost:3000/invoices/invoice_total/${this.invoiceID}`,
        );
        this.$router.push(`/invoice/view/${this.invoiceID}`);
      } catch (err) {
        console.log(err);
      }
    },    
 
    async updateInvline() {
      try {
        await axios.put(
          `http://localhost:3000/invoicesline/${this.$route.params.id}`,
          {
            invoice_id: this.invoiceID,
            item_id: this.itemID,
            item_price: this.itemPrice,
            service_id: this.serviceDesc,
          }
        );
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>