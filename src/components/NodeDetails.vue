<template>
  <div class="list-group list-group-flush">
    <DetailItem detailname="micro" detailvalue="tipton" />
    <DetailItem
      v-for="d in details"
      :key="d.id"
      :detailname="d.detailname"
      :detailvalue="d.detailvalue"
    />
    <a
      href=""
      class="list-group-item list-group-item-primary d-flex justify-content-center"
      ><i class="fas fa-plus-square fs-4"></i
    ></a>
  </div>
</template>

<script>
import DetailItem from "./DetailItem";
export default {
  name: "NodeDetails",
  components: {
    DetailItem,
  },
  props: {
    details: Array,
  },
  /*
  data() {
    return {
      details: [
        { id: 1, detailname: "brand", detailvalue: "GE" },
        { id: 2, detailname: "purchase store", detailvalue: "Best Buy" },
      ],
    };
  },
  */
};
</script>