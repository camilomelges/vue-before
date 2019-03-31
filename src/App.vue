<template>
  <div id="app">
    <header class="col-md-12 col-sm-12">
      <button><font-awesome-icon icon="bars" /></button>
      <span>Comunicados</span>
      <button class='float-right'><font-awesome-icon icon="search" /></button>
      <ul>
      </ul>
    </header>
    <nav>
        <span>Categorias</span>
        <router-link to='/sun-informations'>Informativos SUN</router-link>
        <router-link to='/sales-force'>Força de Vendas</router-link>
        <router-link to='/connected-vivo'>Vivo Ligado</router-link>
        <router-link to='/turbine-sales'>Turbine suas vendas</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello world!',
    };
  },
};
</script>

<style lang="scss" scoped>
  @import './Webroot/Styles/app.scss'
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
    font-family: 'Roboto', sans-serif;
    color: blue;
  }
</style>