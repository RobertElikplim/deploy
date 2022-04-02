<template>
  <div>
    <!-- Search Option List -->
    <div>
      <div class="container m-3 d-flex">
        <label>Filter Customer By:</label>
        <select class=".form-control-sm mx-3" v-model="searchBy">
          <option value="Client Name">Client Name</option>
          <option value="Client Number">Client Number</option>
        </select>
      </div>
      <!-- Show Input for Search by Name -->
      <div class="container d-flex" v-if="searchBy === 'Client Name'">
        <input class="mx-3" type="text" placeholder="Customer Name" v-model="nameInput" v-on:keyup.enter="handleSubmitForm" />
        <button style="width: 10em" class="btn btn-primary btn-sm" @click="handleSubmitForm" type="submit"> Search Client </button>
		<div><button style="width: 10em" class="btn btn-secondary btn-sm" @click="resetForm" type="Reset"> Reset </button></div>
      </div>
      <!-- Show Input for Search by Name -->
      <div class="container d-flex" v-if="searchBy === 'Client Number'">
        <input class="mx-3" type="text" placeholder="Phone Number" v-model="phoneInput" v-on:keyup.enter="handleSubmitForm" />
        <button style="width: 10em" class="btn btn-primary btn-sm" @click="handleSubmitForm" type="submit"> Search Client </button>
		<div><button style="width: 10em" class="btn btn-secondary btn-sm" @click="resetForm" type="Reset"> Reset </button></div>
      </div>
    </div>
    <hr class="mt-10 border-solid border-1" style="border-color: #7d0d15" />
    <div class="container mt-3 mb-3 d-flex justify-content-center">
      <router-link :to="{ name: 'CreateCust' }" class="btn btn-success my-2">Add New Customer</router-link>
    </div>
    <!-- Invoice List and Results for Search -->
    <div class="container mt-3 mb-3 d-flex justify-content-center">
      <table style="width: 80%;" class="table table-bordered text-center table-hover table-sm col-md-8 alert-primary clearfix">
        <!-- <thead><tr><th>Invoice ID</th><th>Customer Name</th><th>Phone Number</th><th>Phone Number</th></tr></thead><tbody><tr v-for="invoice in queryData" :key="invoice.invoice_id"><td> {{ invoice.customerName }} </td><td> {{ invoice.phone }} </td><td> {{ invoice.invoice_id }} </td></tr></tbody> -->
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th class="has-text-centered col-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in queryData" :key="customer.cust_id">
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
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
	data() {
		return {
			//All the data recieved from the query
			queryData: [],
			//Parameter for search to occur
			searchBy: "",
			nameInput: "",
			phoneInput: "",
		};
	},
	mounted() {
		let apiURL = `http://localhost:3000/customers`;
		//Resets the list of queried data
		this.queryData = [];
		axios.get(apiURL).then((resp) => {
			let data = resp.data;
			for (let i = 0; i < data.length; i++) {
				this.queryData.push(data[i]);
			}
		});
	},
	methods: {
		handleSubmitForm() {
			let apiURL = "";
			//Checks which filters are needed for URL structure
			if (this.searchBy === "Client Name") {
				apiURL = `http://localhost:3000/customers/filter/name/${this.nameInput}`;
			} else if (this.searchBy === "Client Number") {
				apiURL = `http://localhost:3000/customers/filter/phone/${this.phoneInput}`;
			}
			//Resets the list of queried data
			this.queryData = [];
			axios.get(apiURL).then((resp) => {
				let data = resp.data;
				for (let i = 0; i < data.length; i++) {
					this.queryData.push(data[i]);
				}
			});
			//Resets all the variables
			this.searchQuery = "";
			this.nameInput = "";
			this.phoneInput = "";
		},
		resetForm() {
			let apiURL = "http://localhost:3000/customers";
			//Resets the list of queried data
			this.queryData = [];
			axios.get(apiURL).then((resp) => {
				let data = resp.data;
				for (let i = 0; i < data.length; i++) {
					this.queryData.push(data[i]);
				}
			});
			//Resets all the variables
			this.searchQuery = "";
			this.nameInput = "";
			this.phoneInput = "";
		},
		// Delete customer
		async deleteCustomer(id) {
			try {
				if (window.confirm("Do you really want to delete?")) {
					await axios.delete(`http://localhost:3000/customers/${id}`);
				}
				window.location.reload();
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

