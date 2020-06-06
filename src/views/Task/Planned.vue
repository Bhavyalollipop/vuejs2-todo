<template>
  <div>
    <div class="mb-5">
      <TaskForm :items="filtereditemList" />
    </div>
  </div>
</template>
<script>
import TaskForm from "@/components/TaskForm";
import { mapState } from "vuex"; // get data set in the state in vuex
export default {
  name: "Task",
  components: {
    TaskForm
  },
  beforeDestroy() {
    this.searchitems = "";
  },
  computed: {
    filtereditemList() {
      return this.items.filter(item => {
        if (
          item.label &&
          item.label.toLowerCase().includes(this.searchitems.toLowerCase()) &&
          item.due_date
        ) {
          return item;
        }
      });
    },
    ...mapState({
      items: state => state.todo.tasks
    }),
    searchitems: {
      get() {
        return this.$store.state.todo.searchitems;
      },
      set(val) {
        this.$store.state.todo.searchitems = val;
      }
    }
  }
};
</script>