<template>
<div>
<center>
  <div>
    <div class="text-right">
      <router-link :to="{ name: 'CreateInvline' }" class="btn btn-success mt-3 mb-3" >Add Invoice Line Item</router-link>
    </div>
    <table style="width: 60%;" class="table table-bordered text-center table-hover table-sm col-md-8 alert-primary clearfix">
      <thead>
        <tr>
          <th>Invoice ID</th>
          <th>Item ID</th>
          <th>Item Price</th>
          <th>Service ID</th>
          <th class="has-text-centered col-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="invoiceLine in invoice_line" :key="invoiceLine.invoice_line_id">
          <td>{{ invoiceLine.invoice_id }}</td>
          <td>{{ invoiceLine.item_id }}</td>
          <td>{{ invoiceLine.item_price }}</td>
          <td>{{ invoiceLine.service_id }}</td>
          <td class="has-text-centered">
            <router-link :to="{ name: 'EditInvoiceline', params: { id: invoiceLine.invoice_line_id } }" class="btn btn-info is-small">Edit</router-link>
            <a class="btn btn-danger is-small " @click.prevent="deleteInvline(invoiceLine.invoice_line_id)">Delete</a>
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
 
export default {
  name: "InvoiceLine",
  data() {
    return {
      invoice_line: [],
    };
  },
 
  created() {
    this.getInvoiceLine();
  },
 
  methods: {
    // Get All invoice_line
    async getInvoiceLine() {
      try {
        const response = await axios.get("http://localhost:3000/invoicesline");
        this.invoice_line = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete invoiceLine
    async deleteInvline(id) {
      try {
        if (window.confirm("Do you really want to delete?")){
        await axios.delete(`http://localhost:3000/invoicesline/${id}`);
        }
        this.getInvoiceLine();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 