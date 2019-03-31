<template>
  <div class="comunicates">
    <div
      class="comunicate"
      v-bind:key="comunicate.id"
      v-for="comunicate in comunicates"
      v-bind:style="colorBorder(comunicate.type)"
      v-bind:title="comunicate.description"
      >
      <div class="comunicate-top-data">
        <span class="title">{{ comunicate.title }}</span>
        <span class="id">{{ comunicate.id }}</span>
      </div>
      <div v-if="comunicate.files">
        <div v-if="comunicate.files.length > 0">
          <div
            class="files"
            v-bind:key="file.name"
            v-for="file in comunicate.files"
            v-if="file.type == 'pdf/*'">
            <div v-if="file.type == 'pdf/*'">
              <font-awesome-icon :icon="['far', 'file-pdf']"/>
              <div class="url-content">
                <span>
                  {{ file.url }}
                </span>
              </div>
              <div class="download-content">
                <font-awesome-icon stlye="float: right" :icon="['fas', 'cloud-download-alt']"/>
              </div>
            </div>
          </div>
        </div>
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