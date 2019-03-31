<template>
  <div class="comunicates">
    <div
      class="comunicate"
      v-bind:key="comunicate.id"
      v-for="comunicate in comunicates"
      v-bind:style="colorBorder(comunicate.type)"
      v-if="comunicate.type == 1">
      <div class="comunicate-top-data">
        <span class="title">{{ comunicate.title }}</span>
        <span class="id">{{ comunicate.id }}</span>
      </div>
      <div class="comunicate-bottom-data">
        <span class="typeName">{{ comunicateTypes[comunicate.type].name }}</span>
        <span class="date">{{ formatDateBr(comunicate.date) }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { comunicados, tiposComunicados } from "../../endpoints/db.json";
import moment from 'moment';
export default {
  data() {
    return {
      comunicates: comunicados,
      comunicateTypes: tiposComunicados,
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
      },
      formatDateBr(date) {
        return moment(String(date)).format('DD/MM/YYYY - hh[h]mm')
      }
    };
  }
};
</script>

<style lang="scss" scope>
@import "../Webroot/Styles/comunicates.scss";
</style>