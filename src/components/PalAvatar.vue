<template>
  <div class="pal-avatar">
    <img :src="`/paldeck/icons/${icon}.webp`" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["pal"]);
const icon = props.pal?.name.split(" ").join("_").toLowerCase();
</script>

<style scoped>
.pal-avatar {
  height: 100%;
  align-items: center;
  justify-content: center;
}

img {
  max-height: 100%;
  /* object-fit: contain; */
}
</style>
