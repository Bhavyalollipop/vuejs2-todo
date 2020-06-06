<!--
frontend-author:harini ,
backend-author: ,
page-name :Signin.vue,
page-description :Login Page for Authentication ,
started at : 21-Mar-2019,
edited at : 11-Apr-2019.
-->
<template>
  <div class="signin">
    <b-container>
      <b-row align-h="center" class="mb-5">
        <!-- Background -image block -->
        <b-col cols xl="7" lg="7" md="6" class="login-bg"></b-col>
        <!-- RegisterForm block -->
        <b-col cols xl="5" lg="5" md="6" sm="12" class="mt-1" style="max-width:400px;">
          <div class="card mt-2">
            <div class="card-body">
              <b-form @submit.prevent="onSubmit" v-if="show" id="signin_form">
                <h4 class="text-center mt-5 pt-5 mb-0">One step to go</h4>

                <div class="form-group mt-5 text-left">
                  <b-input
                    type="text"
                    id="username"
                    name="username"
                    v-model="form.username"
                    v-validate="'required|max:100'"
                    class="form-control"
                  />
                  <label class="form-control-placeholder" for="username">User Name</label>
                </div>

                <!-- Submit Button for Form -->
                <b-button block type="submit" variant="primary" :disabled="submitted">
                  <div class="d-flex mx-auto justify-content-center">
                    Go to
                    <div v-if="submitted" class="loader ml-2 my-auto"></div>
                  </div>
                </b-button>
              </b-form>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      errormessage: "",
      successmessage: "",
      alertbox: true,
      successalertbox: true,
      url: "",
      show: true,
      submitted: false
    };
  },

  methods: {
    onSubmit() {
      if (!this.form.username) {
        alert("please provide name !");
        return;
      }
      this.$store.dispatch("login/siging", this.form).then(() => {
        this.$router.push({
          name: "GeneralTask"
        });
      });
    }
  },
  created() {
    if (this.token) {
      this.$router.push({
        name: "GeneralTask"
      });
    }
  },
  computed: {
    ...mapGetters(["token"])
  }
};
</script>
