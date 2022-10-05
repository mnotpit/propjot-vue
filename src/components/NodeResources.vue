<template>
  <div class="list-group list-group-flush">
    <ResourceItem
      v-for="r in resources"
      :key="r.id"
      :name="r.name"
      :url="r.url"
    />
    <a
      href=""
      class="list-group-item list-group-item-primary d-flex justify-content-center"
      ><i class="fas fa-plus-square fs-4"></i
    ></a>
  </div>
</template>

<script>
import ResourceItem from "./ResourceItem";

export default {
  name: "NodeResources",
  props: {
    resources: Array,
  },
  components: {
    ResourceItem,
  },
};
</script>