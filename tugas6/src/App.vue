<script setup>
import { ref } from 'vue';

import HelloWorld from './components/HelloWorld.vue'
import BukuCatatan  from './components/BukuCatatan.vue';

const klik = ref('default')
</script>

<template>
  <div style="padding: 15px">
    <nav style="margin-bottom:20px">
      <button class="button" @click="klik = 'HelloWorld'">home</button>
      <button class="button" @click="klik = 'BukuCatatan'">Buku catatan</button>

    </nav>

  </div>

  <div v-if="klik === 'HelloWorld'">
  <HelloWorld />
  </div>
<div v-if-else="klik === 'BukuCatatan'">
  <BukuCatatan />
</div>
</template>
