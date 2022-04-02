<template>
    <nav  class="navbar navbar-expand navbar-dark bg-dark navbar sticky-top" v-if="!$route.meta.hideNavbar">
      <div class="container-fluid">
        <ul class="nav navbar-nav mr-auto" >
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">OTHER TABLES</a>
              <ul class="dropdown-menu navbar-dark bg-dark" aria-labelledby="navbarDropdownMenuLink">
                <li class="nav-item">
                  <router-link class="nav-link" to="/items">Items</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/services">Services</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/vendors">Vendors</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/payments">Vendor Payment</router-link>
                </li>
              </ul>
            </li>
        </ul>
        <ul class="nav navbar-nav ">
          <li class="nav-item">
            <a class="navbar-brand" href="/dashboard"><img alt="Vue logo" src="./assets/bronnas.png"></a>
          </li>
        </ul>
        <ul class="nav navbar-nav mr-auto" >
            <li class="nav-item">
              <router-link class="nav-link" to="/customers">Customers</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/invoices">Invoices</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/" @click="removeIt" >Logout</router-link>
            </li>
        </ul>
      </div>
    </nav>
   
    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
</template>

<script>
export default{
    mounted: function(){
      this.idleLogout();
    },
    methods: {
      async removeIt() {
        localStorage.removeItem("stuff");
    },
    idleLogout() {
      var close;
      window.onload = resetTimer;
      window.onmousemove = resetTimer;
      window.onmousedown = resetTimer;      
      window.ontouchstart = resetTimer;     
      window.ontouchmove = resetTimer; 
      window.onclick = resetTimer;
      window.onkeydown = resetTimer;   
      window.addEventListener('scroll', resetTimer, true);

      function clear() {
        localStorage.removeItem("stuff");
        window.location.reload();
      }

      function resetTimer() {
          clearTimeout(close);
          close = setTimeout(clear, 300000);
      }
  },

  }
}
</script>