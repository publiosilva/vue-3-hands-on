<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="click">click</button>
  </div>
</template>

<script setup>
function click() {
  this.$gtag.pageview("/about");
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
