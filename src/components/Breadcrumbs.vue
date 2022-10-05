<template>
  <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <BreadcrumbItem
        v-for="b in breadcrumbs"
        :key="b.path"
        :name="b.name"
        :path="b.path"
      />
      <strong>here {{ $store.state.currentNodeId }}</strong>
    </ol>
  </nav>
</template>

<script>
import BreadcrumbItem from "./BreadcrumbItem";

export default {
  name: "Breadcrumbs",
  props: {
    breadcrumbs: Array,
  },
  components: {
    BreadcrumbItem,
  },
};
</script>