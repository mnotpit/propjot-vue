<template>
  <a href="" class="list-group-item">
    <span class="detail-name">{{ detailname }}: </span> {{ detailvalue }}</a
  >
</template>

<script>
export default {
  name: "DetailItem",
  props: {
    detailname: String,
    detailvalue: String,
  },
};
</script>