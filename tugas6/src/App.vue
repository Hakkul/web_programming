<script setup>
import { ref } from 'vue';

import HelloWorld from './components/HelloWorld.vue'
import BukuCatatan  from './components/BukuCatatan.vue';

const klik = ref('BukuCatatan')
</script>

<template>
  <BukuCatatan />
</template>
