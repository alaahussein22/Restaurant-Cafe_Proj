<script setup>
import NavbarApp from "./AppNavbar.vue";
import FooterApp from "./AppFooter.vue";
</script>
<template>
  <div class="layout">
    <v-layout>
      <v-main><slot></slot></v-main>
      <NavbarApp />
      <FooterApp />
    </v-layout>
  </div>
</template>
