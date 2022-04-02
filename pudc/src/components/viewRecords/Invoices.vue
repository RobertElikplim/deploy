<template>
<div>
<center>
  <div>
    <div class="text-right">
      <router-link :to="{ name: 'CreateInvoice' }" class="btn btn-success mt-3 mb-3" >Add Invoices</router-link>
    </div>
    <table style="width: 80%;" class="table table-bordered text-center table-hover table-sm col-md-8 alert-primary clearfix">
      <thead>
        <tr>
          <th>Customer ID</th>
          <th>Invoice Date</th>
          <th>Payment Status</th>
          <th>Payment Amount</th>
          <th>Invoice Total</th>
          <th>Pickup Date</th>
          <th>Pickup Status</th>
          <th class="has-text-centered col-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="invoice in invoices" :key="invoice.invoice_id">
          <td>{{ invoice.cust_id }}</td>
          <td>{{ dateTime(invoice.invoice_date) }}</td>
          <td>{{ invoice.payment_status }}</td>
          <td>{{ invoice.payment_amount }}</td>
          <td>{{ invoice.invoice_total }}</td>
          <td>{{ dateTime(invoice.pick_up_date) }}</td>
          <td>{{ invoice.picked_up }}</td>
          <td class="has-text-centered">
            <router-link :to="{ name: 'ViewInvoice', params: { id: invoice.invoice_id } }" class="btn btn-info is-small">View</router-link>
            <router-link :to="{ name: 'EditInvoice', params: { id: invoice.invoice_id } }" class="btn btn-warning is-small">Edit</router-link>
            <a class="btn btn-danger is-small " @click.prevent="deleteInvoice(invoice.invoice_id)">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="footer-copyright text-center py-3">
      <mdb-container fixed>
      </mdb-container>
    </div>
</center>
</div> 
</template>
 
<script>
// import axios
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      invoices: [],
    };
  },
 
  created() {
    this.getInvoices();
  },
 
  methods: {
    // Get All invoices
    async getInvoices() {
      try {
        const response = await axios.get("http://localhost:3000/invoices");
        this.invoices = response.data;
      } catch (err) {
        console.log(err);
      }
    },
     dateTime(value) {
        return moment(value).format('MM-DD-YYYY');
    },
 
    // Delete invoice
    async deleteInvoice(id) {
      try {
        if (window.confirm("Do you really want to delete?")){
        await axios.delete(`http://localhost:3000/invoices/${id}`);
        }
        this.getInvoices();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 

