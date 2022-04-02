<template>
  <div>
    <Invoice></Invoice>
    <InvoiceLineByInvoiceID></InvoiceLineByInvoiceID>

  </div>
</template>

<script>
import Invoice from '../viewRecords/Invoice.vue'
import InvoiceLineByInvoiceID from '../viewRecords/InvoiceLineByInvoiceID.vue'
export default {
  name: 'ViewInvoice',
  components: {
    Invoice,
    InvoiceLineByInvoiceID
  }
}
</script>