<template>
<div>
<center>
  <div>
    <div class="text-right">
      <router-link :to="{ name: 'CreateItems' }" class="btn btn-success mt-3 mb-3" >Add Item</router-link>
    </div>
    <table style="width: 60%;" class="table table-bordered text-center table-hover table-sm col-md-8 alert-primary clearfix">
      <thead>
        <tr>
          <th>Item ID</th>
          <th>Item Type</th>
          <th class="has-text-centered col-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.item_id">
          <td>{{ item.item_id }}</td>
          <td>{{ item.item_type }}</td>
          <td class="has-text-centered">
            <router-link :to="{ name: 'EditItem', params: { id: item.item_id } }" class="btn btn-info is-small">Edit</router-link>
            <a class="btn btn-danger is-small " @click.prevent="deleteCustomer(item.item_id)">Delete</a>
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
      items: [],
    };
  },
 
  created() {
    this.getItems();
  },
 
  methods: {
    // Get All items
    async getItems() {
      try {
        const response = await axios.get("http://localhost:3000/items");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete item
    async deleteCustomer(id) {
      try {
        if (window.confirm("Do you really want to delete?")){
        await axios.delete(`http://localhost:3000/items/${id}`);
        }
        this.getItems();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 