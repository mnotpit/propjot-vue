//import Vue from "vue"
import { createApp } from "vue";
import { createStore } from "vuex";
//import Vuex from "vuex";
//import PropNode from "./models";
import App from "./App.vue";

//Vue.use(Vuex);
//Vue.config.productionTip = false;

const currentProperty = {
  propertyDetail: {},
  nodes: [
    {
      nodeId: 1,
      parentNodeId: 0,
      name: "Trails End",
      nodeTypeId: "",
      resources: []
    }
  ],
  tasks: [{ nodeId: 1, taskName: "", taskStatus: false }],
  /*
   types 0-9: root/global types
   10: a structure on property
   20: level within structure
   30: room/space
   40: room/space furnishing groups

   1000+: 
  */
  nodeTypes: [
    { typeId: 0, name: "Property" },
    { typeId: 1, name: "Structure Group" },
    { typeId: 2, name: "Outdoor Feature Group" },
    { typeId: 3, name: "Utility Group" },
    { typeId: 10, name: "Structure" },
    { typeId: 20, name: "Level" },
    { typeId: 30, name: "Space" },
    { typeId: 40, name: "Appliance Group" },
    { typeId: 41, name: "Furnishing Group" },
    { typeId: 42, name: "Infrastructure Element" },
    { typeId: 1000, name: "Furnishing Item" },
    { typeId: 1001, name: "Appliance" }
  ],
  nodeTypeChildren: [
    { parentTypeId: 0, childTypeIds: [1, 2, 3, 1000] },
    { parentTypeId: 1, childTypeIds: [10] },
    { parentTypeId: 2, childTypeIds: [] },
    { parentTypeId: 20, childTypeIds: [30, 1000] },
    { parentTypeId: 30, childTypeIds: [40, 41] }
  ]
};

const exampleNode = {
  id: 1111,
  name: "testnode1",
  nodetype: 5,
  nodeparent: 111,
  childnodes: [
    { id: 1, name: "child1" },
    { id: 2, name: "child2" },
    { id: 3, name: "child3" },
    { id: 4, name: "child4" }
  ],
  details: [
    { id: 1, detailname: "brand", detailvalue: "GE" },
    { id: 2, detailname: "purchase store", detailvalue: "Best Buy" },
    { id: 3, detailname: "package price", detailvalue: "$2000" }
  ],
  tasks: [
    { id: 1, name: "Finish PropJot", status: false },
    { id: 2, name: "Convert vue to mobile app", status: true }
  ],
  resources: [
    { id: 1, name: "Menards Black Friday", url: "https://menards.com" },
    { id: 2, name: "Jot my info", url: "http://jotmy.info" }
  ],
  breadcrumbs: [
    { name: "Trails End", path: "/n/0" },
    { name: "Structures", path: "/n/1" },
    { name: "Main House", path: "/n/2" },
    { name: "First Floor", path: "/n/3" },
    { name: "Kitchen", path: "/n/4" }
  ]
};

const pjstore = createStore({
  state: {
    currentNode: exampleNode,
    currentNodeId: 0
  },
  mutations: {
    addNode(state, newNode) {
      console.log("mutations.addNode");
      state.currentNode.childnodes.push(newNode);
    },
    addTask(state, newTask) {
      state.currentNode.tasks.push(newTask);
    }
  }
});
/*
const appData = {
  data() {
    return { routeNodeId: 0 };
  }
};
*/
createApp(App).use(pjstore).mount("#pjapp");
/*
new Vue({
  render: (h) => h(App),
  store: pjstore
}).$mount("#pjapp");
*/
