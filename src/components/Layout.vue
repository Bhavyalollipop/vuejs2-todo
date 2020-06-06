<template>
  <div class="wrapper">
    <!--  simple sidebar component to show navigaiton -->
    <Sidebar :inactivesidebar="inactivesidebar" />
    <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <!-- header content if needed here i have give simple toggle bar for active and inactie nabigation -->
        <div class="container-fluid">
          <!-- sidebar toggle icon  -->

          <input
            type="text"
            v-model="searchitems"
            placeholder="Type to search..."
            class="form-control float-right"
            style="width:30%"
          />
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="button"
            aria-pressed="false"
            autocomplete="off"
            @click="runlang(lang == 'en' ? 'hi' : 'en')"
          >On {{ lang =='en' ? 'Hindi' : 'English' }}</button>
        </div>
      </nav>
      <router-view />
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import i18n from "@/i18n";

export default {
  data() {
    return {
      inactivesidebar: false // inactive side bar
    };
  },
  components: {
    Sidebar // sidebar component
  },
  methods: {
    runlang(lang) {
      this.lang = lang;
      i18n.locale = lang;
    }
  },
  computed: {
    // to udpate the network error details tab
    searchitems: {
      get() {
        return this.$store.state.todo.searchitems;
      },
      set(val) {
        this.$store.state.todo.searchitems = val;
      }
    },
    lang: {
      get() {
        return this.$store.state.todo.lang;
      },
      set(val) {
        this.$store.state.todo.lang = val;
      }
    }
  }
};
</script>
