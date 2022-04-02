<template>
<div>
<center>
  <div>
    <div class="text-right">
      <router-link :to="{ name: 'CreatePay' }" class="btn btn-success mt-3 mb-3" >Add Payment</router-link>
    </div>
    <table style="width: 100%;" class="table table-bordered text-center table-hover table-sm col-md-12 alert-primary clearfix">
      <thead>
        <tr>
          <th>Amount Due</th>
          <th>Payment Amount</th>
          <th>Balance Due</th>
          <th>Service Description</th>
          <th>Vendor ID</th>
          <th class="has-text-centered col-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="payment in payments" :key="payment.payment_id">
          <td>{{ payment.amount_due }}</td>
          <td>{{ payment.payment_amount }}</td>
          <td>{{ payment.balance_due }}</td>
          <td>{{ payment.service_desc }}</td>
          <td>{{ payment.vendor_id }}</td>
          <td class="has-text-centered">
            <router-link :to="{ name: 'EditPayment', params: { id: payment.payment_id } }" class="btn btn-info is-small">Edit</router-link>
            <a class="btn btn-danger is-small " @click.prevent="deletePayment(payment.payment_id)">Delete</a>
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
  data() {
    return {
      payments: [],
    };
  },
 
  created() {
    this.getVendors();
  },
 
  methods: {
    // Get All payments
    async getVendors() {
      try {
        const response = await axios.get("http://localhost:3000/vendorpay");
        this.payments = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete payment
    async deletePayment(id) {
      try {
        if (window.confirm("Do you really want to delete?")){
        await axios.delete(`http://localhost:3000/vendorpay/${id}`);
        }
        this.getVendors();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 