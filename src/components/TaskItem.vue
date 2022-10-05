<template>
  <li class="list-group-item">
    <input
      type="checkbox"
      class="form-check-input"
      id="task1"
      :checked="status"
    />
    <label for="task1" class="form-input-label">{{ name }}</label>
  </li>
</template>

<script>
export default {
  name: "TaskItem",
  props: {
    id: Number,
    name: String,
    status: Boolean,
  },
};
</script>