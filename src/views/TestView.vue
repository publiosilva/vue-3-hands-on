<template>
  <div class="test">
    <h1>This is an test page</h1>
    <div>
      <button @click="track">Track</button>
    </div>
  </div>
</template>

<script setup>
function track() {
  this.$gtag.event("anything A", {
    event_category: "anything B",
    event_label: "anything C",
    value: "anything D",
  });
}
</script>

<style>
@media (min-width: 1024px) {
  .test {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
