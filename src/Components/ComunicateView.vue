<template>
  <div id="comunicateView" class="comunicatesView">
    <div
      class="comunicateView"
      v-bind:style="changeStyle(comunicate.type, comunicate.files)">
    <div class="text-center m-t-15p">
      <h1 class="m-t-20">{{ comunicateTypes[comunicate.type].name + ' - ' + comunicate.title }}</h1>
      <p class="m-t-20">{{ comunicate.description }}</p>
      <h4 class="m-t-20">{{ formatDateBr(comunicate.date) }}</h4>
    </div>
    </div>
  </div>
</template>


<script>
import { comunicados, tiposComunicados } from "../../endpoints/db.json";
import moment from "moment";
export default {
  data() {
    return {
      comunicateId: this.$route.params.comunicateId,
      comunicates: comunicados,
      comunicateTypes: tiposComunicados,
      formatDateBr(date) {
        return moment(String(date)).format("DD/MM/YYYY - hh[h]mm");
      },
      changeStyle(type, files) {
        this.fileUrl = false;
        if (files && files.length > 0) {
          files.forEach(file => {
            console.log(file.type);
            if (file.type == 'image/*') {
              this.fileUrl = `url(http://localhost:3000/${file.url})`;
              console.log(this.fileUrl)
            }
          });
        }
        switch (type) {
          case 3:
            return { borderLeft: "5px solid #FF9900", backgroundImage: this.fileUrl };
            break;
          case 2:
            return { borderLeft: "5px solid #56CCF2", backgroundImage: this.fileUrl };
            break;
          case 1:
            return { borderLeft: "5px solid #79C126", backgroundImage: this.fileUrl };
            break;
          default:
            return { borderLeft: "5px solid #660099", backgroundImage: this.fileUrl };
            break;
        }
      }
    };
  },
  created() {
    this.comunicates.forEach(comunicate => {
      if (comunicate.id != this.comunicateId) return;

      this.comunicate = comunicate;
    });
  }
};
</script>

<style lang="scss" scope>
@import "../Webroot/Styles/comunicateView.scss";
</style>