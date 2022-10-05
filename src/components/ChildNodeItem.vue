<template>
  <a href="" class="list-group-item d-flex justify-content-between"
    >{{ name }}
    <span class="badge bg-primary rounded-pill">2</span>
  </a>
</template>

<script>
export default {
  name: "ChildNodeItem",
  props: {
    id: Number,
    name: String,
  },
};
</script>