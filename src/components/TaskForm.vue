<template>
  <div>
    <div class="pb-4">
      <b-row>
        <b-col cols="12">
          <!--  list of task added -->
          <ul class="task list-group">
            <!--  if no items are present -->
            <li
              class="list-group-item text-center"
              v-if="items.length == 0"
            >{{ this.$route.name == "ImportantTask" ? 'Bookmark any task to show it is important' : 'Start organizing your task' }}</li>
            <li
              class="list-group-item"
              v-for="(item,index) in items"
              :key="item.id"
              @mouseover="showByIndex = index"
              @mouseout="showByIndex = null"
              v-else
            >
              <!--  mark as complete -->
              <b-form-checkbox
                style="cursor:pointer"
                v-model="item.completed"
                :name="'checkbox'+index"
                value="true"
                unchecked-value="false"
                class="float-left"
              ></b-form-checkbox>
              <!-- show label -->
              <span class="float-left">
                {{ item.label }}
                <br />
                <small
                  v-if="item.due_date"
                  :class="{'text-danger':now >= item.due_date  ? true : false}"
                >
                  <strong>Due Date :</strong>
                  {{ item.due_date}}
                </small>
                <small v-else>(Date not specified)</small>
              </span>
              <!-- book mark the items -->
              <i
                class="float-right"
                style="cursor:pointer"
                @click="item.important =!item.important"
                :class="{'fa fa-bookmark':item.important,'la la-bookmark':!item.important}"
              ></i>
              <br />
              <span v-show="showByIndex === index">
                <i
                  @click="spliceindex(item.id)"
                  class="la la-trash float-right"
                  style="cursor:pointer"
                ></i>
              </span>
            </li>
          </ul>
        </b-col>
      </b-row>
    </div>
    <div class="footer">
      <InputTask />
    </div>
  </div>
</template>
<script>
import InputTask from "@/components/AddTask";
import moment from "moment"; // to control date format
export default {
  props: ["items"],
  name: "Task",
  components: {
    InputTask
  },
  data() {
    return {
      showByIndex: "",
      now: moment().format("MMM DD, YYYY")
    };
  },
  methods: {
    spliceindex(id) {
      // remove the task from the list
      this.$store.dispatch("todo/deleteitem", id).then(() => {
        this.showByIndex = "";
      });
    }
  }
};
</script>