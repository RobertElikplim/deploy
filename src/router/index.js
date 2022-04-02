import { createRouter, createWebHistory } from 'vue-router'
//import Customers from '../components/viewRecords/Customers.vue'
import Dashboard from '../components/Dashboard.vue'
import Items from '../components/viewRecords/Items.vue'
import Invoiceline from '../components/viewRecords/Invoiceline.vue'
// import Invoices from '../components/viewRecords/Invoices.vue'
import Services from '../components/viewRecords/Services.vue'
import Vendors from '../components/viewRecords/Vendors.vue'
import Payment from '../components/viewRecords/VendorPayment.vue'
import CreateCust from '../components/addRecord/addCustomer.vue'
import CreateInvline from '../components/addRecord/addInvLine.vue'
import CreateInvoiceLine from '../components/addRecord/addInvoiceLine'
import CreateInvoice from '../components/addRecord/addInvoice.vue'
import CreateItems from '../components/addRecord/addItems.vue'
import CreateServe from '../components/addRecord/addServices.vue'
import CreateVend from '../components/addRecord/addVendors.vue'
import CreatePay from '../components/addRecord/addPayment.vue'
import EditCustomer from '../components/editRecord/editCustomer.vue'
import EditInvoice from '../components/editRecord/editInvoice.vue'
import EditInvoiceline from '../components/editRecord/editInvoiceline.vue'
import EditItem from '../components/editRecord/editItem.vue'
import EditPayment from '../components/editRecord/editPayment.vue'
import EditServices from '../components/editRecord/editServices.vue'
import EditVendors from '../components/editRecord/editVendors.vue'
import viewInvoice from '../components/views/ViewInvoice.vue'
import viewCustomer from '../components/views/ViewCustomer.vue'
import findInvoice from '../components/viewRecords/findInvoice.vue'
import findCustomer from '../components/viewRecords/findCustomer.vue'
import register from '../components/register.vue'
import login from '../components/login.vue'
import resetPassword from '../components/resetPassword.vue'

function guest(to, form, next){
  if(localStorage.getItem('stuff') !== null){
    next()
  }else next('/');
}

function guard(to, form, next){
  if(localStorage.getItem('stuff') !== null){
    next()
  }else next('/');
}

const routes = [
  {
    name: 'ViewInvoice',
    path: '/invoice/view/:id',
    component: viewInvoice,
    beforeEnter: guard,
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {
      hideNavbar: true,
      beforeEnter: guest,
    }
  },
  {
    path: '/',
    name: 'login',
    component: login,
    meta: {
      hideNavbar: true,
      beforeEnter: guest,
    }
  },
  {
    path: '/reset',
    name: 'reset',
    component: resetPassword,
    meta: {
      hideNavbar: true,
    }
  },
  {
    name: 'Customers',
    path: '/customers',
    component: findCustomer,
    beforeEnter: guard,
  },
  {
    name: 'viewCustomer',
    path: '/customers/:id',
    component: viewCustomer,
    beforeEnter: guard,
 },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: guard,
  },
  {
    name: 'Items',
    path: '/items',
    component: Items,
    beforeEnter: guard,
  },
  {
    name: 'Invoiceline',
    path: '/invoiceline',
    component: Invoiceline,
    beforeEnter: guard,
  },
  {
    name: 'Invoices',
    path: '/invoices',
    component: findInvoice,
    beforeEnter: guard,
  },
  {
    name: 'Services',
    path: '/services',
    component: Services,
    beforeEnter: guard,
  },
  {
    name: 'Vendors',
    path: '/vendors',
    component: Vendors,
    beforeEnter: guard,
  },
  {
    name: 'Payment',
    path: '/payments',
    component: Payment,
    beforeEnter: guard,
  },
  {
    name: 'CreateCust',
    path: '/createcust',
    component: CreateCust,
    beforeEnter: guard,
  },
  {
    name: 'CreateInvline',
    path: '/createinvline',
    component: CreateInvline,
    beforeEnter: guard,
  },
  {
     name: 'CreateInvoiceLine',
     path: '/invoice/:id/add',
     component: CreateInvoiceLine,
     beforeEnter: guard,
  },
  {
    name: 'CreateInvoice',
    path: '/createinvoice/:id',
    component: CreateInvoice,
    beforeEnter: guard,
  },
  {
    name: 'CreateItems',
    path: '/createitem',
    component: CreateItems,
    beforeEnter: guard,
  },
  {
    name: 'CreateServe',
    path: '/createservice',
    component: CreateServe,
    beforeEnter: guard,
  },
  {
    name: 'CreateVend',
    path: '/createvendor',
    component: CreateVend,
    beforeEnter: guard,
  },
  {
    name: 'CreatePay',
    path: '/creatpayment',
    component: CreatePay,
    beforeEnter: guard,
  },
  {
    name: 'EditCustomer',
    path: '/customer/:id',
    component: EditCustomer,
    beforeEnter: guard,
  },
  {
    name: 'EditInvoice',
    path: '/invoice/:id',
    component: EditInvoice,
    beforeEnter: guard,
  },
  {
    name: 'EditInvoiceline',
    path: '/invoiceline/:id',
    component: EditInvoiceline,
    beforeEnter: guard,
  },
  {
    name: 'EditItem',
    path: '/item/id',
    component: EditItem,
    beforeEnter: guard,
  },
  {
    name: 'EditPayment',
    path: '/payment/id',
    component: EditPayment,
    beforeEnter: guard,
  },
  {
    name: 'EditServices',
    path: '/service/id',
    component: EditServices,
    beforeEnter: guard,
  },
  {
    name: 'EditVendors',
    path: '/vendors/id',
    component: EditVendors,
    beforeEnter: guard,
  },
  // {
  //   name: 'findInvoice',
  //   path: '/invoice/search',
  //   component: findInvoice
  // },
];

/* router.beforeEach((to, from, next) =>{
  if(to.localStorage.getItem('stuff') === null){
    next('/');
  } else if(localStorage.getItem('stuff')){
    next()
  }
}); */

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
export default router;