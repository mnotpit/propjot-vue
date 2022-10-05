<template>
  <a :href="url" class="list-group-item"
    >{{ name }}<i class="fas fa-external-link-alt"></i
  ></a>
</template>

<script>
export default {
  name: "ResourceItem",
  props: {
    id: Number,
    name: String,
    url: String,
  },
};
</script>