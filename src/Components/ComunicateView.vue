<template>
  <div id="comunicate" @click="$modal.show(comunicate.id.toString())">
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
          v-if="file.type == 'pdf/*'"
        >
          <div v-if="file.type == 'pdf/*'">
            <font-awesome-icon :icon="['far', 'file-pdf']"/>
            <div class="url-content">
              <span>{{ file.url }}</span>
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
</template>


<script>
import moment from "moment";
export default {
  props: {
    comunicate: Object,
    comunicateTypes: Array
  },
  data() {
    return {
      formatDateBr(date) {
        return moment(String(date)).format("DD/MM/YYYY - hh[h]mm");
      },
      modalShow(comunicateId) {
        $modal.show(comunicateId);
      },
      modalHide() {
        $modal.hide(comunicateId);
      }
    };
  }
};
</script>