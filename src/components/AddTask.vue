<template>
  <div>
    <!--  for planned task show with date picker else simply show the input field -->
    <input
      type="text"
      v-if="$route.name != 'PlannedTask'"
      v-model="task"
      placeholder="Add Your Task"
      class="form-control"
      v-on:keyup.enter="onSubmit()"
    />
    <!-- field with date picker -->
    <b-input-group class="mt-3" v-else>
      <template v-slot:append>
        <b-input-group-text>
          <DatePicker
            :clearable="false"
            inline="false"
            v-model="due_date"
            lang="en"
            style="cursor:pointer"
          >
            <i class="fa fa-calendar text-dark" slot="calendar-icon" />
          </DatePicker>
        </b-input-group-text>
      </template>
      <b-form-input placeholder="Add Your Task" v-model="task" v-on:keyup.enter="onSubmit()"></b-form-input>
    </b-input-group>
  </div>
</template>
<script>
import { mapState } from "vuex"; // mapstate from vuex store
import DatePicker from "vue2-datepicker"; // vue datepicker
export default {
  name: "Task",
  components: {
    DatePicker
  },
  data() {
    return {
      task: "",
      due_date: ""
    };
  },
  methods: {
    onSubmit() {
      if (!this.due_date && this.$route.name == "PlannedTask") {
        alert("Please choose date !");
        return;
      }
      if (this.items.length > 100) {
        alert("Please remove the existing task to add more !");
        return;
      }
      var data = {
        id: parseInt(this.items.length) + 1,
        completed: false,
        important: this.$route.name == "ImportantTask" ? true : false,
        due_date: this.$options.filters.dateformat(this.due_date),
        label: this.task
      };
      this.$store.dispatch("todo/addlist", data).then(() => {
        this.task = "";
      });
    }
  },
  computed: {
    ...mapState({
      items: state => state.todo.tasks
    })
  }
};
</script>
