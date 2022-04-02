<template>
  <center>
    <div class="container mt-3 mb-3 d-flex justify-content-center">
      <div class="card px-3 py-3 alert-primary clearfix">
        <div class="card-body">
        <h6 class="information mt-0">Fill in the form below to add a new ITEM</h6>

            <div class="row  mt-4">
              <div class="col-sm-12">
                <div class="form-group">
                  <input class="form-control" type="text" placeholder="Item Type" v-model="itemType" required/>
                </div>
              </div>
            </div>

            <div class="control">
              <button class="btn btn-info mt-4" @click.prevent="saveItem">SAVE</button>
            </div>   

        </div>
      </div>
    </div>
  </center>  
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  data() {
    return {
      itemType: "",
    };
  },
  methods: {
    // Create New customer
    async saveItem() {
      try {
        await axios.post("http://localhost:3000/items", {
          item_type: this.itemType,
        });
        this.$router.push("/items");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
    .btn {
        margin-right: 10px;
    }
</style>