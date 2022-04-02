<template>
  <center>
    <div class="container mt-3 mb-3 d-flex justify-content-center">
      <div class="card px-3 py-3 alert-primary clearfix">
        <div class="card-body">
        <h6 class="information mt-0">Fill in the form below to edit SERVICE</h6>

            <div class="row  mt-4">
              <div class="col-sm-12">
                <div class="form-group">
                  <input class="form-control" type="text" placeholder="Service Description" v-model="serviceDesc" required/>
                </div>
              </div>
            </div>

            <div class="row  mt-4">
              <div class="col-sm-12">
                <div class="form-group">
                   <div id="v-model-select">
                    <select class="form-control" v-model="serviceOutsourced">
                        <option disabled value="">Click to select if outsourced or not</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                </div>
              </div>
            </div>

            <div class="control">
              <button class="btn btn-info mt-4" @click.prevent="updateService">UPDATE</button>
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
      serviceDesc: "",
      serviceOutsourced: "",
    };
  },
  created: function () {
    this.getServiceByID();
  },
  methods: {
    async getServiceByID() {
      try {
        const response = await axios.get(
          `http://localhost:3000/services/${this.$route.params.id}`
        );
        this.serviceDesc = response.data.service_desc;
        this.serviceOutsourced = response.data.service_outsourced;
      } catch (err) {
        console.log(err);
      }
    },
 
    async updateService() {
      try {
        await axios.put(
          `http://localhost:3000/services/${this.$route.params.id}`,
          {
            service_desc: this.serviceDesc,
            service_outsourced: this.serviceOutsourced,
          }
        );
        this.$router.push("/services");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>