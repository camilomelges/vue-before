<template>
  <div class="comunicates">
    <div
      class="comunicate"
      v-bind:key="comunicate.id"
      v-for="comunicate in comunicates"
      v-bind:style="colorBorder(comunicate.type, comunicate.seen)"
      v-bind:title="comunicate.description"
    >
      <Comunicate :comunicate="comunicate" :comunicateTypes="comunicateTypes"/>
    </div>
  </div>
</template>
<script>
import { comunicados, tiposComunicados } from "../../endpoints/db.json";
import Comunicate from "./Comunicate.vue";
if (!localStorage.comunications || localStorage.comunications.length == 0) {
  localStorage.setItem("comunications", JSON.stringify(comunicados));
}

export default {
  data() {
    return {
      comunicates: JSON.parse(localStorage.getItem("comunications")),
      comunicateTypes: tiposComunicados,
      colorBorder(type, seen) {
        this.seenDiv = seen ? "#eaeaea" : "#ffff";
        this.pointEvents = seen ? "none" : "true";
        switch (type) {
          case 3:
            return {
              borderLeft: "5px solid #FF9900",
              backgroundColor: this.seenDiv,
              pointerEvents: this.pointEvents
            };
            break;
          case 2:
            return {
              borderLeft: "5px solid #56CCF2",
              backgroundColor: this.seenDiv,
              pointerEvents: this.pointEvents
            };
            break;
          case 1:
            return {
              borderLeft: "5px solid #79C126",
              backgroundColor: this.seenDiv,
              pointerEvents: this.pointEvents
            };
            break;
          default:
            return {
              borderLeft: "5px solid #660099",
              backgroundColor: this.seenDiv,
              pointerEvents: this.pointEvents
            };
            break;
        }
      }
    };
  },
  components: {
    Comunicate
  }
};
</script>

<style lang="scss" scope>
@import "../Webroot/Styles/comunicates.scss";
</style>