<template>
  <div class="comunicates">
    <div
      class="comunicate"
      v-bind:key="comunicate.id"
      v-for="comunicate in comunicates"
      v-bind:style="colorBorder(comunicate.type)"
      v-bind:title="comunicate.description">
      <Comunicate :comunicate="comunicate" :comunicateTypes="comunicateTypes"/>
    </div>
  </div>
</template>
<script>
import { comunicados, tiposComunicados } from "../../endpoints/db.json";
import Comunicate from './Comunicate.vue';
export default {
  data() {
    return {
      comunicates: comunicados,
      comunicateTypes: tiposComunicados,
      colorBorder(type) {
        switch (type) {
          case 3:
            return { borderLeft: "5px solid #FF9900" };
            break;
          case 2:
            return { borderLeft: "5px solid #56CCF2" };
            break;
          case 1:
            return { borderLeft: "5px solid #79C126" };
            break;
          default:
            return { borderLeft: "5px solid #660099" };
            break;
        }
      }
    }
  },
  components: {
    Comunicate
  }
};
</script>

<style lang="scss" scope>
@import "../Webroot/Styles/comunicates.scss";
</style>