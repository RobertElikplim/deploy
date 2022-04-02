<template>
	<div class="col-lg-10 mx-auto">
		<div class="row mt-4">
      <div class="col" id=bottom>			<h4>Customer Invoice History</h4> </div>
      <div class="col mx-auto d-grid gap-2 d-md-flex justify-content-md-end">
			<router-link :to="{ name: 'CreateInvoice' }" class="btn btn-success my-2">Add Invoices</router-link>
			</div>
			<hr class="solid ">
			<!-- Search Option List -->
			<div class="col">
				<label>Filter Invoice By:</label>
				<select class=".form-control-sm mx-3 mb-3" v-model="searchBy">
					<option value="Invoice ID">Invoice ID</option>
					<option value="Date Range">Date Range</option>
					<option value="Payment Status">Payment Status</option>
					<option value="Pickup Status">Pickup Status</option>
				</select>
				<!-- Show Input for Search by Invoice ID -->
				<div class="d-flex" v-if="searchBy === 'Invoice ID'">
					<input class="me-3" type="text" placeholder="1234" v-model="invoiceid" v-on:keyup.enter="handleSubmitForm" />
					<button style="width: 10em" class="btn btn-primary btn-sm" @click="handleSubmitForm" type="submit"> Search Invoices </button>
					<div>
						<button style="width: 10em" class="btn btn-secondary btn-sm" @click="resetForm" type="Reset"> Reset </button>
					</div>
				</div>
				<!-- Show Input for Search by Date Range -->
				<div class="d-flex" v-if="searchBy === 'Date Range'">
					<input class="me-3" type="date" v-model="date1" v-on:keyup.enter="handleSubmitForm" />
					<label> To </label>
					<input class="mx-3" type="date" v-model="date2" v-on:keyup.enter="handleSubmitForm" />
					<button style="width: 10em" class="btn btn-primary btn-sm" @click="handleSubmitForm" type="submit"> Search Invoices </button>
					<div>
						<button style="width: 10em" class="btn btn-secondary btn-sm" @click="resetForm" type="Reset"> Reset </button>
					</div>
				</div>
				<!-- Show Input for Search by Payment Status -->
				<div class="d-flex" v-if="searchBy === 'Payment Status'">
					<input class="me-3" type="text" v-model="paymentstatus" v-on:keyup.enter="handleSubmitForm" />
					<button style="width: 10em" class="btn btn-primary btn-sm" @click="handleSubmitForm" type="submit"> Search Invoices </button>
					<div>
						<button style="width: 10em" class="btn btn-secondary btn-sm" @click="resetForm" type="Reset"> Reset </button>
					</div>
				</div>
				<!-- Show Input for Search by Pickup Status -->
				<div class="d-flex" v-if="searchBy === 'Pickup Status'">
					<input class="me-3" type="text" v-model="pickupstatus" v-on:keyup.enter="handleSubmitForm" />
					<button style="width: 10em" class="btn btn-primary btn-sm" @click="handleSubmitForm" type="submit"> Search Invoices </button>
					<div>
						<button style="width: 10em" class="btn btn-secondary btn-sm" @click="resetForm" type="Reset"> Reset </button>
					</div>
				</div>
			</div>

			<table class="table table-bordered text-center table-hover table-sm col-md-8 alert-primary clearfix mt-4">
				<thead>
					<tr>
						<th>Invoice #</th>
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
					<tr v-for="invoice in queryData" :key="invoice.invoice_id">
						<td>{{ invoice.invoice_id }}</td>
						<td>{{ dateTime(invoice.invoice_date) }}</td>
						<td>{{ invoice.payment_status }}</td>
						<td>{{ invoice.payment_amount }}</td>
						<td>{{ invoice.invoice_total }}</td>
						<td>{{ dateTime(invoice.pick_up_date) }}</td>
						<td>{{ invoice.picked_up }}</td>
						<td class="has-text-centered">
							<router-link :to="{ name: 'ViewInvoice', params: { id: invoice.invoice_id } }" class="btn btn-info is-small">View</router-link>
							<router-link :to="{ name: 'EditInvoice', params: { id: invoice.invoice_id } }" class="btn btn-warning is-small">Edit</router-link> <a class="btn btn-danger is-small " @click.prevent="deleteInvoice(invoice.invoice_id)">Delete</a> </td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
 
<script>
// import axios
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      queryData: [],
      searchBy: "",
      invoiceid: "",
      date1: "",
      date2: "",
      pickupstatus: "",
      paymentstatus: "",
    };
  },
	mounted() {
		let apiURL = `customers/${this.$route.params.id}/invoices`;
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
        if (this.searchBy === "Invoice ID") {
          apiURL = `customers/${this.$route.params.id}/invoices/id/${this.invoiceid}`;
        } else if (this.searchBy === "Date Range") {
          apiURL = `customers/${this.$route.params.id}/invoices/date/${this.date1}/${this.date2}`;
        } else if (this.searchBy === "Payment Status") {
          apiURL = `customers/${this.$route.params.id}/invoices/pay/${this.paymentstatus}`;
        } else if (this.searchBy === "Pickup Status") {
          apiURL = `customers/${this.$route.params.id}/invoices/pick/${this.pickupstatus}`; 
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
        this.invoiceid = "";
        this.date1 = "";
        this.date2= "";
        this.pickupstatus = "";
        this.paymentstatus = "";
		},
		resetForm() {
			let apiURL = `customers/${this.$route.params.id}/invoices`;
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
     // Delete invoice
     async deleteInvoice(id) {
       try {
         if (window.confirm("Do you really want to delete?")){
         await axios.delete(`invoices/${id}`);
         }
         this.getInvoices();
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

<style>
#bottom {
    align-self: flex-end;                                  
}
</style>

