<template>
  <div>
    <Customer></Customer>
    <CustomerInvoices></CustomerInvoices>

  </div>
</template>

<script>
import Customer from '../viewRecords/Customer.vue'
import CustomerInvoices from '../viewRecords/CustomerInvoices.vue'
export default {
  name: 'ViewInvoice',
  components: {
    Customer,
    CustomerInvoices
  }
}
</script>