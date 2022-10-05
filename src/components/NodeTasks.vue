<template>
  <ul class="list-group list-group-flush">
    <TaskItem
      v-for="t in tasks"
      :key="t.id"
      :name="t.name"
      :status="t.status"
    />
    <a
      href=""
      class="list-group-item list-group-item-primary d-flex justify-content-center"
      ><i class="fas fa-plus-square fs-4"></i
    ></a>
  </ul>
</template>

<script>
import TaskItem from "./TaskItem";

export default {
  name: "NodeTasks",
  components: {
    TaskItem,
  },
  props: {
    tasks: Array,
  },
};
</script>