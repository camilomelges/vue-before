<template>
  <div class="comunicates">
    <div
      class="comunicate"
      v-bind:key="comunicate.id"
      v-for="comunicate in comunicates"
      v-bind:style="colorBorder(comunicate.type)"
    >{{ comunicate.title }}</div>
  </div>
</template>
<script>
import { comunicados, tiposComunicados } from "../../endpoints/db.json";
export default {
  data() {
    return {
      comunicates: comunicados,
      colorBorder(type) {
      switch (type) {
        case 3:
          return {borderLeft: '5px solid #FF9900'}
          break;
        case 2:
          return {borderLeft: '5px solid #56CCF2'}
          break;
        case 1:
          return {borderLeft: '5px solid #79C126'}
          break;
        default:
          return {borderLeft: '5px solid #660099'}
          break;
      }
    }
    };
  }
};
</script>

<style lang="scss" scoped>
.comunicates {
  padding-left: 15px;
  padding-right: 15px;
  .comunicate {
    border-radius: 0.2em;
    background-color: #ffff;
    padding: 10px;
    margin-bottom: 20px;
    -webkit-box-shadow: -1px 6px 10px -2px #edecee;
    -moz-box-shadow: -1px 6px 10px -2px #edecee;
    box-shadow: -1px 6px 10px -2px #edecee;
  }
}
</style>
