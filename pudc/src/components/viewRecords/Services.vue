<template>
<div>
<center>
  <div>
    <div class="text-right">
      <router-link :to="{ name: 'CreateServe' }" class="btn btn-success mt-3 mb-3" >Add Service</router-link>
    </div>
    <table style="width: 60%;" class="table table-bordered text-center table-hover table-sm col-md-8 alert-primary clearfix">
      <thead>
        <tr>
          <th>Service Description</th>
          <th>Service Outsourced</th>
          <th class="has-text-centered col-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="service in services" :key="service.service_id">
          <td>{{ service.service_desc }}</td>
          <td>{{ service.service_outsourced }}</td>
          <td class="has-text-centered">
            <router-link :to="{ name: 'EditServices', params: { id: service.service_id } }" class="btn btn-info is-small">Edit</router-link>
            <a class="btn btn-danger is-small " @click.prevent="deleteService(service.service_id)">Delete</a>
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
      services: [],
    };
  },
 
  created() {
    this.getServices();
  },
 
  methods: {
    // Get All services
    async getServices() {
      try {
        const response = await axios.get("http://localhost:3000/services");
        this.services = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete service
    async deleteService(id) {
      try {
        if (window.confirm("Do you really want to delete?")){
        await axios.delete(`http://localhost:3000/services/${id}`);
        }
        this.getServices();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 