<template>
  <li class="breadcrumb-item">
    <a :href="path">{{ name }}</a>
  </li>
</template>

<script>
export default {
  name: "BreadcrumbItem",
  props: {
    name: String,
    path: String,
  },
};
</script>