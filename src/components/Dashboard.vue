<template>
  <center>
    <div class="row" style="height:1000px;">
      <div class="col border border-light mx-3" style="background-color:lavender">
        <span class="text-info">Pickups due today</span>
        <table style="width: 100%;" class="table text-center table-hover col-md-12  clearfix mt-3">
            <thead>
              <tr>
                <th class="has-text-centered col-4">Full Name</th>
                <th>Payment Status</th>
                <th>Invoice Total</th>
                <th class="has-text-centered col-3">Invoice Date</th>
                <th class="has-text-centered col-4">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="due in dues" :key="due.invoice_id">
                <td>{{ due.first_name +  ' ' + due.last_name  }}</td>
                <td>{{ due.payment_status }}</td>
                <td>{{ due.invoice_total }}</td>
                <td>{{ dateTime(due.invoice_date) }}</td>
                <td>
                  <button class="btn btn-success" @click.prevent="markPicked(due.invoice_id)">Picked</button>
                  <router-link :to="{ name: 'EditInvoice', params: { id: due.invoice_id } }" class="btn btn-info is-small">View</router-link>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
      <div class="col border border-light" style="background-color:lavenderblush" >
        <span class="text-warning">Vendors not Paid</span>
          <table style="width: 100%;" class="table text-center table-hover col-md-12  clearfix mt-3">
            <thead>
              <tr>
                <th>Vendor Name</th>
                <th>Amount Due</th>
                <th>Amount Paid</th>
                <th>Balance Due</th>
                <th>Service</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="payment in payments" :key="payment.payment_id">
                <td>{{ payment.vendor_name }}</td>
                <td>{{ payment.amount_due }}</td>
                <td>{{ payment.payment_amount }}</td>
                <td>{{ payment.balance_due }}</td>
                <td>{{ payment.service_desc }}</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  </center>
</template>

<script>
// import axios
import axios from "axios";
import moment from "moment";
 
export default {
  data() {
    return {
      payments: [],
      dues: [],
      invoices: [],
      picked: "",
    };
  },
 
  created() {
    this.getVendorPayment(),
    this.getDueToday();
  },
  methods: {
    async getVendorPayment() {
      try {
        const response = await axios.get("https://pudcapi.herokuapp.com/outsvpay");
        this.payments = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async getDueToday() {
      try {
        const response = await axios.get("https://pudcapi.herokuapp.com/notpicked");
        this.dues = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async markPicked(id) {
      try {
        if (window.confirm("Do you really want to mark order as PICKED?")){
        await axios.put(`https://pudcapi.herokuapp.com/pickedup/${id}`);
        }
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    },
    async getInvoices() {
      try {
        const response = await axios.get("https://pudcapi.herokuapp.com/invoices");
        this.invoices = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    dateTime(value) {
        return moment(value).format('MM-DD-YYYY');
    },
  },
};
</script>