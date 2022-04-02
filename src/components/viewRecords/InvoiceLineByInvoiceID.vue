<template>
<div>
<center>
  <div>
    <div class="text-right">
      <router-link :to="{ path: `/invoice/${this.$route.params.id}/add` }" class="btn btn-success mt-3 mb-3" >Add Items to Invoice</router-link>
    </div>
    <table style="width: 60%;" class="table table-bordered text-center table-hover table-sm col-md-8 alert-primary clearfix">
      <thead>
        <tr>
          <th>Invoice ID</th>
          <th>Item Type</th>
          <th>Item Price</th>
          <th>Services</th>
          <th class="has-text-centered col-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="line in invoice_line" :key="line.invoice_line_id">
          <td>{{ line.invoice_id }}</td>
          <td>{{ line.item_type }}</td>
          <td>{{ line.item_price }}</td>
          <td>{{ line.service_desc }}</td>
          <td class="has-text-centered">
            <router-link :to="{ name: 'EditInvoiceline', params: { id: line.invoice_line_id } }" class="btn btn-info is-small">Edit</router-link>
            <a class="btn btn-danger is-small " @click.prevent="deleteInvline(line.invoice_line_id)">Delete</a>
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
  name: "InvoiceLineByInvoiceID",
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
        const response = await axios.get(`https://pudcapi.herokuapp.com/invoice/invoiceline/${this.$route.params.id}`);
        this.invoice_line = response.data;
      } catch (err) {
        console.log(err);
      }
    },
     // Delete invoiceLine
    async deleteInvline(id) {
      try {
        if (window.confirm("Do you really want to delete?")){
        await axios.delete(`https://pudcapi.herokuapp.com/invoicesline/${id}`);
        await axios.put(`https://pudcapi.herokuapp.com/invoices/invoice_total/${this.$route.params.id}`);
        }
        this.$router.go();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 