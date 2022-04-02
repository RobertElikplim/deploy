// import express
import express from "express";
import { createCustomer, createInvoiceLine, createInvoices, createItems, showCustomerInvoicesByPayStatus, showCustomerInvoicesByPickStatus,
    createServices, createVendorPayment, createVendors, deleteCustomer, deleteInvoiceline, showCustomerInvoicesByDate,
    deleteInvoices, deleteItem, deleteService, deleteVendorPay, deleteVendors, showCustomerById, showCustomers, showInvoiceListByDate, showCustomerInvoicesByInvoice,
    showinvlineById, showinvlineByInvoiceId, showCustomerInvoicesById, showCustomersByPhone, showCustomersByName, updatedInvoiceTotalByID,
    showInvoiceLine, showInvoices, showInvoicesById, showInvoiceById, showItems, showItemsById, showNotPickedUp, showOutStandingVendorPayment, showServices, showServicesById, showVendorPayments, showVendors, showVendorsById, showVpaymentsById, updateCustomer, 
    updateInvoiceline, updateInvoices, updateItem, updateServices, updateVendorPay, updateVendors, showInvoiceList, showInvoiceListByPhone , showInvoiceListByName, markAsPicked, registerUser, showUser, updateUser, showInvoiceListByID, showOneUser }
    from "../controllers/premier.js";

// init express router
const router = express.Router();

//import function from controller
import{} from "../controllers/premier.js";

// export default router
export default router;

// get all routes
router.get('/customers', showCustomers);
router.get('/customers/filter/phone/:phone', showCustomersByPhone);
router.get('/customers/filter/name/:name', showCustomersByName);
router.get('/invoicesline', showInvoiceLine);
router.get('/invoices', showInvoices);
router.get('/items', showItems);
router.get('/services', showServices);
router.get('/vendors', showVendors);
router.get('/vendorpay', showVendorPayments);
router.get('/outsvpay', showOutStandingVendorPayment);
router.get('/notpicked', showNotPickedUp);
router.get('/invoiceList', showInvoiceList);
router.get('/invoiceList/:id', showInvoiceListByID);
router.get('/invoiceList/date/:date1/:date2', showInvoiceListByDate);
router.get('/invoiceList/phone/:phone', showInvoiceListByPhone);
router.get('/invoiceList/name/:name', showInvoiceListByName);

//get single routes
router.get('/customers/:id', showCustomerById);
router.get('/customers/:id/invoices', showCustomerInvoicesById);
router.get('/customers/:id/invoices/id/:invoice', showCustomerInvoicesByInvoice);
router.get('/customers/:id/invoices/date/:date1/:date2', showCustomerInvoicesByDate);
router.get('/customers/:id/invoices/pay/:status', showCustomerInvoicesByPayStatus);
router.get('/customers/:id/invoices/pick/:status', showCustomerInvoicesByPickStatus);
router.get('/invoicesline/:id', showinvlineById);
router.get('/invoice/invoiceline/:id', showinvlineByInvoiceId);
router.get('/invoicesline/:id', showinvlineById);
router.get('/invoices/:id', showInvoicesById);
router.get('/invoice/:id', showInvoiceById);
router.get('/items/:id', showItemsById);
router.get('/services/:id', showServicesById);
router.get('/vendors/:id', showVendorsById);
router.get('/vendorpay/:id', showVpaymentsById);
router.get('/login/:username/:user_password', showUser);
router.get('/verify/:username', showOneUser);

// post/create routes
router.post('/customers', createCustomer);
router.post('/invoicesline', createInvoiceLine);
router.post('/invoices', createInvoices);
router.post('/items', createItems);
router.post('/services', createServices);
router.post('/vendors', createVendors);
router.post('/vendorpay', createVendorPayment);
router.post('/register', registerUser);

// delete routes
router.delete('/customers/:id', deleteCustomer);
router.delete('/invoicesline/:id', deleteInvoiceline);
router.delete('/invoices/:id', deleteInvoices);
router.delete('/items/:id', deleteItem);
router.delete('/services/:id', deleteService);
router.delete('/vendors/:id', deleteVendors);
router.delete('/vendorpay/:id', deleteVendorPay);

// update routes
router.put('/customers/:id', updateCustomer);
router.put('/invoicesline/:id', updateInvoiceline);
router.put('/invoices/:id', updateInvoices);
router.put('/invoices/invoice_total/:id', updatedInvoiceTotalByID);
router.put('/items/:id', updateItem);
router.put('/services/:id', updateServices);
router.put('/vendors/:id', updateVendors);
router.put('/vendorpay/:id', updateVendorPay);
router.put('/pickedup/:id', markAsPicked);
router.put('/user/:email/:last_name', updateUser);