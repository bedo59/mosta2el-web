<template>
  <div>
    <house />
    <chat />
  </div>
</template>

<script>
import house from "@/components/house.vue";
import Chat from '../components/chat.vue';
export default {
  name: "home",
  components: {
    house,
    Chat,
  },
};
</script>

<style>

</style>
