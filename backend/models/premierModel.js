// import connection
import db from "../config/database.js";
import sha1 from "sha1";

// GET ALL TABLES
export const getCustomers = (result) => {
    db.query("SELECT * FROM customers", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const getInvoiceLine = (result) => {
    const query = "select invoice_line_id, invoice_id,item_id,service_id, CONCAT('$', FORMAT(item_price,2)) item_price from invoice_line;"
    db.query(query, (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getInvoices = (result) => {
    const query = "select invoice_id,cust_id,invoice_date,payment_status,CONCAT('$', FORMAT(payment_amount,2)) payment_amount," +
                    "CONCAT('$', FORMAT(invoice_total,2))invoice_total,pick_up_date,picked_up from invoices;"
    db.query(query, (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const getItems = (result) => {
    db.query("SELECT * FROM items", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const getServices = (result) => {
    db.query("SELECT * FROM services", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const getVendors = (result) => {
    db.query("SELECT * FROM vendors", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const getVendorPayment = (result) => {
    const query = "select payment_id, CONCAT('$', FORMAT(amount_due,2)) amount_due," +
                   "CONCAT('$', FORMAT(payment_amount,2)) payment_amount," + 
                   "CONCAT('$', FORMAT(balance_due,2)) balance_due,service_desc,vendor_id from vendor_payments;"
    db.query(query, (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// GET SINGLE RECORDS BY ID

export const getCustomerById = (id, result) => {
    db.query("SELECT * FROM customers WHERE cust_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
export const getinvlineById = (id, result) => {
    db.query("SELECT * FROM invoice_line WHERE invoice_line_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

export const getinvlineByInvoiceId = (id, result) => {  
    const myQuery2 = "SELECT il.`invoice_line_id`, il.`invoice_id`, il.item_id, items.item_type, concat('$', FORMAT(il.`item_price`, 2)) AS item_price, " +
    "il.service_id, s.service_desc FROM invoice_line as il INNER JOIN items on il.`item_id` = items.`item_id` " +
    "INNER JOIN services as s on il.`service_id` = s.`service_id` WHERE il.invoice_id = ? "
    db.query(myQuery2, [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getInvoicesById = (id, result) => {
    db.query("SELECT * FROM invoices WHERE invoice_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

export const getCustomerInvoicesById = (id, result) => {
    db.query("SELECT * FROM invoices WHERE cust_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getCustomerInvoicesByPayStatus = (id,status, result) => {
    db.query("SELECT * FROM invoices WHERE cust_id = ? AND payment_status = ? ", [id, status], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getCustomerInvoicesByPickStatus = (id,status, result) => {
    db.query("SELECT * FROM invoices WHERE cust_id = ? AND picked_up = ? ", [id, status], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}


export const getCustomerInvoicesByInvoice = (id, invoice, result) => {
    db.query("SELECT * FROM invoices WHERE cust_id = ? AND invoice_id = ?", [id, invoice], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getCustomerInvoicesByDate = (id, date1, date2, result) => {
    db.query("SELECT * FROM invoices WHERE cust_id = ? AND invoice_date BETWEEN ? AND ?", [id, date1, date2], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getInvoiceById = (id, result) => {

    const myQuery = "SELECT inv.`invoice_id`, concat(cust.`first_name`, ' ', cust.`last_name`) AS customer_name, " +
    "cust.phone, inv.`invoice_date`, inv.`payment_status`, concat('$', FORMAT(inv.`invoice_total`, 2)) AS invoice_total, "  + 
    "inv.`pick_up_date`, inv.`picked_up` FROM invoices AS inv " +
    " INNER JOIN customers AS cust ON inv.`cust_id` = cust.`cust_id` WHERE inv.`invoice_id` = ?"

    db.query(myQuery, [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}          


export const getItemsById = (id, result) => {
    db.query("SELECT * FROM items WHERE item_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
export const getServicesById = (id, result) => {
    db.query("SELECT * FROM services WHERE service_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
export const getVpaymentsById = (id, result) => {
    db.query("SELECT * FROM vendor_payments WHERE payment_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
export const getVendorsById = (id, result) => {
    db.query("SELECT * FROM vendors WHERE vendor_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// INSERT DATA INTO TABLES
export const insertCustomer = (data, result) => {
    db.query("INSERT INTO customers SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const insertInvoiceLine = (data, result) => {
    db.query("INSERT INTO invoice_line SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const insertInvoices = (data, result) => {
    db.query("INSERT INTO invoices SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const insertItems = (data, result) => {
    db.query("INSERT INTO items SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const insertServices = (data, result) => {
    db.query("INSERT INTO services SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const insertVendors = (data, result) => {
    db.query("INSERT INTO vendors SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const insertVendorPay = (data, result) => {
    db.query("INSERT INTO vendor_payments SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// DELETE DATA
export const deleteCustomerById = (id, result) => {
    db.query("DELETE FROM customers WHERE cust_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const deleteInvoicelineById = (id, result) => {
    db.query("DELETE FROM invoice_line WHERE invoice_line_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const deleteInvoicesById = (id, result) => {
    db.query("DELETE FROM invoices WHERE invoice_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const deleteItemById = (id, result) => {
    db.query("DELETE FROM item WHERE item_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const deleteServicesById = (id, result) => {
    db.query("DELETE FROM services WHERE service_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const deleteVendorsById = (id, result) => {
    db.query("DELETE FROM vendors WHERE vend_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const deleteVendorPayById = (id, result) => {
    db.query("DELETE FROM vendor_payments WHERE vend_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// UPDATE TABLES
export const updateCustomersById = (data, id, result) => {
    db.query("UPDATE customers SET first_name = ?, last_name = ?, phone = ? WHERE cust_id = ?", [data.first_name, data.last_name, data.phone, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const updateInvoicelineById = (data, id, result) => {
    db.query("UPDATE invoice_line SET invoice_id = ?, item_id = ?, item_price = ?, service_id = ?  WHERE invoice_line_id = ?", [data.invoice_id, data.item_id, data.item_price, data.service_id, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const updateInvoicesById = (data, id, result) => {
    db.query("UPDATE invoices SET cust_id = ?, invoice_date = ?, payment_status = ?, payment_amount = ?, invoice_total = ?, pick_up_date = ?, picked_up = ?  WHERE invoice_id = ?",
     [data.cust_id, data.invoice_date, data.payment_status, data.payment_amount, data.invoice_total, data.pick_up_date, data.picked_up, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const updateTtemById = (data, id, result) => {
    db.query("UPDATE items SET item_type = ? WHERE item_id = ?", [data.item_type, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const updateServicesById = (data, id, result) => {
    db.query("UPDATE services SET service_desc = ?, service_outsourced = ? WHERE service_id = ?", [data.service_desc, data.service_outsourced, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const updateVendorsById = (data, id, result) => {
    db.query("UPDATE vendors SET vendor_name = ?, vendor_phone = ?, vendor_address = ?, vendor_city = ?, vendor_state = ?, vendor_zip = ? WHERE vendor_id = ?",
                            [data.vendor_name, data.vendor_phone, data.vendor_address, data.vendor_city, data.vendor_state, data.vendor_zip, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const updateVendorPayById = (data, id, result) => {
    db.query("UPDATE vendor_payments SET amount_due = ?, payment_amount = ?, balance_due = ?, service_desc = ?, vendor_id = ? WHERE payment_id = ?",
                            [data.amount_due, data.payment_amount, data.balance_due, data.service_desc, data.vendor_id, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const markAsPickedById = (id, result) => {
    db.query("UPDATE pickup SET picked_up = 'Picked' WHERE invoice_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const updateInvoiceTotalByID = (id, result) => {
    db.query("UPDATE invoices SET invoice_total = (select SUM(item_price) from invoice_line WHERE invoice_id = ?) WHERE invoice_id = ?;", [id,id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}


// REPORTS
export const getOutStandingVendorPayment = (result) => {
    db.query("SELECT * FROM OutStandingVendorPayment", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const getNotPickedUp = (result) => {
    db.query("SELECT * FROM pickup", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

/* export const getOutStandingVendorPayment = (result) => {
    db.query("SELECT vendor_name, CONCAT('$', FORMAT(amount_due,2)) amount_due, CONCAT('$'," + 
                "FORMAT(payment_amount,2)) payment_amount, CONCAT('$', FORMAT(balance_due,2)) " + 
                "balance_due, service_desc from vendors v join vendor_payments vp on v.vendor_id = vp.vendor_id where balance_due > 0;", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
} 
export const getNotPickedUp = (result) => {
    db.query("SELECT first_name, invoice_id, last_name, payment_status, CONCAT('$', FORMAT(invoice_total,2))" + 
                "invoice_total, invoice_date from customers c join invoices i on c.cust_id = i.cust_id where pick_up_date = curdate() and picked_up = 'Not Picked';", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
} */
export const getInvoiceList = (result) => {
    db.query("SELECT * FROM invoiceList", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}    
export const getInvoiceListByID = (id, result) => {
    db.query("SELECT * FROM invoiceList WHERE invoice_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

export const getInvoiceListByPhone = (phone, result) => {
    db.query("SELECT * FROM invoiceList WHERE phone LIKE ?",  [phone + '%'], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const getInvoiceListByName = (name, result) => {
    db.query("SELECT * FROM invoiceList WHERE customer_name LIKE ?", [name + '%'], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}  
export const getInvoiceListByDate = (date1, date2, result) => {
    db.query("SELECT * FROM invoiceList WHERE invoice_date BETWEEN ? AND ?", [date1, date2], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}  
export const getCustomersByPhone = (phone, result) => {
    db.query("SELECT * FROM customers WHERE phone LIKE ?",  [phone + '%'], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const getCustomersByName = (name, result) => {
    db.query("SELECT * FROM customers WHERE first_name LIKE ?", [name + '%'], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}  


// AUTHENTICATION

export const insertUser = (first_name, last_name, username, user_password, email, result) => {
    db.query("INSERT INTO user (first_name, last_name, username, user_password, email) VALUES (?, ?, ?, ?, ?)", 
    [first_name, last_name, username, user_password, email], (err, results) => {             
        if(err) {
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const getUser = (username, user_password, result) => {
    const myquery = "select `username`, user_password from `user` where binary `username` = ? and binary `user_password` = ?"
    db.query(myquery, [username, user_password], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const updateUserBy = (username, user_password, email, last_name, result) => {
    const myQuery = "update `user` SET `username` = ?, `user_password` = ? where binary `email` = ? and binary `last_name` = ?"
    db.query(myQuery, [username, user_password, email, last_name], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            console.log(err);
            result(null, results);
        }
    });   
}
export const getOneUser = (username, result) => {
    const myquery = "select `username` from `user` where binary `username` = ?"
    db.query(myquery, [username], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}