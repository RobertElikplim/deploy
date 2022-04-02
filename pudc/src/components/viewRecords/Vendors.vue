<template>
<div>
<center>
  <div>
    <div class="text-right">
      <router-link :to="{ name: 'CreateVend' }" class="btn btn-success mt-3 mb-3" >Add Vendors</router-link>
    </div>
    <table style="width: 100%;" class="table table-bordered text-center table-hover table-sm col-md-12 alert-primary clearfix">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th class="has-text-centered col-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vendors in vendors" :key="vendors.vendor_id">
          <td>{{ vendors.vendor_name }}</td>
          <td>{{ vendors.vendor_phone }}</td>
          <td>{{ vendors.vendor_address }}</td>
          <td>{{ vendors.vendor_city }}</td>
          <td>{{ vendors.vendor_state }}</td>
          <td>{{ vendors.vendor_zip }}</td>
          <td class="has-text-centered">
            <router-link :to="{ name: 'EditVendors', params: { id: vendors.vendor_id } }" class="btn btn-info is-small">Edit</router-link>
            <a class="btn btn-danger is-small " @click.prevent="deleteVendor(vendors.vendor_id)">Delete</a>
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
  name: "Customers",
  data() {
    return {
      vendors: [],
    };
  },
 
  created() {
    this.getVendors();
  },
 
  methods: {
    // Get All vendors
    async getVendors() {
      try {
        const response = await axios.get("http://localhost:3000/vendors");
        this.vendors = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete vendors
    async deleteVendor(id) {
      try {
        if (window.confirm("Do you really want to delete?")){
        await axios.delete(`http://localhost:3000/vendors/${id}`);
        }
        this.getVendors();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 