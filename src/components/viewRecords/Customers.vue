<template>
<div>
<center>
  <div>
    <div class="text-right">
      <router-link :to="{ name: 'CreateCust' }" class="btn btn-success mt-3 mb-3" >Add Customer</router-link>
    </div>
    <table style="width: 70%;" class="table table-bordered text-center table-hover table-sm col-md-8 alert-primary clearfix">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th class="has-text-centered col-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.cust_id">
          <td>{{ customer.first_name }}</td>
          <td>{{ customer.last_name }}</td>
          <td>{{ customer.phone }}</td>
          <td class="has-text-centered">
            <router-link :to="{ name: 'viewCustomer', params: { id: customer.cust_id } }" class="btn btn-info is-small">View</router-link>
            <router-link :to="{ name: 'EditCustomer', params: { id: customer.cust_id } }" class="btn btn-warning is-small">Edit</router-link>
            <a class="btn btn-danger is-small " @click.prevent="deleteCustomer(customer.cust_id)">Delete</a>
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
      customers: [],
    };
  },
 
  created() {
    this.getCustomers();
  },
 
  methods: {
    // Get All customers
    async getCustomers() {
      try {
        const response = await axios.get("https://pudcapi.herokuapp.com/customers");
        this.customers = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete customer
    async deleteCustomer(id) {
      try {
        if (window.confirm("Do you really want to delete?")){
          await axios.delete(`https://pudcapi.herokuapp.com/customers/${id}`);
        }
        this.getCustomers();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
