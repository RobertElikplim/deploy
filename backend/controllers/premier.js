import { deleteCustomerById, deleteInvoicelineById, deleteInvoicesById, deleteItemById, deleteServicesById, deleteVendorPayById, deleteVendorsById, getCustomerById, getCustomers, getinvlineById, getInvoiceLine, 
    getInvoices, getInvoicesById, getCustomerInvoicesById, getInvoiceById, getinvlineByInvoiceId, getItems, getItemsById, getNotPickedUp, getOutStandingVendorPayment, getServices, getServicesById, getVendorPayment, getVendors, getVendorsById, getVpaymentsById, insertCustomer, insertInvoiceLine, 
    insertInvoices, insertItems, insertServices, insertVendorPay, insertVendors, updateCustomersById, insertUser, getUser, getInvoiceListByID,  getInvoiceListByDate,
    updateInvoicelineById, updateInvoicesById, updateServicesById, updateTtemById, updateInvoiceTotalByID, getCustomerInvoicesByInvoice, getCustomerInvoicesByDate,
    updateVendorPayById, getInvoiceList, getInvoiceListByPhone, getInvoiceListByName, getCustomersByPhone, getCustomersByName, getCustomerInvoicesByPayStatus, getCustomerInvoicesByPickStatus,
    updateVendorsById, 
    markAsPickedById,
    updateUserBy,
    getOneUser} from "../models/premierModel.js";

import sha1 from "sha1";

// GET DATA FROM TABLES

export const showCustomers = (req, res) => {
    getCustomers((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showInvoiceLine = (req, res) => {
    getInvoiceLine((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showInvoices = (req, res) => {
    getInvoices((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showItems = (req, res) => {
    getItems((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showServices = (req, res) => {
    getServices((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showVendors = (req, res) => {
    getVendors((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showVendorPayments = (req, res) => {
    getVendorPayment((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// GET SINGLE RECORDS BY ID
export const showCustomerById = (req, res) => {
    getCustomerById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showInvoicesById = (req, res) => {
    getInvoicesById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showCustomerInvoicesById = (req, res) => {
    getCustomerInvoicesById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showCustomerInvoicesByInvoice = (req, res) => {
    getCustomerInvoicesByInvoice(req.params.id, req.params.invoice,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showCustomerInvoicesByPayStatus = (req, res) => {
    getCustomerInvoicesByPayStatus(req.params.id, req.params.status,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showCustomerInvoicesByPickStatus = (req, res) => {
    getCustomerInvoicesByPickStatus(req.params.id, req.params.status,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showCustomerInvoicesByDate = (req, res) => {
    getCustomerInvoicesByDate(req.params.id, req.params.date1, req.params.date2, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showInvoiceById = (req, res) => {
    getInvoiceById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showinvlineById = (req, res) => {
    getinvlineById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showinvlineByInvoiceId = (req, res) => {
    getinvlineByInvoiceId(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showItemsById = (req, res) => {
    getItemsById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showServicesById = (req, res) => {
    getServicesById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showVpaymentsById = (req, res) => {
    getVpaymentsById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showVendorsById = (req, res) => {
    getVendorsById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// ADD DATA TO TABLES
export const createCustomer = (req, res) => {
    const data = req.body;
    insertCustomer(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const createInvoiceLine = (req, res) => {
    const data = req.body;
    insertInvoiceLine(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const createInvoices = (req, res) => {
    const data = req.body;
    insertInvoices(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const createItems = (req, res) => {
    const data = req.body;
    insertItems(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const createServices = (req, res) => {
    const data = req.body;
    insertServices(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const createVendors = (req, res) => {
    const data = req.body;
    insertVendors(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const createVendorPayment = (req, res) => {
    const data = req.body;
    insertVendorPay(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// DELETE DATA

export const deleteCustomer = (req, res) => {
    const id = req.params.id;
    deleteCustomerById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const deleteInvoiceline = (req, res) => {
    const id = req.params.id;
    deleteInvoicelineById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const deleteInvoices = (req, res) => {
    const id = req.params.id;
    deleteInvoicesById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const deleteItem = (req, res) => {
    const id = req.params.id;
    deleteItemById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const deleteService = (req, res) => {
    const id = req.params.id;
    deleteServicesById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const deleteVendors = (req, res) => {
    const id = req.params.id;
    deleteVendorsById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const deleteVendorPay = (req, res) => {
    const id = req.params.id;
    deleteVendorPayById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}


// UPDATE TABLES
export const updateCustomer = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateCustomersById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const updateInvoiceline = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateInvoicelineById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const updateInvoices = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateInvoicesById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const updateItem = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateTtemById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const updateServices = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateServicesById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const updateVendors = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateVendorsById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const updateVendorPay = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateVendorPayById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const markAsPicked = (req, res) => {
    const id    = req.params.id;
    markAsPickedById(id, (err, results) => {
        if (err){
            res.send(err);
            console.log(err);
        }else{
            res.json(results);
        }
    });
}
export const updatedInvoiceTotalByID = (req, res) => {
    const id    = req.params.id;
    updateInvoiceTotalByID(id, (err, results) => {
        if (err){
            res.send(err);
            console.log(err);
        }else{
            res.json(results);
        }
    });
}


/// REPORTS
export const showOutStandingVendorPayment = (req, res) => {
    getOutStandingVendorPayment((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showNotPickedUp = (req, res) => {
    getNotPickedUp((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showInvoiceList = (req, res) => {
    getInvoiceList((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showInvoiceListByID = (req, res) => {
    getInvoiceListByID(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showInvoiceListByPhone = (req, res) => {
    getInvoiceListByPhone(req.params.phone, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showInvoiceListByName = (req, res) => {
    getInvoiceListByName(req.params.name, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showInvoiceListByDate = (req, res) => {
    getInvoiceListByDate(req.params.date1, req.params.date2,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showCustomersByPhone = (req, res) => {
    getCustomersByPhone(req.params.phone, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showCustomersByName = (req, res) => {
    getCustomersByName(req.params.name, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// REGISTER USER
export const registerUser = (req, res) => {
    var first = sha1(req.body.first_name);
    var last = sha1(req.body.last_name);
    var user = sha1(req.body.username);
    var pass = sha1(req.body.user_password);
    var mail = sha1(req.body.email);
    insertUser(first,last,user,pass,mail, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showUser = (req, res) => {
    getUser(sha1(req.params.username), sha1(req.params.user_password), (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const updateUser = (req, res) => {
    const mail = sha1(req.params.email);
    const last = sha1(req.params.last_name);
    var user = sha1(req.body.username);
    var pass = sha1(req.body.user_password);
    updateUserBy(user,pass,mail,last, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showOneUser = (req, res) => {
    getOneUser(sha1(req.params.username), (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}