<template>
  <h3>Ch08.Vuetify</h3>
  <p>
    <router-link to="/components">Components</router-link><br />
    <router-link to="/grids">Grids</router-link><br />
    <router-link to="/layout">Layout</router-link><br />
  </p>
  <hr />
  <router-view></router-view>
</template>

<script setup></script>
<style>
#app {
  padding: 10px;
}
</style>
