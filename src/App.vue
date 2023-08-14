<template>
    <headernav />
    <div id="main">
        <router-view />
    </div>
</template>

<script lang="ts">
import headernav from "./components/HeaderNav.vue";

export default {
    components: {
        headernav,
    },
};
</script>

<style lang="scss">
@import url("./assets/styles/reset.min.scss");

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

}

#main {
    padding-top: 56px;
}

h1 {
    font-size: 2em;
    font-weight: bold;
}
</style>
