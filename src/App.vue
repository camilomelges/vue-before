<template>
  <div id="app" class="col-md-12">
    <header>
      <button id="header-menu-button" class="header-menu-button">
        <font-awesome-icon icon="bars"/>
      </button>
      <ul class="col-md-2 col-sm-6 header-menu">
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'sunInformations' }">Informativos SUN</router-link></li>
        <li><router-link :to="{ name: 'salesForce' }">Força de Vendas</router-link></li>
        <li><router-link :to="{ name: 'connectedVivo' }">Vivo Ligado</router-link></li>
        <li><router-link :to="{ name: 'turbineSales' }">Turbine suas vendas</router-link></li>
      </ul>
      <span>Comunicados</span>
      <button class="float-right">
        <font-awesome-icon icon="search"/>
      </button>
    </header>
    <section class="body-section">
      <nav>
        <span>Categorias</span>
        <div class="handout-types">
          <router-link :to="{ name: 'home' }">Home</router-link>
          <router-link :to="{ name: 'sunInformations' }">Informativos SUN</router-link>
          <router-link :to="{ name: 'salesForce' }">Força de Vendas</router-link>
          <router-link :to="{ name: 'connectedVivo' }">Vivo Ligado</router-link>
          <router-link :to="{ name: 'turbineSales' }">Turbine suas vendas</router-link>
        </div>
      </nav>
      <router-view/>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuSeen: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./Webroot/Styles/app.scss";
</style>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  position: absolute;
  width: 100%;
  height: 100%;
}
.message {
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  color: blue;
}
</style>