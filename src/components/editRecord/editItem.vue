<template>
  <center>
    <div class="container mt-3 mb-3 d-flex justify-content-center">
      <div class="card px-3 py-3 alert-primary clearfix">
        <div class="card-body">
        <h6 class="information mt-0">Fill in the form below to edit ITEM</h6>

            <div class="row  mt-4">
              <div class="col-sm-12">
                <div class="form-group">
                  <input class="form-control" type="text" placeholder="Item Type" v-model="itemType" required/>
                </div>
              </div>
            </div>

            <div class="control">
              <button class="btn btn-info mt-4" @click.prevent="updateItem">UPDATE</button>
            </div>   

        </div>
      </div>
    </div>
  </center>  
</template>

<script>
import axios from "axios";
 
export default {
  data() {
    return {
      itemType: "",
    };
  },
  created: function () {
    this.getCustomerById();
  },
  methods: {
    async getCustomerById() {
      try {
        const response = await axios.get(
          `http://localhost:3000/items/${this.$route.params.id}`
        );
        this.itemType = response.data.item_type;
      } catch (err) {
        console.log(err);
      }
    },
 
    async updateItem() {
      try {
        await axios.put(
          `http://localhost:3000/items/${this.$route.params.id}`,
          {
            item_type: this.itemType,
          }
        );
        this.$router.push("/items");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>