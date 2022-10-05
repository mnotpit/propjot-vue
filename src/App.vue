<template>
  <div>
    <Breadcrumbs :breadcrumbs="$store.state.currentNode.breadcrumbs" />
    <NodeCard :node="$store.state.currentNode" />
    <ModalNewNode />
  </div>
</template>

<script>
import Breadcrumbs from "./components/Breadcrumbs";
import NodeCard from "./components/NodeCard";
import ModalNewNode from "./components/ModalNewNode";
/*
const cn = {
  id: 1111,
  name: "testnode1",
  nodetype: 5,
  nodeparent: 111,
  childnodes: [
    { id: 1, name: "child1" },
    { id: 2, name: "child2" },
    { id: 3, name: "child3" },
    { id: 4, name: "child4" },
  ],
  details: [
    { id: 1, detailname: "brand", detailvalue: "GE" },
    { id: 2, detailname: "purchase store", detailvalue: "Best Buy" },
    { id: 3, detailname: "package price", detailvalue: "$2000" },
  ],
  tasks: [
    { id: 1, name: "Finish PropJot", status: false },
    { id: 2, name: "Convert vue to mobile app", status: true },
  ],
  resources: [
    { id: 1, name: "Menards Black Friday", url: "https://menards.com" },
    { id: 2, name: "Jot my info", url: "http://jotmy.info" },
  ],
  breadcrumbs: [
    { name: "Trails End", path: "/n/0" },
    { name: "Structures", path: "/n/1" },
    { name: "Main House", path: "/n/2" },
    { name: "First Floor", path: "/n/3" },
    { name: "Kitchen", path: "/n/4" },
  ],
};
*/
export default {
  name: "App",
  components: {
    Breadcrumbs,
    NodeCard,
    ModalNewNode,
  },
  data() {
    return {
      //      cn: cn,
    };
  },
  computed: {
    currentNode() {
      return this.$store.currentNode;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
